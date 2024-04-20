import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {MetricsService} from "@services/maintenance";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {IMetricsMasterData} from "@mocks/models/maintenance/masters";

@Component({
    selector: "app-maintenance-metrics-form",
    templateUrl: "./maintenance-metrics-form.component.html"
})
export class MaintenanceMetricsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IMetricsMasterData = {
        autoIncrementNo: "",
        frequencyOptions: [],
        metricTypeOptions: [],
        calculationMethodOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private metricsService: MetricsService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        metricCode: new UntypedFormControl(""),
        metricName: new UntypedFormControl(""),
        metricCategory: new UntypedFormControl(""),
        calculationMethod: new UntypedFormControl(""),
        metricDescription: new UntypedFormControl(""),
        unitOfMeasure: new UntypedFormControl(""),
        targetValue: new UntypedFormControl(""),
        thresholds: new UntypedFormControl(""),
        frequency: new UntypedFormControl(""),
        refRangeFrom: new UntypedFormControl(""),
        refRangeTo: new UntypedFormControl(""),
        formula: new UntypedFormControl(""),
        targetDescription: new UntypedFormControl(""),
        lastUpdated: new UntypedFormControl(""),
        metricStatus: new UntypedFormControl("Active")
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
        this.metricsService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.metricsService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.metricsService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["metricCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["metricCategory"].setValue("");
            this.form.controls["calculationMethod"].setValue("");
            this.form.controls["frequency"].setValue("");
            this.form.controls["lastUpdated"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["metricStatus"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.metricsService.getById(params["id"]);
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
                    if (success.lastUpdated) {
                        success.lastUpdated = this.utilityService.getFormatDate(success.lastUpdated, "YYYY-MM-DD");
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
