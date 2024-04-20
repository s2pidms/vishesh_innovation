import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService, StorageService, ToastService, UtilityService} from "@core/services";
import {SalesInvoiceService} from "@services/dispatch";
import {TAX_INVOICE_ERRORS} from "@mocks/validations/dispatch/tax-invoice.validation";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-tax-invoice",
    templateUrl: "./tax-invoice.component.html"
})
export class TaxInvoiceComponent implements OnInit {
    action: string = "create";
    customerName: string = "";
    shipmentIdArr: any = [];
    autoIncrementValues: any = {};
    shipmentNameOptions: any = [];
    submitted = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    form: any = new UntypedFormGroup({
        salesInvoiceNumber: new UntypedFormControl(null),
        salesInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        shipmentPlanningId: new UntypedFormControl("", [Validators.required]),
        customer: new UntypedFormControl(null)
    });
    get f() {
        return this.form.controls;
    }

    constructor(
        private router: Router,
        private salesInvoiceService: SalesInvoiceService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private storageService: StorageService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, TAX_INVOICE_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        window.open(`${window.location.origin}/#/print/preview_tax_invoice?data=${JSON.stringify(formData)}`, "_blank");
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, TAX_INVOICE_ERRORS)) {
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
        this.salesInvoiceService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.form.reset();
            this.getInitialData();
            this.storageService.set("tab", "REPORT");
            window.open(`${window.location.origin}/#/default/sales/reports/sales_register_wo_tax`, "_blank");
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.salesInvoiceService.updateDirectTaxInvoice(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.form.reset();
            this.getInitialData();
            window.open(`${window.location.origin}/#/default/sales/reports/sales_register_wo_tax`, "_blank");
        });
    }

    getInitialData() {
        this.spinner.show();
        this.salesInvoiceService.getAllMasterData({}).subscribe(success => {
            this.autoIncrementValues = success?.autoIncrementedValues;
            this.shipmentIdArr = success.shipmentList;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        if (params["id"]) {
                            return this.salesInvoiceService.getById(params["id"]);
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
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "rejection" ||
                        this.action == "approval"
                    ) {
                        this.form.disable();
                        this.form.controls["remarks"].enable();
                    }
                });
        });
    }

    setShipmentName(ele: any) {
        if (ele.billFromLocation) {
            this.form.controls["salesInvoiceNumber"].setValue(this.autoIncrementValues[ele.billFromLocation]);
        }
        this.shipmentNameOptions = [
            {
                customerName: ele?.customer?.customerName,
                _id: ele?.customer?._id
            }
        ];
        this.f["customer"].patchValue(ele?.customer?._id);
        this.f["customer"].disable();
    }
}
