import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {CalibrationStandardService} from "@services/maintenance";
import {CALIBRATION_STANDARD_FORM_ERRORS} from "@mocks/validations/maintenance";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {ICalibrationStandardMasterData} from "@mocks/models/maintenance/masters";

@Component({
    selector: "app-calibration-standard-form",
    templateUrl: "./calibration-standard-form.component.html"
})
export class CalibrationStandardFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ICalibrationStandardMasterData = {
        autoIncrementNo: "",
        locationOptions: [],
        calibrationAgencyOptions: [],
        standardStatusOptions: [],
        standardTypeOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private calibrationStandardService: CalibrationStandardService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        standardCode: new UntypedFormControl("", [Validators.required]),
        standardName: new UntypedFormControl(""),
        standardType: new UntypedFormControl(""),
        measurementRange: new UntypedFormControl(""),
        calibrationMethod: new UntypedFormControl(""),
        calibrationInterval: new UntypedFormControl(""),
        calibrationAgency: new UntypedFormControl(""),
        traceability: new UntypedFormControl(""),
        standardLocation: new UntypedFormControl(""),
        status: new UntypedFormControl("Active"),
        calibrationCost: new UntypedFormControl(""),
        lastCalibrationDate: new UntypedFormControl("")
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

        if (this.validationService.checkErrors(this.form, CALIBRATION_STANDARD_FORM_ERRORS)) {
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

    create(formData: any) {
        this.spinner.show();
        this.calibrationStandardService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.calibrationStandardService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.calibrationStandardService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;

            this.form.controls["standardCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["standardType"].setValue("");
            this.form.controls["calibrationAgency"].setValue("");
            this.form.controls["standardLocation"].setValue("");
            this.form.controls["lastCalibrationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.calibrationStandardService.getById(params["id"]);
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
                    if (success.lastCalibrationDate) {
                        success.lastCalibrationDate = this.utilityService.getFormatDate(
                            success.lastCalibrationDate,
                            "YYYY-MM-DD"
                        );
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
