import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AdvanceSalaryRequestService} from "@services/hr";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SALARY_ADVANCE_FORM_ERRORS} from "@mocks/validations/hr";
import {SpinnerService, UtilityService, ToastService} from "@core/services";
import {ISalaryAdvanceSummaryMasterData} from "@mocks/models/hr&Admin/transactions";

@Component({
    selector: "app-salary-adv-summary-form",
    templateUrl: "./salary-adv-summary-form.component.html"
})
export class SalaryAdvSummaryFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ISalaryAdvanceSummaryMasterData = {
        autoIncrementNo: "",
        employeesOptions: []
    };

    constructor(
        private salaryAdvanceSummaryService: AdvanceSalaryRequestService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        salaryAdvanceRequestNumber: new UntypedFormControl("", [Validators.required]),
        employeeId: new UntypedFormControl(null),
        employeeCode: new UntypedFormControl("", [Validators.required]),
        requestDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        amount: new UntypedFormControl("", [Validators.required]),
        repayStartMonthYear: new UntypedFormControl(null, [Validators.required]),
        repayEndMonthYear: new UntypedFormControl(null, [Validators.required]),
        tenureMonths: new UntypedFormControl(1),
        repayAmountPerMonth: new UntypedFormControl("", [Validators.required]),
        reasonForAdvance: new UntypedFormControl(""),
        status: new UntypedFormControl("Submitted")
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    statusArr: any = {
        create: "Submitted",
        approve: "Approved",
        reject: "Rejected",
        edit: "Submitted"
    };

    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, SALARY_ADVANCE_FORM_ERRORS)) {
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
        this.salaryAdvanceSummaryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    update(formData: any) {
        this.spinner.show();
        this.salaryAdvanceSummaryService.update(formData._id, this.form.value).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    selectedEmployee(ev: any) {
        this.form.controls["employeeCode"].setValue(ev?.empCode);
    }

    handleDates() {
        let repayStartMonthYear = this.form.controls["repayStartMonthYear"].value;
        let tenureMonth = this.form.controls["tenureMonths"].value;

        let repayEndMonthYear = this.utilityService.monthYearCal(repayStartMonthYear, tenureMonth);

        this.form.controls["repayEndMonthYear"].setValue(
            this.utilityService.getFormatDate(repayEndMonthYear, "YYYY-MM")
        );
        this.form.controls["repayAmountPerMonth"].setValue(
            Number(this.form.controls["amount"].value / +tenureMonth).toFixed(2)
        );
    }

    getInitialData() {
        this.spinner.show();
        this.salaryAdvanceSummaryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["salaryAdvanceRequestNumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["requestDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["repayStartMonthYear"].setValue("");
            this.form.controls["status"].setValue("Submitted");
            this.form.controls["tenureMonths"].setValue(1);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salaryAdvanceSummaryService.getById(params["id"]);
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

                    if (success.repayStartMonthYear) {
                        success.repayStartMonthYear = this.utilityService.getFormatDate(
                            success?.repayStartMonthYear,
                            "YYYY-MM"
                        );
                    }

                    if (success.repayEndMonthYear) {
                        success.repayEndMonthYear = this.utilityService.getFormatDate(
                            success?.repayEndMonthYear,
                            "YYYY-MM"
                        );
                    }

                    if (success.requestDate) {
                        success.requestDate = this.utilityService.getFormatDate(success?.requestDate, "YYYY-MM-DD");
                    }

                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
            // this.menuTitleService.set({
            //     type: this.action
            // });
        });
    }
}
