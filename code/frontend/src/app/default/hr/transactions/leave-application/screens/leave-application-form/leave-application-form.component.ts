import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LeavesApplicationService} from "@services/hr";
import {LEAVE_APPLICATION_FORM_ERRORS} from "@mocks/validations/hr";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {UtilityService, SpinnerService, ToastService} from "@core/services";
import {CancelPoComponent} from "@shared/modals";
import {ILeaveApplicationMasterData} from "@mocks/models/hr&Admin/transactions";
@Component({
    selector: "app-leave-application-form",
    templateUrl: "./leave-application-form.component.html"
})
export class LeaveApplicationFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    privilageLeave: number = 0;
    casualLeave: number = 0;
    sickLeaveSL: number = 0;
    leaveDays: number = 0;

    statusOptions: any = {
        create: "Submitted",
        edit: "Submitted",
        approve: "Approved",
        cancel: "Cancelled",
        cancelLeave: "Cancelled"
    };
    masterData: ILeaveApplicationMasterData = {
        autoIncrementNo: "",
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
        status: new UntypedFormControl("Submitted"),
        cancelReason: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private leaveAppService: LeavesApplicationService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
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
            this.location.back();
        });
    }

    update(id: any) {
        this.spinner.show();
        this.form.value.applicationDate = this.form.value.applicationDate.split("-").reverse().join("-");
        this.leaveAppService.update(id, this.form.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    cancel() {
        this.form.enable();
        console.log("this.form.value", this.form.value);

        if (this.action == "cancelLeave" && !this.form.controls["cancelReason"].value) {
            this.toastService.warning("Remarks for Cancellation is Required");
            this.form.disable();
            if (this.action == "cancelLeave") {
                this.f["cancelReason"].enable();
            }
            return;
        }
        let formData: any = this.form.value;
        formData.applicationDate = formData.applicationDate.split("-").reverse().join("-");
        this.spinner.show();
        this.leaveAppService.updateOnCancel(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.leaveAppService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["leavesApplicationNumber"].setValue(this.masterData?.autoIncrementNo);
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
                        if (this.action == "cancelLeave") {
                            this.f["cancelReason"].enable();
                        }
                    }
                });
        });
    }

    changeFromSession() {
        let fromSessionValue = this.form.controls["fromSession"].value;
        let toSessionValue = this.form.controls["toSession"].value;
        let fromDate = this.form.controls["fromDate"].value;
        let toDate = this.form.controls["toDate"].value;
        let leaveDaysControl = this.form.controls["leaveDays"];
        if (fromDate == toDate) {
            if (fromSessionValue == toSessionValue) {
                leaveDaysControl.setValue(0.5);
                this.leaveDays = leaveDaysControl.value;
            } else {
                if (fromSessionValue == "Second" && toSessionValue == "First") {
                    leaveDaysControl.setValue(0);
                    this.leaveDays = leaveDaysControl.value;
                }
                leaveDaysControl.setValue(1);
                this.leaveDays = leaveDaysControl.value;
            }
        } else {
            if (fromSessionValue == "First") {
                leaveDaysControl.setValue(leaveDaysControl.value + 0.5);
                this.leaveDays = leaveDaysControl.value;
            } else {
                leaveDaysControl.setValue(leaveDaysControl.value - 0.5);
                this.leaveDays = leaveDaysControl.value;
            }
        }

        this.checkValidation();
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
        if (value == "First") {
            this.form.controls["leaveDays"].setValue(this.form.controls["leaveDays"].value - 0.5);
            this.leaveDays -= 0.5;
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
            this.privilageLeave = success.privilegeLeavePL;
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
            if (this.form.controls["fromSession"].value == "Second") {
                this.leaveDays -= 0.5;
            }
            if (this.form.controls["toSession"].value == "First") {
                this.leaveDays -= 0.5;
            }
            this.form.controls["leaveDays"].setValue(this.leaveDays);
            this.checkValidation();
        }
    }

    getHolidaysOfEmp() {
        let employee = this.masterData?.employeesOptions.find(
            (ele: any) => ele.value == this.form.controls["employeeId"].value
        );
        let holidays = [];
        if (["work", "factory"].some(e => employee?.joiningLocation?.toLowerCase().includes(e))) {
            holidays = this.masterData.allHolidaysOptions.filter((x: any) =>
                ["Factory", "Office & Factory"].includes(x.holidayLocation)
            );
        } else {
            holidays = this.masterData.allHolidaysOptions.filter((x: any) =>
                ["Office", "Office & Factory"].includes(x.holidayLocation)
            );
        }
        return holidays;
    }
    checkValidation() {
        let leaveType = this.form.controls["leaveType"].value;
        if (leaveType == "Paid Leaves" && this.leaveDays > this.casualLeave) {
            this.toastService.warning(`Leave Days should not be greater than ${leaveType}`);
            this.leaveDays = 0;
            this.form.controls["leaveDays"].setValue(this.leaveDays);

            this.form.controls["toDate"].setValue(null);
            return;
        }
        if (leaveType == "Compensatory Off" && this.leaveDays > this.privilageLeave) {
            this.toastService.warning(`Leave Days should not be greater than ${leaveType}`);
            this.leaveDays = 0;
            this.form.controls["leaveDays"].setValue(this.leaveDays);
            this.form.controls["toDate"].setValue(null);
            return;
        }
        if (leaveType == "Advance Leaves" && this.leaveDays > this.sickLeaveSL) {
            this.toastService.warning(`Leaves Days Should not be greater than Advance Leaves!`);
            this.leaveDays = 0;
            this.form.controls["leaveDays"].setValue(this.leaveDays);
            this.form.controls["toDate"].setValue(null);
            return;
        }
    }
    openCancelModal() {
        if (this.action == "cancelLeave" && !this.form.controls["cancelReason"].value) {
            this.toastService.warning("Remarks for Cancellation is Required");
            this.form.disable();
            if (this.action == "cancelLeave") {
                this.f["cancelReason"].enable();
            }
            return;
        }

        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "Leave Cancellation";
        modalRef.componentInstance.cancelText = "Do you want to Cancel Approved Leave ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.cancel();
                }
            },
            (reason: any) => {}
        );
    }
}
