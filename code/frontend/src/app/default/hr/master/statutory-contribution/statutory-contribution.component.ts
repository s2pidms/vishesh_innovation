import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StatutoryContributionsSetupService} from "@services/hr";
import {ToastService, SpinnerService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {STATUTORY_CONTRIBUTION_FORM_ERRORS} from "@mocks/validations/hr";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-statutory-contribution",
    templateUrl: "./statutory-contribution.component.html"
})
export class StatutoryContributionComponent implements OnInit {
    active: number = 1;
    submitted = false;
    action: string = "create";
    roles: any = [];
    statutorySetUp: any = {};
    maleProfessionalTax: any = [];
    FemaleProfessionalTax: any = [];
    professionalTax: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private StatutoryService: StatutoryContributionsSetupService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService
    ) {}
    form: any = this.formBuilder.group({
        _id: new UntypedFormControl(null),
        employeeProvidentFund: new UntypedFormGroup({
            establishmentId: new UntypedFormControl("", [Validators.required]),
            labourIdentificationNo: new UntypedFormControl("", [Validators.required]),
            deductionCycle: new UntypedFormControl(null, [Validators.required]),
            employeeContributionRate: new UntypedFormControl("", [Validators.required]),
            employeeContributionRateToEPS: new UntypedFormControl("", [Validators.required]),
            employeeContributionRateToEPF: new UntypedFormControl("", [Validators.required]),
            includeEmployerContributionInCTC: new UntypedFormControl(false),
            restrictContributionToRs1500OfPFWage: new UntypedFormControl(false),
            proRateBasedCalculationLOP: new UntypedFormControl(false)
        }),
        employeeStateInsurance: new UntypedFormGroup({
            employerESINo: new UntypedFormControl("", [Validators.required]),
            deductionCycle: new UntypedFormControl("", [Validators.required]),
            employeeContributionRate: new UntypedFormControl("", [Validators.required]),
            employerContributionRate: new UntypedFormControl("", [Validators.required]),
            includeEmployerContributionInCTC: new UntypedFormControl(false),
            proRateBasedCalculationLOP: new UntypedFormControl(false)
        }),
        professionalTax: new UntypedFormGroup({
            statePlaceOfWork: new UntypedFormControl("", [Validators.required]),
            employerPTNo: new UntypedFormControl("", [Validators.required]),
            deductionCycle: new UntypedFormControl("", [Validators.required])
        }),
        labourWelfareFund: new UntypedFormGroup({
            statePlaceOfWork: new UntypedFormControl("", [Validators.required]),
            registrationNo: new UntypedFormControl("", [Validators.required]),
            deductionCycle: new UntypedFormControl("", [Validators.required]),
            employeeContribution: new UntypedFormControl("", [Validators.required]),
            employerContribution: new UntypedFormControl("", [Validators.required]),
            contributionMonths: new UntypedFormControl("", [Validators.required])
        })
    });

    get EPF() {
        return this.form.get("employeeProvidentFund") as UntypedFormGroup;
    }

    get ESI() {
        return this.form.get("employeeStateInsurance") as UntypedFormGroup;
    }

    get PT() {
        return this.form.get("professionalTax") as UntypedFormGroup;
    }

    get LWF() {
        return this.form.get("labourWelfareFund") as UntypedFormGroup;
    }

    get f() {
        return this.form.controls;
    }
    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, STATUTORY_CONTRIBUTION_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.StatutoryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/hr/master/statutory_contribution"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.StatutoryService.getByCompanyId({}).subscribe(success => {
            this.statutorySetUp = success;
            this.roles = success.roles;
            this.professionalTax = success.professionalTax;

            this.form.patchValue(success?.itemDetails);
            this.setProfessionalTax();
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        if (params["id"]) {
                            return this.StatutoryService.getByCompanyId(params["id"]);
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

                    if (success.role && success.role._id) {
                        success.role = success.role?._id;
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setProfessionalTax() {
        this.maleProfessionalTax = this.professionalTax.find(
            (x: any) => x.state == this.PT.controls["statePlaceOfWork"].value && x.gender == "Male"
        )?.slabs;

        this.FemaleProfessionalTax = this.professionalTax.find(
            (x: any) => x.state == this.PT.controls["statePlaceOfWork"].value && x.gender == "Female"
        )?.slabs;
    }
}
