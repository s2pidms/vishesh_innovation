import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {TaskService} from "@services/maintenance";
import {ITaskMasterData} from "@mocks/models/maintenance/masters";

@Component({
    selector: "app-maintenance-task-form",
    templateUrl: "./maintenance-task-form.component.html"
})
export class MaintenanceTaskFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ITaskMasterData = {
        autoIncrementNo: "",
        equipmentOptions: [],
        priorityOptions: [],
        frequencyOptions: [],
        taskCategoryOptions: [],
        maintenanceChecklistOptions: [],
        taskStatusOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private taskService: TaskService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(""),
        taskCode: new UntypedFormControl(""),
        taskName: new UntypedFormControl(""),
        taskDescription: new UntypedFormControl(""),
        equipment: new UntypedFormControl(null),
        priority: new UntypedFormControl(null),
        taskStatus: new UntypedFormControl(""),
        frequency: new UntypedFormControl(null),
        estimatedTime: new UntypedFormControl(""),
        taskCategory: new UntypedFormControl(null),
        maintenanceChecklist: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
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
        this.taskService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.taskService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.taskService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["taskCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.taskService.getById(params["id"]);
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
