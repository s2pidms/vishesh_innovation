import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidationService} from "@core/components";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {AUTO_RENEWAL} from "@mocks/constant";
import {CustomersService} from "@services/sales";
import {mergeMap, of} from "rxjs";
@Component({
    selector: "app-invoice-qr-code-form",
    templateUrl: "./invoice-qr-code-form.component.html"
})
export class InvoiceQRCodeFormComponent implements OnInit {
    action: string = "create";
    submitted = false;
    customerOptions: any = [];
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        customerCode: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null, [Validators.required]),
        printQRCodeOnInvoice: new UntypedFormControl("No"),
        printDSOnInvoice: new UntypedFormControl("No"),
        venderCode: new UntypedFormControl(null),
        customerNickName: new UntypedFormControl(null),
        showSKUDescription: new UntypedFormControl("Yes")
    });

    printCodeOptions: any = AUTO_RENEWAL;

    constructor(
        private customerService: CustomersService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    setCustomerDetails(event: any) {
        this.customerService.getById(event?._id).subscribe(success => {
            console.log("success", success);
            this.form.controls["customerCode"].setValue(success?.customerCode);
            this.form.controls["customerName"].setValue(success?.customerName);
            this.form.controls["customerNickName"].setValue(success?.customerNickName);
            this.form.controls["_id"].setValue(success?._id);
            this.form.controls["printDSOnInvoice"].setValue(success?.printDSOnInvoice ?? "No");
            this.form.controls["printQRCodeOnInvoice"].setValue(success?.printQRCodeOnInvoice ?? "No");
            this.form.controls["showSKUDescription"].setValue(success?.showSKUDescription ?? "Yes");
            this.form.controls["venderCode"].setValue(success?.venderCode);
        });
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (!this.form.controls["customerCode"].value) {
            this.toastService.warning("Customer Code is required !");
            return;
        }
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.customerService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
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
        this.customerService.getCustomersList({}).subscribe(result => {
            this.customerOptions = result;
            this.form.controls["printDSOnInvoice"].setValue("No");
            this.form.controls["printQRCodeOnInvoice"].setValue("No");
            this.form.controls["showSKUDescription"].setValue("Yes");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        console.log("action", this.action);
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.customerService.getById(params["id"]);
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
                    if (this.action == "edit") {
                        this.form.controls["customerCode"].disable();
                        this.form.controls["customerName"].disable();
                    }
                });
        });
    }
}
