import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProformaInvoiceService} from "@services/sales";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DetailsOfCustomersListComponent, SalesDispatchDetailsComponent} from "@modals/index";
import {PROFORMA_INVOICE_FORM_ERRORS} from "@mocks/validations/sales";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {ProformaInvoiceMasterData} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-proforma-invoice-form",
    templateUrl: "./proforma-invoice-form.component.html"
})
export class ProformaInvoiceFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    PIDetailsArray: any = [];
    SKU: any = [];
    ESCPreviewArr: any = [];
    customerOptions: any = [];
    selectedCustomer: any = {};
    dispatchDetails: any = {};
    otherCharges = {
        action: "create",
        packagingAndForwarding: 0,
        freight: 0,
        insurance: 0,
        loadingAndUnloading: 0,
        miscellaneous: 0,
        totalAmount: 0
    };
    submitted = false;
    isPreview = false;
    isESCPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Created",
        edit: "Created",
        approve: "Approved",
        reject: "Rejected"
    };

    masterData: ProformaInvoiceMasterData = {
        autoIncrementNo: "",
        billFromLocationOptions: [],
        freightTermsOptions: [],
        modeOfTransportOptions: [],
        paymentTermsOptions: [],
        salesCategoryOptions: [],
        transporterOptions: [],
        customersOptions: [],
        companyData: {
            _id: "",
            placesOfBusiness: []
        }
    };
    selectedCustomerDetails = {};
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        billFromLocation: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        PINumber: new UntypedFormControl(null),
        PIDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        PONumber: new UntypedFormControl(null, [Validators.required]),
        PODate: new UntypedFormControl("", [Validators.required]),
        quotationProformaRef: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        SOFileName: new UntypedFormControl(null),
        PIValidityDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        PITotalAmount: new UntypedFormControl(null, [Validators.required]),
        PIDetails: new UntypedFormControl([]),
        SORemarks: new UntypedFormControl(null),
        PICancellationReason: new UntypedFormControl(null),
        isActive: new UntypedFormControl(true),
        billFromAddress: new UntypedFormControl({}),
        paymentTerms: new UntypedFormControl(null),
        PIStatus: new UntypedFormControl("Created", [Validators.required])
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private proformaInvoiceService: ProformaInvoiceService,
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
        if (this.validationService.checkErrors(this.form, PROFORMA_INVOICE_FORM_ERRORS)) {
            return;
        }

        let formData: any = {...this.form.value, ...this.dispatchDetails};
        formData.otherCharges = this.otherCharges;
        formData.PIDetails = this.PIDetailsArray;
        for (let index = 0; index < PROFORMA_INVOICE_FORM_ERRORS.length; index++) {
            const element = PROFORMA_INVOICE_FORM_ERRORS[index];

            if (element.key && !formData[element.key]) {
                this.toastService.warning(element.message);
                return;
            }
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
        this.proformaInvoiceService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.proformaInvoiceService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.PIDetailsArray = [];
        this.customerOptions = [];
        this.collection = this.PIDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.proformaInvoiceService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["PINumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isActive"].setValue(true);
            this.f["PODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["PIDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["PIStatus"].setValue(this.statusArr[this.action]);
            this.SKU = result.SKUMasters;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.proformaInvoiceService.getById(params["id"]);
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
                    if (success.PIDate) {
                        success.PIDate = this.utilityService.getFormatDate(success?.PIDate, "YYYY-MM-DD");
                    }
                    success.customer = success.customer._id;
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.salesCategory == success.customerCategory
                    );
                    if (success.PODate) {
                        success.PODate = this.utilityService.getFormatDate(success?.PODate, "YYYY-MM-DD");
                    }
                    if (success.PIValidityDate) {
                        success.PIValidityDate = this.utilityService.getFormatDate(
                            success?.PIValidityDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.SOTargetDate) {
                        success.SOTargetDate = this.utilityService.getFormatDate(success?.SOTargetDate, "YYYY-MM-DD");
                    }
                    this.selectedCustomer = this.masterData?.customersOptions.find(
                        (x: any) => x._id == success.customer
                    );
                    this.PIDetailsArray = success?.PIDetails.map((ele: any, idx: any) => {
                        return {
                            PILineNumber: ele.PILineNumber,
                            SKU: ele?.SKU?._id,
                            SKUNo: ele?.SKU?.SKUNo,
                            SKUName: ele?.SKU?.SKUName,
                            SKUDescription: ele.SKU?.SKUDescription,
                            customerPartNo: ele?.customerPartNo,
                            UOM: ele?.UOM,
                            orderedQty: ele?.orderedQty,
                            balancedQty: ele?.orderedQty,
                            standardRate: ele?.standardRate,
                            discount: ele?.discount,
                            netRate: ele?.netRate,
                            lineValue: ele?.lineValue,
                            SOLineTargetDate: this.utilityService.getFormatDate(ele?.SOLineTargetDate, "YYYY-MM-DD")
                        };
                    });
                    this.collection = this.PIDetailsArray.length;
                    this.otherCharges = success.otherCharges;
                    success.PIStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.dispatchDetails = {
                        customerShippingAddress: success.customerShippingAddress,
                        frightCharge: success.frightCharge,
                        frightTerms: success.frightTerms,
                        modeOfTransport: success.modeOfTransport,
                        transporter: success.transporter,
                        destination: success.destination
                    };
                    if (this.action == "view" || this.action == "reject" || this.action == "approve") {
                        this.form.disable();
                    }
                    if (this.action == "edit") {
                        this.form.disable();
                        this.form.controls["PIValidityDate"].enable();
                        this.form.controls["PODate"].enable();
                        this.form.controls["PONumber"].enable();
                    }
                });

            this.menuTitleService.set({
                title: this.action == "reject" ? "Proforma Invoice Cancellation" : "Proforma Invoice",
                subTitle: null,
                type: this.action == "reject" ? null : null
            });
        });
    }
    openDispatchDetailsModal() {
        const modalRef = this.modalService.open(SalesDispatchDetailsComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.dispatchDetails = this.dispatchDetails;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions,
            addressArr: this.selectedCustomer?.customerShippingAddress
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.dispatchDetails = success;
                    this.otherCharges = success.otherCharges;
                }
            },
            (reason: any) => {}
        );
    }
    setDelivery() {
        this.PIDetailsArray = this.PIDetailsArray.map((ele: any) => {
            ele.SOLineTargetDate = this.utilityService.getFormatDate(this.f["SOLineTargetDate"].value, "YYYY-MM-DD");
            return ele;
        });
    }
    customerValueChange(item: any) {
        this.f["currency"].setValue(item?.customerCurrency);
        this.f["paymentTerms"].setValue(item.customerPaymentTerms);
        this.selectedCustomer = item;

        this.PIDetailsArray = this.SKU.filter((x: any) =>
            x.customerInfo.some((y: any) => y.customer == this.f["customer"].value)
        ).map((ele: any, idx: any) => {
            return {
                SKU: ele._id,
                PILineNumber: idx + 1,
                SKUNo: ele.SKUNo,
                SKUName: ele.SKUName,
                UOM: ele.primaryUnit,
                SKUDescription: ele.SKUDescription,
                customerPartNo: ele.customerInfo.find((customer: any) => this.f["customer"].value === customer.customer)
                    ?.customerPartNo,
                SOLineTargetDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                discount: 0,
                netRate:
                    ele.customerInfo.find((customer: any) => this.f["customer"].value === customer.customer)
                        ?.standardSellingRate ?? 0,
                orderedQty: 0,
                invoicedQty: 0,
                canceledQty: 0,
                balancedQty: 0,
                canceledReason: ele,
                standardRate:
                    ele.customerInfo.find((customer: any) => this.f["customer"].value === customer.customer)
                        ?.standardSellingRate ?? 0,
                lineValue: 0
            };
        });
        this.collection = this.PIDetailsArray.length;
    }

    setBillFromAddress(ele: any) {
        let data = this.masterData?.companyData.placesOfBusiness.find((x: any) => x.locationID == ele.target.value);
        let obj = {
            line1: data?.addressLine1,
            line2: data?.addressLine2,
            line3: data?.addressLine3,
            line4: data?.addressLine4,
            pinCode: data?.pinCode,
            city: data?.city,
            state: data?.state,
            country: data?.country
        };
        this.form.controls["billFromAddress"].patchValue(obj);
    }

    getCustomers() {
        this.f["currency"].setValue(null);
        this.f["customer"].setValue(null);
        this.selectedCustomerDetails = {};
        this.PIDetailsArray = [];
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }

    setLineValue(PILineNumber: number, ele: any) {
        let index = this.PIDetailsArray.map((x: any) => x.PILineNumber).indexOf(PILineNumber);
        (this.PIDetailsArray[index].lineValue = +ele.orderedQty * +ele.netRate).toFixed(2);
        (this.PIDetailsArray[index].balancedQty = +ele.orderedQty).toFixed(2);
        this.f["PITotalAmount"].setValue(
            this.PIDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    setNetRate(PILineNumber: number, ele: any) {
        let index = this.PIDetailsArray.map((x: any) => x.PILineNumber).indexOf(PILineNumber);
        this.PIDetailsArray[index].netRate = ele.standardRate - ele.standardRate * (ele.discount / 100);
        this.PIDetailsArray[index].lineValue = ele.orderedQty * ele.netRate;
        this.f["PITotalAmount"].setValue(
            this.PIDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.PIDetailsArray = this.ESCPreviewArr;
        this.collection = this.PIDetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.PIDetailsArray;
        this.PIDetailsArray = this.PIDetailsArray.filter((x: any) => x.orderedQty > 0);
        if (this.PIDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.PIDetailsArray.length;
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
        modalRef.componentInstance.customerOptions = this.customerOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.PIDetailsArray = this.PIDetailsArray;
        } else {
            this.PIDetailsArray = [...this.PIDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
