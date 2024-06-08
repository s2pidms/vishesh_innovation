import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {maintenanceScheduleCreationService} from "@services/maintenance";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IScheduleMasterData} from "@mocks/models/maintenance/transactions";

@Component({
    selector: "app-maintenance-schedule-form",
    templateUrl: "./maintenance-schedule-form.component.html"
})
export class MaintenanceScheduleFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    service: any = [];
    masterData: IScheduleMasterData = {
        autoIncrementNo: "",
        frequencyOptions: [],
        equipmentListOptions: [],
        maintenanceTaskCodeOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private maintenanceScheduleCreationService: maintenanceScheduleCreationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        scheduleCode: new UntypedFormControl(null),
        scheduleName: new UntypedFormControl(null),
        equipment: new UntypedFormControl(null),
        maintenanceTask: new UntypedFormControl(null),
        frequency: new UntypedFormControl(null),
        startDate: new UntypedFormControl(null),
        endDate: new UntypedFormControl(null),
        description: new UntypedFormControl(null)
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
        this.maintenanceScheduleCreationService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.maintenanceScheduleCreationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.maintenanceScheduleCreationService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["scheduleCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["startDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["endDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.maintenanceScheduleCreationService.getById(params["id"]);
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
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
