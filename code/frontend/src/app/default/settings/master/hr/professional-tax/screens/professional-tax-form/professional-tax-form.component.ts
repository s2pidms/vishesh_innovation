import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ProfessionalTaxService} from "@services/settings";
import {PROFESSIONAL_TAX_FORM_ERRORS} from "@mocks/validations/settings";
import {ToastService, UtilityService} from "@core/services";
import {STATES_LIST} from "@mocks/states.constant";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {IProfessionalTaxMasterData} from "@mocks/models/settings/masters";

@Component({
    selector: "app-professional-tax-form",
    templateUrl: "./professional-tax-form.component.html"
})
export class ProfessionalTaxFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    statesArr: any = STATES_LIST;
    masterData: IProfessionalTaxMasterData = {
        autoIncrementNo: ""
    };

    constructor(
        private professionalTaxService: ProfessionalTaxService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        professionalTaxCode: new UntypedFormControl(""),
        state: new UntypedFormControl("", [Validators.required]),
        gender: new UntypedFormControl(null, [Validators.required]),
        isFebAmount: new UntypedFormControl(0),
        minSalary: new UntypedFormControl(0),
        maxSalary: new UntypedFormControl(0),
        amount: new UntypedFormControl(0, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, PROFESSIONAL_TAX_FORM_ERRORS)) {
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
        this.professionalTaxService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/hr/professional_tax/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.professionalTaxService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/hr/professional_tax/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.professionalTaxService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["professionalTaxCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isFebAmount"].setValue(0);
            this.form.controls["minSalary"].setValue(0);
            this.form.controls["maxSalary"].setValue(0);
            this.form.controls["amount"].setValue(0);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.professionalTaxService.getById(params["id"]);
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
