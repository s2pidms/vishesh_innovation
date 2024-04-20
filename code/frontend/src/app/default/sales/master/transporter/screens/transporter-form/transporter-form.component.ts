import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TransporterService} from "@services/sales";
import {TRANSPORTER_FORM_ERRORS} from "@mocks/validations/sales";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {STATES_LIST} from "@mocks/states.constant";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {Location} from "@angular/common";
import {ITransporterMasterData} from "@mocks/models/sales/master";

@Component({
    selector: "app-transporter-form",
    templateUrl: "./transporter-form.component.html"
})
export class TransporterFormComponent implements OnInit {
    submitted = false;

    action: string = "create";
    masterData: ITransporterMasterData = {
        autoIncrementNo: "",
        transporterTypeOptions: []
    };
    constructor(
        private transporterService: TransporterService,
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
        transporterCode: new UntypedFormControl(""),
        name: new UntypedFormControl(""),
        transporterType: new UntypedFormControl("", [Validators.required]),
        address: new UntypedFormControl(""),
        city: new UntypedFormControl(""),
        state: new UntypedFormControl(""),
        country: new UntypedFormControl(""),
        contactPerson: new UntypedFormControl(""),
        phone: new UntypedFormControl(""),
        email: new UntypedFormControl(""),
        licenseNumber: new UntypedFormControl(""),
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

        if (this.validationService.checkErrors(this.form, TRANSPORTER_FORM_ERRORS)) {
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
        this.transporterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.transporterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.transporterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["transporterCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["transporterType"].setValue("");
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.transporterService.getById(params["id"]);
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
