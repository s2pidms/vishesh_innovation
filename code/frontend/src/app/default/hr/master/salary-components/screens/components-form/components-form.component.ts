import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {SalaryComponentService} from "@services/hr";
import {ValidationService} from "@core/components";
import {SALARY_COMPONENTS_FORM_ERRORS} from "@mocks/validations/hr";
import {ISalaryComponentsMasterData} from "@mocks/models/hr&Admin/master";

@Component({
    selector: "app-components-form",
    templateUrl: "./components-form.component.html"
})
export class ComponentsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ISalaryComponentsMasterData = {
        autoIncrementNo: "",
        earningHeadOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        componentCode: new UntypedFormControl("", [Validators.required]),
        earningHead: new UntypedFormControl(null, [Validators.required]),
        abbreviation: new UntypedFormControl("", [Validators.required]),
        earningType: new UntypedFormControl(null, [Validators.required]),
        calculationFactor: new UntypedFormControl("", [Validators.required]),
        earningCycle: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl(null, [Validators.required]),
        isManagementStaffSalary: new UntypedFormControl(false, [Validators.required]),
        isOperatingStaffSalary: new UntypedFormControl(false, [Validators.required]),
        isPartOfCTC: new UntypedFormControl(false, [Validators.required]),
        isCalculateOnProRataBasis: new UntypedFormControl(false, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private salaryComponentService: SalaryComponentService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, SALARY_COMPONENTS_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.salaryComponentService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/salary_components/sc-list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.salaryComponentService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/salary_components/sc-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();

        this.salaryComponentService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["componentCode"].setValue(this.masterData.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salaryComponentService.getById(params["id"]);
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
                    if (["Fixed Amount", "Variable Amount"].includes(success.earningType)) {
                        this.f["calculationFactor"].setValue("-");
                        this.f["calculationFactor"].disable();
                    } else {
                        this.f["calculationFactor"].enable();
                    }
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    selectEarningHead(ev: any) {
        if (ev.target.value == "Basic Pay") {
            this.form.controls["abbreviation"].setValue("Basic");
        } else if (ev.target.value == "Arrears") {
            this.form.controls["abbreviation"].setValue("Ar");
        } else {
            let str = ev.target.value
                .match(/\b([A-Za-z0-9])/g)
                .join("")
                .toUpperCase();
            this.form.controls["abbreviation"].setValue(str);
        }
    }

    setEarningType(ve: any) {
        if (["Fixed Amount", "Variable Amount"].includes(ve.target.value)) {
            this.f["calculationFactor"].setValue("-");
            this.f["calculationFactor"].disable();
        } else {
            this.f["calculationFactor"].enable();
            this.f["calculationFactor"].setValue(null);
        }
    }
}
