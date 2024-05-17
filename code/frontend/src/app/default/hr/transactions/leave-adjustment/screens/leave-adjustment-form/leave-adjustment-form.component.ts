import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {UtilityService, SpinnerService, ToastService} from "@core/services";
import {LeavesApplicationService} from "@services/hr";
import {LEAVE_APPLICATION_FORM_ERRORS} from "@mocks/validations/hr";
import {ValidationService} from "@core/components";
import {ILeaveApplicationMasterData} from "@mocks/models/hr&Admin/transactions";

@Component({
    selector: "app-leave-adjustment-form",
    templateUrl: "./leave-adjustment-form.component.html"
})
export class LeaveAdjustmentFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    privilegeLeave: number = 0;
    casualLeave: number = 0;
    sickLeaveSL: number = 0;
    leaveDays: number = 0;
    previousToDate: any = "";
    statusOptions: any = {
        create: "Submitted",
        edit: "Submitted",
        approve: "Approved"
    };
    masterData: ILeaveApplicationMasterData = {
        autoIncrementNo: "",
        paidLeavesValidation: 0,
        employeesOptions: [],
        allHolidaysOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(),
        leavesApplicationNumber: new UntypedFormControl("", [Validators.required]),
        applicationDate: new UntypedFormControl(this.utilityService.getTodayDate("DD-MM-YYYY"), [Validators.required]),
        employeeId: new UntypedFormControl(null),
        leaveType: new UntypedFormControl("", [Validators.required]),
        fromDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        toDate: new UntypedFormControl("", [Validators.required]),
        fromSession: new UntypedFormControl("First"),
        toSession: new UntypedFormControl("Second"),
        leaveDays: new UntypedFormControl(0, [Validators.required]),
        halfDay: new UntypedFormControl(""),
        reasonForLeave: new UntypedFormControl("", [Validators.required]),
        resumptionDate: new UntypedFormControl("", [Validators.required]),
        status: new UntypedFormControl("Submitted")
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private leaveAppService: LeavesApplicationService,
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

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, LEAVE_APPLICATION_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    create(formData: any) {
        this.spinner.show();
        this.form.value.applicationDate = this.form.value.applicationDate.split("-").reverse().join("-");
        this.leaveAppService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/transactions/leave_adjustment/leave-adjustment-list"]);
        });
    }
    update(id: any) {
        this.spinner.show();
        this.form.value.applicationDate = this.form.value.applicationDate.split("-").reverse().join("-");
        this.leaveAppService.updateOnLeaveAdjustment(id, this.form.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/transactions/leave_adjustment/leave-adjustment-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.leaveAppService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["leavesApplicationNumber"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["fromDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["applicationDate"].setValue(this.utilityService.getTodayDate("DD-MM-YYYY"));

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.leaveAppService.getById(params["id"]);
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
                    if (success.toDate) {
                        this.previousToDate = success.toDate;
                    }
                    if (success.applicationDate) {
                        success.applicationDate = this.utilityService.getFormatDate(
                            success.applicationDate,
                            "DD-MM-YYYY"
                        );
                    }

                    if (success.fromDate) {
                        success.fromDate = this.utilityService.getFormatDate(success.fromDate, "YYYY-MM-DD");
                    }

                    if (success.toDate) {
                        success.toDate = this.utilityService.getFormatDate(success.toDate, "YYYY-MM-DD");
                    }

                    if (success.resumptionDate) {
                        success.resumptionDate = this.utilityService.getFormatDate(
                            success.resumptionDate,
                            "YYYY-MM-DD"
                        );
                    }

                    success.status = this.statusOptions[this.action];
                    this.form.patchValue(success);
                    this.getPaidLeavesById();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    changeFromSession() {
        let value = this.form.controls["fromSession"].value;
        if (value == "First") {
            if (this.form.controls["leaveDays"].value) {
                this.form.controls["leaveDays"].setValue(this.form.controls["leaveDays"].value + 0.5);
            }
        } else {
            if (this.form.controls["leaveDays"].value) {
                this.form.controls["leaveDays"].setValue(this.form.controls["leaveDays"].value - 0.5);
            }
        }
    }

    setHalfDayHandler() {
        let toDate = this.form.controls["toDate"].value;
        let value = this.form.controls["toSession"].value;
        if (!this.form.controls["toDate"].value) {
            this.toastService.warning("Please Select To Date !!");
            this.form.controls["toSession"].setValue(null);
            return;
        }
        if (this.form.controls["fromSession"].value == "Second") {
            this.leaveDays -= 0.5;
        }
        if (this.form.controls["toSession"].value == "First") {
            this.leaveDays -= 0.5;
        }

        if (value == "First") {
            this.form.controls["leaveDays"].setValue(this.form.controls["leaveDays"].value - 0.5);
            this.form.controls["resumptionDate"].setValue(this.utilityService.getFormatDate(toDate, "YYYY-MM-DD"));
        } else {
            this.form.controls["leaveDays"].setValue(this.form.controls["leaveDays"].value + 0.5);

            let nextDate = this.utilityService.getIncrementedDate(toDate, 1, "days");

            this.getResumptionDate(nextDate);
        }
    }

    setFromSession() {
        this.form.controls["fromSession"].setValue("First");
        let fromDate = this.form.controls["fromDate"].value;
        let toDate = this.form.controls["toDate"].value;
        if (toDate) {
            if (fromDate > toDate) {
                this.toastService.warning("ToDate should be greater than fromDate !!");
                this.form.controls["fromDate"].setValue(null);
                return;
            }

            this.leaveDays = this.utilityService.getDiffDate(toDate, fromDate, "days");
            let nextDay = this.utilityService.getFormatDate(fromDate, "YYYY-MM-DD");
            this.getDaysLeaves(toDate, nextDay);
        }
    }

    getPaidLeavesById() {
        let id = this.f["employeeId"].value;
        this.leaveAppService.getPaidLeavesById(id).subscribe(success => {
            this.casualLeave = success.casualLeaveCL;
            this.privilegeLeave = success.privilegeLeavePL;
            this.sickLeaveSL = success.sickLeaveSL;
        });
    }

    setLeaveType(leave: number, title: String) {
        if (leave > 0) this.form.controls["leaveType"].setValue(title);
        if (title == "Advance Leaves") {
            this.form.controls["leaveType"].setValue(title);
        }
    }

    setDatesHandler() {
        if (this.form.controls["toDate"].value > this.previousToDate) {
            this.toastService.warning("Leave Days Should Be less than Previous Days !!");
            return this.form.controls["toDate"].setValue(
                this.utilityService.getFormatDate(this.previousToDate, "YYYY-MM-DD")
            );
        }
        if (!this.form.controls["fromDate"].value) {
            this.toastService.warning("Please Select from Date !!");
            return;
        }
        let fromDate = this.form.controls["fromDate"].value;
        let toDate = this.form.controls["toDate"].value;
        if (fromDate > toDate) {
            this.toastService.warning("ToDate should be greater than fromDate !!");
            this.form.controls["toDate"].setValue(null);
            return;
        }
        this.form.controls["toSession"].setValue("Second");
        this.leaveDays = this.utilityService.getDiffDate(toDate, fromDate, "days");
        let nextDay = this.utilityService.getFormatDate(fromDate, "YYYY-MM-DD");
        this.getDaysLeaves(toDate, nextDay);
        let nextDate = this.utilityService.getIncrementedDate(toDate, 1, "days");
        this.getResumptionDate(nextDate);
    }

    getResumptionDate(nextDate: any) {
        let holidays = this.getHolidaysOfEmp();

        if (
            holidays.some(
                (x: any) =>
                    this.utilityService.getFormatDate(x.holidayDate, "YYYY-MM-DD") ==
                    this.utilityService.getFormatDate(nextDate, "YYYY-MM-DD")
            ) ||
            this.utilityService.getFormatDate(nextDate, "dddd") == "Sunday"
        ) {
            nextDate = this.utilityService.getIncrementedDate(nextDate, 1, "days");

            this.getResumptionDate(nextDate);
        } else {
            this.form.controls["resumptionDate"].setValue(this.utilityService.getFormatDate(nextDate, "YYYY-MM-DD"));
        }
    }

    getDaysLeaves(toDate: any, nextDay: any) {
        let holidays = this.getHolidaysOfEmp();
        if (
            holidays.some(
                (x: any) =>
                    this.utilityService.getFormatDate(x.holidayDate, "YYYY-MM-DD") ==
                    this.utilityService.getFormatDate(toDate, "YYYY-MM-DD")
            ) ||
            this.utilityService.getFormatDate(toDate, "dddd") == "Sunday"
        ) {
            this.toastService.warning("To Date shouldn't be Holiday or Sunday !");
            this.form.controls["toDate"].setValue(null);
            return;
        }

        if (
            this.utilityService.getFormatDate(toDate, "YYYY-MM-DD") !=
            this.utilityService.getFormatDate(nextDay, "YYYY-MM-DD")
        ) {
            if (
                holidays.some(
                    (x: any) =>
                        this.utilityService.getFormatDate(x.holidayDate, "YYYY-MM-DD") ==
                        this.utilityService.getFormatDate(nextDay, "YYYY-MM-DD")
                ) ||
                this.utilityService.getFormatDate(nextDay, "dddd") == "Sunday"
            ) {
                this.leaveDays -= 1;
            }
            nextDay = this.utilityService.getIncrementedDate(nextDay, 1, "days");
            this.getDaysLeaves(toDate, nextDay);
        } else {
            if (this.leaveDays > 1) {
                this.form.controls["halfDay"].setValue(null);
                this.form.controls["halfDay"].disable();
            } else {
                this.form.controls["halfDay"].enable();
            }
            let leaveType = this.form.controls["leaveType"].value;

            if (leaveType == "Paid Leaves" && this.leaveDays > this.casualLeave) {
                this.toastService.warning(`Leave Days should not be greater than ${leaveType}`);
                this.form.controls["toDate"].setValue(null);
                return;
            }
            if (leaveType == "Comp. Off [C/Off]" && this.leaveDays > this.privilegeLeave) {
                this.toastService.warning(`Leave Days should not be greater than ${leaveType}`);
                this.form.controls["toDate"].setValue(null);
                return;
            }
            if (this.form.controls["fromSession"].value == "Second") {
                this.leaveDays -= 0.5;
            }
            if (this.form.controls["toSession"].value == "First") {
                this.leaveDays -= 0.5;
            }
            this.form.controls["leaveDays"].setValue(this.leaveDays);
        }
    }

    getHolidaysOfEmp() {
        let employee = this.masterData?.employeesOptions.find(
            (ele: any) => ele.value == this.form.controls["employeeId"].value
        );
        let holidays = [];
        if (["work", "factory"].some(e => employee?.joiningLocation?.toLowerCase().includes(e))) {
            holidays = this.masterData?.allHolidaysOptions.filter((x: any) => ["Factory", "Office & Factory"].includes(x.holidayLocation));
        } else {
            holidays = this.masterData?.allHolidaysOptions.filter((x: any) => ["Office", "Office & Factory"].includes(x.holidayLocation));
        }
        return holidays;
    }
}
