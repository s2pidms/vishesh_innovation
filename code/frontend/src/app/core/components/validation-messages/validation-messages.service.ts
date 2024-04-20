import {Injectable} from "@angular/core";
import {AbstractControl, UntypedFormGroup, UntypedFormControl, ValidatorFn} from "@angular/forms";
import {AppGlobalService, ToastService} from "@core/services";
import {LabelTranslatePipe} from "src/app/shared/pipes";
@Injectable()
export class ValidationService {
    constructor(private toastService: ToastService, private appGlobalService: AppGlobalService) {}
    labelsTranslate: any = new LabelTranslatePipe(this.appGlobalService);
    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any = {
            required: "This field is required",
            invalidCreditCard: "Is invalid card number",
            invalidAadharCard: "invalid aadhar  number",
            email: "Invalid email address",
            invalidEmailAddress: "Invalid email address",
            invalidMobile: "Invalid Mobile no",
            numericAllowed: "Only numeric values are allowed",
            invalidPassword: "Invalid password. Password must be at least 6 characters long, and contain a number.",
            minlength: `Minimum length ${validatorValue.requiredLength}`,
            maxlength: `Max length ${validatorValue.requiredLength}`,
            mustMatch: "Passwords must match",
            invalidDob: "User must be minimum 16 Years old.",
            invalidUrl: "Invalid URL",
            alphaNumericAllowed: "Only apha numeric input is allowed",
            alphaAllowed: "Please enter letters.",
            fromToDate: `To Date Should be Greater than From Date`,
            LessThanToday: `Date shouldn't be greater than today's`,
            GreaterThanToday: `Date should be greater than today's`
        };
        return config[validatorName];
    }
    checkErrors(form: any, findFormErrors: any) {
        // let keys;
        // let objKeys;
        let keys = Object.keys(form.controls);
        // Object.values(form.controls).forEach((ele: any) => {
        //   if (![undefined, null].includes(ele.value)) {
        //     if (typeof ele.value == 'object') {
        //       objKeys = Object.keys(ele.controls);
        //       for (let i = 0; i < objKeys.length; i++) {
        //         keys.push(objKeys[i]);
        //       }
        //     }
        //   }
        // });

        for (let i = 0; i < keys.length; i++) {
            const element = keys[i];
            if (form.controls[element].status == "INVALID") {
                this.toastService.warning(
                    this.labelsTranslate.transform(findFormErrors.find((x: any) => x.key == element)?.message) ??
                        "Please fill all required field !"
                );
                return true;
            }
        }
        return false;
    }
    static creditCardValidator(control: AbstractControl) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (
            control.value.match(
                /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
            )
        ) {
            return null;
        } else {
            return {invalidCreditCard: true};
        }
    }
    aadharCardValidator(control: AbstractControl) {
        if (control.value && control.value.match(/^\d{12}$/)) {
            return null;
        } else {
            return {invalidAadharCard: true};
        }
    }
    emailValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line:max-line-length
        if (
            control.value &&
            control.value.match(
                /[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            )
        ) {
            return null;
        } else {
            return {invalidEmailAddress: true};
        }
    }

    mobileValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value && control.value.match(/^\d{10}$/)) {
            return null;
        } else {
            return {invalidMobile: true};
        }
    }
    alphaValidator(control: AbstractControl) {
        if (control.value == null || control.value.match(/^[a-zA-Z\s]*/)) {
            return null;
        } else {
            return {alphaAllowed: true};
        }
    }

    static numberValidator(control: AbstractControl) {
        if (control.value.length == 0 || control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return {numericAllowed: true};
        }
    }
    static alpaNumValidator(control: AbstractControl) {
        if (control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        } else {
            return {alphaNumericAllowed: true};
        }
    }

    static urlValidator(control: AbstractControl) {
        const URL_REGEXP =
            /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|in|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        if (control.value.match(URL_REGEXP)) {
            return null;
        } else {
            return {invalidUrl: true};
        }
    }
    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: UntypedFormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl: any = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({mustMatch: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    fromToDate(fromDateField: string, toDateField: string, errorName: string = "fromToDate"): ValidatorFn {
        return (formGroup: any) => {
            const fromDate = formGroup.controls[fromDateField];
            const toDate = formGroup.controls[toDateField];
            let from = null;
            let to = null;
            if (fromDate.value && fromDate.value.year && fromDate.value.month && fromDate.value.day) {
                from = new Date(`${fromDate.value.year}-${fromDate.value.month}-${fromDate.value.day}`);
            }
            if (toDate.value && toDate.value.year && toDate.value.month && toDate.value.day) {
                to = new Date(`${toDate.value.year}-${toDate.value.month}-${toDate.value.day}`);
            }
            if (fromDate !== null && toDate !== null && from && to && to.getTime() < from.getTime()) {
                toDate.setErrors({fromToDate: true});
            }
            return null;
        };
    }

    LessThanToday(control: UntypedFormControl): any {
        let today: Date = new Date();
        if (new Date(control.value) > today) return {LessThanToday: true};
        return null;
    }
    GreaterThanToday(control: UntypedFormControl): any {
        let today: Date = new Date();
        if (new Date(control.value) <= today) return {GreaterThanToday: true};
        return null;
    }
}
