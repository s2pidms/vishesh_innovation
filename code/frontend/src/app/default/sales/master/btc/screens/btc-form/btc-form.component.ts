import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {SpinnerService} from "@core/services";
import {BTCService} from "@services/sales";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {BTC_FORM_ERRORS} from "@mocks/validations/sales";
import {IB2CCustomerMasterData} from "@mocks/models/sales/master";
import {Location} from "@angular/common";

@Component({
    selector: "app-btc-form",
    templateUrl: "./btc-form.component.html"
})
export class BTCFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    statesOfIndia = STATES_LIST;
    masterData: IB2CCustomerMasterData = {
        autoIncrementNo: ""
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        B2CCode: new UntypedFormControl("", [Validators.required]),
        customerName: new UntypedFormControl("", [Validators.required]),
        emailId: new UntypedFormControl(""),
        mobileNo: new UntypedFormControl("", [Validators.required]),
        isActive: new UntypedFormControl(true, [Validators.required]),
        stateOfSupply: new UntypedFormControl("", [Validators.required]),
        line1: new UntypedFormControl(""),
        line2: new UntypedFormControl(""),
        state: new UntypedFormControl(""),
        district: new UntypedFormControl(""),
        pinCode: new UntypedFormControl(""),
        country: new UntypedFormControl("")
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private b2cService: BTCService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, BTC_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.b2cService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.b2cService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.b2cService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["B2CCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (this.action === "edit") {
                        }
                        if (params["id"]) {
                            return this.b2cService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
