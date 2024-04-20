import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {PAYMENT_TERMS_FORM_ERRORS} from "@mocks/validations/sales";
import {PaymentTermsService} from "@services/sales";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IPurchasePaymentTermsMasterData} from "@mocks/models/purchase/masters";

@Component({
    selector: "app-purchase-payment-terms-form",
    templateUrl: "./purchase-payment-terms-form.component.html"
})
export class PurchasePaymentTermsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IPurchasePaymentTermsMasterData = {
        autoIncrementNo: ""
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        paymentTermCode: new UntypedFormControl(null),
        order: new UntypedFormControl(null, [Validators.required]),
        paymentDescription: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Active")
    });

    constructor(
        private paymentTermsService: PaymentTermsService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, PAYMENT_TERMS_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.paymentDescription = formData.paymentDescription.trim();
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.paymentTermsService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.paymentTermsService.create(formData).subscribe(success => {
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
        this.paymentTermsService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["paymentTermCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.paymentTermsService.getById(params["id"]);
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
