import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ServiceInvoiceService} from "@services/sales";
import {ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {SERVICE_INVOICE_FORM_ERRORS} from "@mocks/validations/sales";
import {UtilityService, MenuTitleService, SpinnerService} from "@core/services";
import {ServiceInvoiceGSTDetailsComponent} from "../service-invoice-gst-details/service-invoice-gst-details.component";
import {SIDetailsArray, IServiceInvoiceMasterData} from "@mocks/models/sales/transactions";
import {DetailsOfCustomersListComponent} from "@shared/modals";
@Component({
    selector: "app-service-invoice-form",
    templateUrl: "./service-invoice-form.component.html"
})
export class ServiceInvoiceFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    // SIDetailsArray[]
    SIDetailsArray: any = [];
    GSTDetailsArray: any = [];
    ESCPreviewArr: any = [];
    customerFilterOptions: any = [];
    selectedCustomer: any = {};
    submitted = false;
    isPreview = false;
    isESCPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved"
    };
    selectedCustomerDetails = {};
    masterData: IServiceInvoiceMasterData = {
        autoIncrementNo: "",
        billFromLocationOptions: [],
        customerCategoryOptions: [],
        customersOptions: [],
        servicesList: []
    };

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        serviceInvoiceNumber: new UntypedFormControl("", [Validators.required]),
        serviceInvoiceDate: new UntypedFormControl("", [Validators.required]),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(""),
        customer: new UntypedFormControl(null, [Validators.required]),
        PONo: new UntypedFormControl(null, [Validators.required]),
        PODate: new UntypedFormControl("", [Validators.required]),
        currency: new UntypedFormControl(null, [Validators.required]),
        billFromLocation: new UntypedFormControl(null, [Validators.required]),
        serviceDetails: new UntypedFormControl([]),
        totalValue: new UntypedFormControl(0),
        paymentTerms: new UntypedFormControl(null),
        totalCGSTAmount: new UntypedFormControl(0),
        totalSGSTAmount: new UntypedFormControl(0),
        totalIGSTAmount: new UntypedFormControl(0),
        totalTaxAmount: new UntypedFormControl(0),
        totalAmountWithTax: new UntypedFormControl(0),
        remarks: new UntypedFormControl(null),
        GSTDetails: new UntypedFormControl([]),
        status: new UntypedFormControl("Awaiting Approval")
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private serviceInvoiceService: ServiceInvoiceService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }
    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                this.flag = -1;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();

        if (this.validationService.checkErrors(this.form, SERVICE_INVOICE_FORM_ERRORS)) {
            return;
        }

        this.getGSTDetails();
        let formData: any = this.form.value;
        formData.serviceDetails = this.SIDetailsArray;
        formData.GSTDetails = this.GSTDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.serviceInvoiceService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.serviceInvoiceService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.SIDetailsArray = this.ESCPreviewArr;
        this.collection = this.SIDetailsArray.length;
    }

    reset() {
        this.form.reset();
        this.SIDetailsArray = [];
        this.customerFilterOptions = [];
        this.collection = this.SIDetailsArray.length;
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.serviceInvoiceService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["serviceInvoiceNumber"].setValue(this.masterData?.autoIncrementNo);
            this.f["PODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["serviceInvoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.serviceInvoiceService.getById(params["id"]);
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
                    this.selectedCustomer = success?.customer;

                    if (success.customer) {
                        this.customerFilterOptions = [success.customer];
                        success.customer = success.customer._id;
                    }
                    if (success.PODate) {
                        success.PODate = this.utilityService.getFormatDate(success?.PODate, "YYYY-MM-DD");
                    }
                    if (success.serviceInvoiceDate) {
                        success.serviceInvoiceDate = this.utilityService.getFormatDate(
                            success?.serviceInvoiceDate,
                            "YYYY-MM-DD"
                        );
                    }

                    this.GSTDetailsArray = success?.GSTDetails;

                    this.SIDetailsArray = success?.serviceDetails;
                    this.collection = this.SIDetailsArray.length;
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "cancel" ||
                        this.action == "approve"
                    ) {
                        this.form.disable();
                    }
                });

            this.menuTitleService.set({
                title: "Service Invoice",
                subTitle: null,
                type: null
            });
        });
    }
    openGSTDetailsModal() {
        this.getGSTDetails();
        const modalRef = this.modalService.open(ServiceInvoiceGSTDetailsComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.GSTDetailsArray = this.GSTDetailsArray;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.GSTDetailsArray = success;
                }
            },
            (reason: any) => {}
        );
    }
    setDelivery() {
        this.SIDetailsArray = this.SIDetailsArray.map((ele: any) => {
            ele.SOLineTargetDate = this.utilityService.getFormatDate(this.f["SOLineTargetDate"].value, "YYYY-MM-DD");
            return ele;
        });
    }
    customerValueChange(ele: any) {
        this.f["currency"].setValue(ele?.customerCurrency);
        this.f["customerName"].setValue(ele?.customerName);
        this.f["paymentTerms"].setValue(ele?.customerPaymentTerms);
        this.selectedCustomer = ele;
        this.spinner.show();
        this.SIDetailsArray = this.masterData?.servicesList?.map((ele: any, idx: any) => {
            return {
                serviceCode: ele?.serviceCode,
                service: ele?._id,
                serviceDescription: ele?.serviceDescription,
                SACCode: ele?.sacCode,
                gstRate: ele?.gst,
                igstRate: ele?.igst,
                sgstRate: ele?.sgst,
                cgstRate: ele?.cgst,
                qty: 0,
                unitRate: 0,
                lineValue: 0,
                additionalInfo: ""
            };
        });
        this.collection = this.SIDetailsArray.length;
        this.spinner.hide();
    }
    getCustomers() {
        this.selectedCustomerDetails;
        this.f["currency"].setValue(null);
        this.f["customer"].setValue(null);
        this.SIDetailsArray = [];
        this.customerFilterOptions = this.masterData?.customersOptions?.filter(
            (x: any) => x.customerCategory == this.f["customerCategory"].value
        );
    }
    setLineValue(service: any, ele: any) {
        let index = this.SIDetailsArray.map((x: any) => x.service).indexOf(service);
        (this.SIDetailsArray[index].lineValue = +ele.qty * +ele.unitRate).toFixed(2);
        this.f["totalValue"].setValue(
            this.SIDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }
    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.SIDetailsArray;
        this.SIDetailsArray = this.SIDetailsArray.filter((x: any) => x.qty > 0);
        if (this.SIDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.SIDetailsArray.length;
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.SIDetailsArray = this.SIDetailsArray;
        } else {
            this.SIDetailsArray = [...this.SIDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    getGSTDetails() {
        const condition =
            this.selectedCustomer.GSTIN.substring(0, 2) !== this.selectedCustomer?.company.GSTIN.substring(0, 2);

        const serviceData = this.SIDetailsArray.filter((x: any) => x.qty > 0);
        const sacArr = [...new Set(serviceData.map((x: any) => x.SACCode))];

        this.GSTDetailsArray = sacArr.map(element => {
            const arr = serviceData.filter((m: any) => m.SACCode === element);
            const [SACCode, gstRate] = [arr[0].SACCode, arr[0].gstRate];

            const taxableValue = arr.reduce((sum: any, y: any) => sum + +y.lineValue, 0).toFixed(2);
            const igstRate = condition ? arr[0]?.igstRate ?? 0 : 0;
            const igstAmount = condition ? (+igstRate * +taxableValue) / 100 : 0;
            const cgstRate = condition ? 0 : arr[0]?.cgstRate ?? 0;
            const cgstAmount = condition ? 0 : (+cgstRate * +taxableValue) / 100;
            const sgstRate = condition ? 0 : arr[0]?.sgstRate ?? 0;
            const sgstAmount = condition ? 0 : (+sgstRate * +taxableValue) / 100;

            const totalTax = Number(+igstAmount + +cgstAmount + +sgstAmount).toFixed(2);
            const totalValueWithTax = Number(+taxableValue + +cgstAmount + +igstAmount + +sgstAmount).toFixed(2);

            return {
                SACCode,
                taxableValue: +taxableValue,
                gstRate,
                igstRate,
                igstAmount,
                cgstRate,
                cgstAmount,
                sgstRate,
                sgstAmount,
                totalTax,
                totalValueWithTax
            };
        });
        this.form.controls["totalCGSTAmount"].setValue(
            this.GSTDetailsArray.map((y: any) => +y.cgstAmount).reduce((a: number, c: number) => a + c, 0)
        );
        this.form.controls["totalSGSTAmount"].setValue(
            this.GSTDetailsArray.map((y: any) => +y.sgstAmount).reduce((a: number, c: number) => a + c, 0)
        );
        this.form.controls["totalIGSTAmount"].setValue(
            this.GSTDetailsArray.map((y: any) => +y.igstAmount).reduce((a: number, c: number) => a + c, 0)
        );
        this.form.controls["totalTaxAmount"].setValue(
            +this.form.value["totalCGSTAmount"] +
                +this.form.value["totalSGSTAmount"] +
                +this.form.value["totalIGSTAmount"]
        );

        this.form.controls["totalAmountWithTax"].setValue(
            this.GSTDetailsArray.map((y: any) => +y.totalValueWithTax).reduce((a: number, c: number) => a + c, 0)
        );
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.customerFilterOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
