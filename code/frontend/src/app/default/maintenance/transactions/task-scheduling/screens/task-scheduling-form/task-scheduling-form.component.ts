import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {SpinnerService, UtilityService, ToastService} from "@core/services";
import {TaskSchedulingService} from "@services/maintenance";
import {ITaskSchedulingMasterData} from "@mocks/models/maintenance/transactions";
@Component({
    selector: "app-task-scheduling-form",
    templateUrl: "./task-scheduling-form.component.html"
})
export class TaskSchedulingFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    equipment = "";
    masterData: ITaskSchedulingMasterData = {
        autoIncrementNo: "",
        maintenanceTaskCodeOptions: [],
        TaskSchedulingStatusOptions: []
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private taskSchedulingService: TaskSchedulingService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        scheduleCode: new UntypedFormControl(""),
        maintenanceTask: new UntypedFormControl(""),
        scheduleDate: new UntypedFormControl(""),
        equipmentName: new UntypedFormControl(""),
        frequency: new UntypedFormControl(""),
        priority: new UntypedFormControl(""),
        startDate: new UntypedFormControl(""),
        endDate: new UntypedFormControl(""),
        status: new UntypedFormControl(""),
        equipment: new UntypedFormControl()
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

        this.form.enable();
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
        this.taskSchedulingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/task-scheduling/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.taskSchedulingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/task-scheduling/list"]);
        });
    }

    taskValueChange(ev: any) {
        this.form.controls["priority"].setValue(ev.priority);
        this.form.controls["frequency"].setValue(ev.frequency);
        this.form.controls["equipmentName"].setValue(ev.equipment?.assetName);
        this.form.controls["equipment"].setValue(ev.equipment?._id);
    }

    getInitialData() {
        this.spinner.show();
        this.taskSchedulingService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["scheduleCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("");
            this.form.controls["scheduleDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["startDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["endDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.taskSchedulingService.getById(params["id"]);
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

                    if (success.startDate) {
                        success.startDate = this.utilityService.getFormatDate(success.startDate, "YYYY-MM-DD");
                    }
                    if (success.endDate) {
                        success.endDate = this.utilityService.getFormatDate(success.endDate, "YYYY-MM-DD");
                    }
                    if (success.scheduleDate) {
                        success.scheduleDate = this.utilityService.getFormatDate(success.scheduleDate, "YYYY-MM-DD");
                    }

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
