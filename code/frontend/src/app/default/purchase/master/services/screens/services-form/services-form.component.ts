import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ServiceMasterService} from "@services/purchase";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SERVICES_FORM_ERRORS} from "@mocks/validations/purchase/services.validation";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IServiceMasterData} from "@mocks/models/purchase/masters";

@Component({
    selector: "app-services-form",
    templateUrl: "./services-form.component.html"
})
export class ServicesFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IServiceMasterData = {
        autoIncrementNo: "",
        SACs: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private serviceMasterService: ServiceMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        serviceCode: new UntypedFormControl(""),
        sacCode: new UntypedFormControl(""),
        isActive: new UntypedFormControl("Y", [Validators.required]),
        sacId: new UntypedFormControl(null, [Validators.required]),
        serviceDescription: new UntypedFormControl(""),
        gst: new UntypedFormControl("", [Validators.required]),
        igst: new UntypedFormControl("", [Validators.required]),
        sgst: new UntypedFormControl("", [Validators.required]),
        cgst: new UntypedFormControl("", [Validators.required])
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
        if (this.validationService.checkErrors(this.form, SERVICES_FORM_ERRORS)) {
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
        this.serviceMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.serviceMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.serviceMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["serviceCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isActive"].setValue("Y");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.serviceMasterService.getById(params["id"]);
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

                    if (success.sacId._id) {
                        success.sacId = success.sacId._id;
                    }
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setSAC() {
        let sm: any = this.masterData?.SACs?.find((x: any) => x._id == this.f["sacId"].value);

        this.form.enable();
        this.f["gst"].setValue(sm.gstRate ?? 0);
        this.f["igst"].setValue(sm.igstRate ?? 0);
        this.f["cgst"].setValue(sm.cgstRate ?? 0);
        this.f["sgst"].setValue(sm.sgstRate ?? 0);
    }
}
