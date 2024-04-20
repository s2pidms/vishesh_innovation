import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {QualityEquipmentService} from "@services/maintenance";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService, ToastService} from "@core/services";
import {IQualityEquipmentMasterData} from "@mocks/models/maintenance/masters";
import {QUALITY_EQUIPMENT_FORM_ERRORS} from "@mocks/validations/maintenance";

@Component({
    selector: "app-quality-equipment-form",
    templateUrl: "./quality-equipment-form.component.html"
})
export class QualityEquipmentFormComponent implements OnInit {
    masterData: IQualityEquipmentMasterData = {
        autoIncrementNo: "",
        empDepartmentsOptions: [],
        locationOptions: [],
        equipmentTypeOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private qualityEquipmentService: QualityEquipmentService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        equipmentCode: new UntypedFormControl(null),
        equipmentName: new UntypedFormControl(null),
        equipmentType: new UntypedFormControl(null),
        manufacturer: new UntypedFormControl(null),
        calibrationDate: new UntypedFormControl(null),
        calibrationDue: new UntypedFormControl(null),
        calibrationAgency: new UntypedFormControl(null),
        modelNumber: new UntypedFormControl(null, [Validators.required]),
        serialNumber: new UntypedFormControl(null),
        empDepartments: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, QUALITY_EQUIPMENT_FORM_ERRORS)) {
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
        this.qualityEquipmentService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.qualityEquipmentService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.qualityEquipmentService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["equipmentCode"].patchValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].patchValue("Active");
            this.form.controls["calibrationDate"].patchValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["calibrationDue"].patchValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.qualityEquipmentService.getById(params["id"]);
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

                    if (success.calibrationDate) {
                        success.calibrationDate = this.utilityService.getFormatDate(
                            success.calibrationDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.calibrationDue) {
                        success.calibrationDue = this.utilityService.getFormatDate(
                            success.calibrationDue,
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
