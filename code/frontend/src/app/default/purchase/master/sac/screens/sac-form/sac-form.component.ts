import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {SACService} from "@services/purchase";
import {PURCHASE_SAC_FORM_ERRORS} from "@mocks/validations/purchase";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SAC_CODE} from "@mocks/constant";
import {IPurchaseSACMasterData} from "@mocks/models/purchase/masters";

@Component({
    selector: "app-sac-form",
    templateUrl: "./sac-form.component.html"
})
export class SACFormComponent implements OnInit {
    submitted = false;
    otherChargesSACCode = SAC_CODE;
    action: string = "create";
    earnings: any = [];
    masterData: IPurchaseSACMasterData = {
        autoIncrementNo: ""
    };

    constructor(
        private sacService: SACService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        isActive: new UntypedFormControl("Y", [Validators.required]),
        sacCode: new UntypedFormControl("", [Validators.required]),
        serviceDescription: new UntypedFormControl("", [Validators.required]),
        gstRate: new UntypedFormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
        igstRate: new UntypedFormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
        sgstRate: new UntypedFormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
        cgstRate: new UntypedFormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
        ugstRate: new UntypedFormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
        sacMasterEntryNo: new UntypedFormControl(""),
        sacEntryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        revision: new UntypedFormGroup({
            revisionNo: new UntypedFormControl(""),
            revisionDate: new UntypedFormControl("", [Validators.required])
        })
    });

    get Revision() {
        return this.form.get("revision") as UntypedFormGroup;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, PURCHASE_SAC_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData.revision) {
            formData.revision = [formData.revision];
        }

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.sacService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.sacService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.sacService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["sacMasterEntryNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["isActive"].setValue("Y");
            this.Revision.controls["revisionDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.sacService.getById(params["id"]);
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

                    if (success.revision.length == 1) {
                        success.revision.revisionNo = success.revision[0].revisionNo;
                        if (success.revision[0].revisionDate) {
                            success.revision.revisionDate = this.utilityService.getFormatDate(
                                success.revision[0].revisionDate,
                                "YYYY-MM-DD"
                            );
                        }
                    }

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
    setRates(ev: any) {
        if (this.action == "create") {
            this.form.controls["igstRate"].setValue(ev.target.value);
            this.form.controls["ugstRate"].setValue(ev.target.value / 2);
            this.form.controls["sgstRate"].setValue(ev.target.value / 2);
            this.form.controls["cgstRate"].setValue(ev.target.value / 2);
        }
    }
}
