import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {OnDutyApplicationService} from "@services/hr";
import {Router, ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {OD_APPLICATION_FORM_ERRORS} from "@mocks/validations/hr";
import {MenuTitleService, SpinnerService, UtilityService, ToastService} from "@core/services";
import {IODApplicationMasterData} from "@mocks/models/hr&Admin/transactions";
@Component({
    selector: "app-od-application-form",
    templateUrl: "./od-application-form.component.html"
})
export class ODApplicationFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];
    employee: any = [];
    user: any = {};
    ODDays: number = 0;
    statusArr: any = {
        create: "Submitted",
        approve: "Approved",
        cancel: "Cancelled",
        edit: "Submitted"
    };
    masterData: IODApplicationMasterData = {
        autoIncrementNo: "",
        employeesOptions: [],
        allHolidaysOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(),
        onDutyApplicationNumber: new UntypedFormControl("", [Validators.required]),
        employeeId: new UntypedFormControl("", [Validators.required]),
        applicationDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        halfDay: new UntypedFormControl(),
        fromDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        ODType: new UntypedFormControl(null, [Validators.required]),
        fromSession: new UntypedFormControl("First"),
        toSession: new UntypedFormControl("Second"),
        toDate: new UntypedFormControl("", [Validators.required]),
        ODDays: new UntypedFormControl("", [Validators.required]),
        resumptionDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        reason: new UntypedFormControl(),
        status: new UntypedFormControl("Submitted")
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private OnDutyService: OnDutyApplicationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
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
        if (this.validationService.checkErrors(this.form, OD_APPLICATION_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        if (new Date(formData.toDate).getMonth() != new Date(formData.fromDate).getMonth()) {
            this.toastService.warning("The Outdoor Duty dates should not cross over into another month. !!");
            this.form.controls["toDate"].setValue(null);
            return;
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.OnDutyService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/transactions/OD_application/od-list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.OnDutyService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/transactions/OD_application/od-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.OnDutyService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["onDutyApplicationNumber"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["fromDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["resumptionDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["applicationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.OnDutyService.getById(params["id"]);
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

                    if (success.applicationDate) {
                        success.applicationDate = this.utilityService.getFormatDate(
                            success.applicationDate,
                            "YYYY-MM-DD"
                        );
                    }

                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    let value = this.form.controls["ODDays"].value;
                    if (value > 1) {
                        this.form.controls["halfDay"].disable();
                        this.form.controls["halfDay"].setValue(null);
                    } else {
                    }

                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
            this.menuTitleService.set({
                type: this.action
            });
        });
    }

    changeFromSession() {
        let value = this.form.controls["fromSession"].value;
        if (value == "First") {
            if (this.form.controls["ODDays"].value) {
                this.form.controls["ODDays"].setValue(this.form.controls["ODDays"].value + 0.5);
            }
        } else {
            if (this.form.controls["ODDays"].value) {
                this.form.controls["ODDays"].setValue(this.form.controls["ODDays"].value - 0.5);
            }
        }
    }

    setDatesHandler() {
        let fromDate = this.form.controls["fromDate"].value;
        let toDate = this.form.controls["toDate"].value;
        if (new Date(toDate).getMonth() != new Date(fromDate).getMonth()) {
            this.toastService.warning("The Outdoor Duty dates should not cross over into another month. !!");
            this.form.controls["toDate"].setValue(null);
            return;
        }

        if (fromDate > toDate) {
            this.toastService.warning("ToDate should be greater than FromDate !!");
            this.form.controls["toDate"].setValue(null);
            return;
        }
        this.form.controls["toSession"].setValue("Second");
        this.ODDays = this.utilityService.getDiffDate(toDate, fromDate, "days");
        let nextDay = this.utilityService.getFormatDate(fromDate, "YYYY-MM-DD");
        this.getDaysLeaves(toDate, nextDay);
        let nextDate = this.utilityService.getIncrementedDate(toDate, 1, "days");
        this.getResumptionDate(nextDate);
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
                this.ODDays -= 1;
            }
            nextDay = this.utilityService.getIncrementedDate(nextDay, 1, "days");
            this.getDaysLeaves(toDate, nextDay);
        } else {
            if (this.form.controls["fromSession"].value == "Second") {
                this.ODDays -= 0.5;
            }
            if (this.form.controls["toSession"].value == "First") {
                this.ODDays -= 0.5;
            }
            this.form.controls["ODDays"].setValue(this.ODDays);
        }
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

    setHalfDayHandler() {
        let toDate = this.form.controls["toDate"].value;
        let value = this.form.controls["toSession"].value;
        if (!this.form.controls["toDate"].value) {
            this.toastService.warning("Please Select To Date !!");
            this.form.controls["toSession"].setValue(null);
            return;
        }

        if (value == "First") {
            this.form.controls["ODDays"].setValue(this.form.controls["ODDays"].value - 0.5);
            this.form.controls["resumptionDate"].setValue(this.utilityService.getFormatDate(toDate, "YYYY-MM-DD"));
        } else {
            this.form.controls["ODDays"].setValue(this.form.controls["ODDays"].value + 0.5);
            let nextDate = this.utilityService.getIncrementedDate(toDate, 1, "days");
            this.getResumptionDate(nextDate);
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
}
