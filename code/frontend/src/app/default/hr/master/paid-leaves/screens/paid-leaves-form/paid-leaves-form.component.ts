import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {PaidLeavesService} from "@services/hr";
import {PAID_LEAVES_FORM_ERRORS} from "@mocks/validations/hr";
import {SpinnerService, UtilityService, ToastService} from "@core/services";
import {IPaidLeavesMasterData} from "@mocks/models/hr&Admin/master/paidLeavesMasterData";
@Component({
    selector: "app-paid-leaves-form",
    templateUrl: "./paid-leaves-form.component.html"
})
export class PaidLeavesFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    employees: any = [];
    selectedEmp: any = {};
    calendarYearOptions = [
        {value: new Date().getFullYear()},
        {value: new Date().getFullYear() + 1},
        {value: new Date().getFullYear() + 2}
    ];
    masterData: IPaidLeavesMasterData = {
        autoIncrementNo: "",
        maxPaidLeaves: 0,
        employeesOptions: []
    };
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        paidLeavesNumber: new UntypedFormControl(""),
        employeeId: new UntypedFormControl(null, [Validators.required]),
        dateOfJoining: new UntypedFormControl("", [Validators.required]),
        calendarYear: new UntypedFormControl(new Date().getFullYear(), [Validators.required]),
        casualLeaveCL: new UntypedFormControl("0"),
        sickLeaveSL: new UntypedFormControl("0"),
        privilegeLeavePL: new UntypedFormControl("0"),
        totalCasualLeaveCL: new UntypedFormControl("0"),
        totalSickLeaveSL: new UntypedFormControl("0"),
        totalPrivilegeLeavePL: new UntypedFormControl("0")
    });
    get f() {
        return this.form.controls;
    }

    constructor(
        private paidLeaveService: PaidLeavesService,
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

        if (this.validationService.checkErrors(this.form, PAID_LEAVES_FORM_ERRORS)) {
            return;
        }

        this.form.enable();
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.form.controls["privilegeLeavePL"].disable();
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.paidLeaveService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.paidLeaveService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.paidLeaveService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["paidLeavesNumber"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["calendarYear"].setValue(new Date().getFullYear());
            this.form.controls["casualLeaveCL"].setValue("0");
            this.form.controls["sickLeaveSL"].setValue("0");
            this.form.controls["privilegeLeavePL"].setValue("0");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.paidLeaveService.getById(params["id"]);
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

                    if (success.dateOfJoining) {
                        success.dateOfJoining = this.utilityService.getFormatDate(success.dateOfJoining, "YYYY-MM-DD");
                    }

                    this.form.patchValue(success);

                    this.f.employeeId.disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });

            // this.menuTitleService.set({
            //     type: this.action
            // });
        });
    }
    selectEmploy(ev: any) {
        let emp = this.masterData.employeesOptions.filter((x: any) => x.value === ev.value);
        this.selectedEmp = emp[0];
        if (emp[0].empJoiningDate) {
            this.form.controls["dateOfJoining"].setValue(
                this.utilityService.getFormatDate(emp[0].empJoiningDate, "YYYY-MM-DD")
            );
        }
    }

    paidDays() {
        if (this.form.controls["casualLeaveCL"].value > +this.masterData?.maxPaidLeaves)
            this.form.controls["casualLeaveCL"].setValue(null);
    }
}
