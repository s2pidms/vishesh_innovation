import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {CalibrationAndVerificationService} from "@services/maintenance";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ICalibrationAndVerificationMasterData} from "@mocks/models/maintenance/transactions";

@Component({
    selector: "app-calibration-and-verification-form",
    templateUrl: "./calibration-and-verification-form.component.html"
})
export class CalibrationAndVerificationFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ICalibrationAndVerificationMasterData = {
        calibrationAgencyOptions: [],
        calibrationResultOptions: [],
        equipmentListOptions: []
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private calibrationAndVerificationService: CalibrationAndVerificationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(""),
        equipment: new UntypedFormControl(""),
        calibrationDate: new UntypedFormControl(""),
        calibrationDue: new UntypedFormControl(""),
        calibrationAgency: new UntypedFormControl(""),
        calibrationResult: new UntypedFormControl(""),
        remarks: new UntypedFormControl("")
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
        this.calibrationAndVerificationService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/calibration-and-verification/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.calibrationAndVerificationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/maintenance/transactions/calibration-and-verification/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.calibrationAndVerificationService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["calibrationAgency"].setValue("");
            this.form.controls["calibrationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["calibrationDue"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.calibrationAndVerificationService.getById(params["id"]);
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
