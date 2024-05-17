import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {STATES_LIST} from "@mocks/states.constant";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {Location} from "@angular/common";
import {ServicesChargesService} from "@services/settings/serviceCharges.service";
import {SERVICE_CHARGES_FORM_ERRORS} from "@mocks/validations/settings/serviceCharges.validation";
import {IServiceCharges} from "@mocks/models/settings/masters/servicesChargesMasterData";

@Component({
    selector: "app-service-charges-form",
    templateUrl: "./service-charges-form.component.html"
})
export class ServiceChargesFormComponent implements OnInit {
    submitted = false;

    action: string = "create";
    masterData: IServiceCharges = {
        SACOptions: []
    };
    constructor(
        private servicesChargesService: ServicesChargesService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        order: new UntypedFormControl([]),
        description: new UntypedFormControl(""),
        SACCode: new UntypedFormControl("", [Validators.required]),
        SAC: new UntypedFormControl(""),
        GSTRate: new UntypedFormControl(""),
        IGSTRate: new UntypedFormControl(""),
        SGSTRate: new UntypedFormControl(""),
        CGSTRate: new UntypedFormControl(""),
        UGSTRate: new UntypedFormControl(""),
        currency: new UntypedFormControl(""),
        serviceCharges: new UntypedFormControl(""),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.getInitialData();
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, SERVICE_CHARGES_FORM_ERRORS)) {
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
        this.servicesChargesService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.servicesChargesService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.servicesChargesService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.servicesChargesService.getById(params["id"]);
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

    setSAC(event: any) {
        this.f["SAC"].setValue(event.SAC);
        this.f["GSTRate"].setValue(event.gstRate ?? 0);
        this.f["IGSTRate"].setValue(event.gstRate ?? 0);
        this.f["SGSTRate"].setValue(event.gstRate ?? 0);
        this.f["CGSTRate"].setValue(event.gstRate ?? 0);
        this.f["UGSTRate"].setValue(event.gstRate ?? 0);
    }
}
