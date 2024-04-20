import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ToastService, UtilityService} from "@core/services";
import {SERVICE_FORM_ERRORS} from "@mocks/validations/sales";
import {salesServiceMasterService} from "@services/sales";
import {IServiceMasterData} from "@mocks/models/sales/master";
import {Location} from "@angular/common";
@Component({
    selector: "app-service-form",
    templateUrl: "./service-form.component.html"
})
export class ServiceFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IServiceMasterData = {
        autoIncrementNo: "",
        SACOptions: []
    };
    constructor(
        private salesServiceMaster: salesServiceMasterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        serviceCode: new UntypedFormControl(null),
        serviceDescription: new UntypedFormControl(null, [Validators.required]),
        unit: new UntypedFormControl(null),
        sacId: new UntypedFormControl(null, [Validators.required]),
        sacCode: new UntypedFormControl(null),
        isActive: new UntypedFormControl("Yes", [Validators.required]),
        servicePrice: new UntypedFormControl(null),
        gst: new UntypedFormControl(null),
        igst: new UntypedFormControl(null),
        sgst: new UntypedFormControl(null),
        cgst: new UntypedFormControl(null)
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

        if (this.validationService.checkErrors(this.form, SERVICE_FORM_ERRORS)) {
            return;
        }
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
        this.salesServiceMaster.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.salesServiceMaster.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.salesServiceMaster.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["serviceCode"].setValue(this.masterData.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salesServiceMaster.getById(params["id"]);
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

                    success.sacId = success.sacId._id;
                    this.form.patchValue(success);

                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setSAC() {
        let sm = this.masterData?.SACOptions.find((x: any) => x._id == this.f["sacId"].value);
        this.form.enable();

        this.f["gst"].setValue(sm?.gstRate);
        this.f["igst"].setValue(sm?.igstRate);
        this.f["cgst"].setValue(sm?.cgstRate);
        this.f["sgst"].setValue(sm?.sgstRate);
        this.f["sacCode"].setValue(sm?.sacCode);
    }
}
