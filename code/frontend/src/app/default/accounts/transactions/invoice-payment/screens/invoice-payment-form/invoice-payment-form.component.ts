import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {AUTO_RENEWAL} from "@mocks/constant";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InvoicePaymentModalComponent} from "../components/invoice-payment-modal/invoice-payment-modal.component";
import {InvoicePaymentService} from "@services/accounts/invoicePayment.service";
import {INVOICE_PAYMENT_FORM_ERRORS} from "@mocks/validations/accounts";

@Component({
    selector: "app-invoice-payment-form",
    templateUrl: "./invoice-payment-form.component.html"
})
export class InvoicePaymentFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    standardType: any = [];
    projectList: any = [];
    customerNamesList: any = [];
    projectsOptions: any = [];
    supplierList: any = [];
    invoicePaymentArr: any = [];
    paymentMethod: any = [];
    serviceInvoiceList: any = [];
    serviceInvoiceOptions: any = [];
    autoRenewal: any = AUTO_RENEWAL;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved"
    };
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private invoicePaymentService: InvoicePaymentService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        customerName: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null),
        projectName: new UntypedFormControl(null, [Validators.required]),
        project: new UntypedFormControl(null),
        outstandingAmount: new UntypedFormControl(null),
        serviceInvoice: new UntypedFormControl(null),
        serviceInvoiceNumber: new UntypedFormControl(null, [Validators.required]),
        serviceInvoiceDate: new UntypedFormControl(null, [Validators.required]),
        totalValue: new UntypedFormControl(null),
        totalAmountWithTax: new UntypedFormControl(null),
        paymentHistory: new UntypedFormControl([]),
        status: new UntypedFormControl(null)
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
        this.projectsOptions = [];
        this.serviceInvoiceOptions = [];
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, INVOICE_PAYMENT_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        formData.paymentHistory = this.invoicePaymentArr;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.invoicePaymentService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/accounts/transactions/invoice_payment/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.invoicePaymentService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/accounts/transactions/invoice_payment/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.invoicePaymentService.getAllMasterData({}).subscribe(success => {
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.projectList = success.projectList;
            this.supplierList = success.supplierList;
            this.customerNamesList = success.customersList;
            this.paymentMethod = success.paymentMethod;
            this.serviceInvoiceList = success.serviceInvoiceList;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.invoicePaymentService.getById(params["id"]);
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

                    if (this.projectList.length > 0) {
                        this.projectsOptions = this.projectList.filter((x: any) => x.customer == success?.customer);
                    }
                    if (this.serviceInvoiceList.length > 0) {
                        this.serviceInvoiceOptions = this.serviceInvoiceList.filter(
                            (x: any) => x.project == success?.project
                        );
                    }
                    if (success.serviceInvoiceDate) {
                        success.serviceInvoiceDate = this.utilityService.getFormatDate(
                            success.serviceInvoiceDate,
                            "YYYY-MM-DD"
                        );
                    }

                    this.invoicePaymentArr = success.paymentHistory;
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (["view"].includes(this.action)) {
                        this.form.disable();
                    }
                });
        });
    }

    serviceSetValue() {
        this.f["serviceInvoiceNumber"].setValue(null);
        this.f["serviceInvoice"].setValue(null);
        this.f["serviceInvoiceDate"].setValue(null);
        this.f["totalValue"].setValue(null);
        this.f["totalAmountWithTax"].setValue(null);
        this.serviceInvoiceOptions = [];
    }

    setProjectDetails(ele: any) {
        this.f["customer"].setValue(ele?._id);
        if (this.projectList.length > 0) {
            this.f["project"].setValue(null);
            this.f["projectName"].setValue(null);
            this.f["outstandingAmount"].setValue(null);
            this.serviceSetValue();
            this.projectsOptions = this.projectList.filter((x: any) => x.customer == ele?._id);
        }
    }

    setProjectId(ev: any) {
        this.f["project"].setValue(ev?._id);
        this.f["outstandingAmount"].setValue(ev?.balanceAmount);
        if (this.serviceInvoiceList.length > 0) {
            this.serviceSetValue();
            this.serviceInvoiceOptions = this.serviceInvoiceList.filter((x: any) => x?.project == ev?._id);
        }
    }

    openInvoicePaymentModel() {
        const modalRef = this.modalService.open(InvoicePaymentModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.invoicePaymentArr = this.invoicePaymentArr;
        modalRef.componentInstance.paymentMethod = this.paymentMethod;
        modalRef.componentInstance.totalAmountWithTax = this.f["totalAmountWithTax"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.invoicePaymentArr = success;
                }
            },
            (reason: any) => {}
        );
    }

    setInvoiceDetails(ev: any) {
        this.f["serviceInvoiceDate"].setValue(this.utilityService.getFormatDate(ev?.serviceInvoiceDate, "YYYY-MM-DD"));
        this.f["serviceInvoice"].setValue(ev?._id);
        this.f["totalValue"].setValue(Math.round(+ev?.totalValue));
        this.f["totalAmountWithTax"].setValue(Math.round(+ev?.totalAmountWithTax));
    }

    SIDetails() {
        let serviceInvoice = this.f["serviceInvoice"].value;
        window.open(
            `${window.location.origin}/#/print/service_invoice?id=${serviceInvoice}&action=print&preview=previewSI`,
            "_blank"
        );
    }
}
