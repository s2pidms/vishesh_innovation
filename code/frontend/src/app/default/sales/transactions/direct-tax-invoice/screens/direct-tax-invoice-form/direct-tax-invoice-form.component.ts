import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DirectTaxInvoiceService} from "@services/sales";
import {DIRECT_TAX_INVOICE_FORM_ERRORS} from "@mocks/validations/sales";
import {SpinnerService, UtilityService} from "@core/services";
import {IDirectTaxInvoiceMasterData} from "@mocks/models/sales/transactions";
import {DetailsOfCustomersListComponent} from "@shared/modals";
import {Location} from "@angular/common";
import {ViewDrnTermsComponent} from "src/app/default/dispatch/transactions/shipment-creation/screens/components";
import {DTIOtherChargesModalComponent} from "../components";
import {mergeMap, of} from "rxjs";

@Component({
    selector: "app-direct-tax-invoice-form",
    templateUrl: "./direct-tax-invoice-form.component.html"
})
export class DirectTaxInvoiceFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    DTIDetailsArray: any = [];
    customerOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "DTICode";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    action: string = "create";
    selectedCustomer: any = {};
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approval: "Approved",
        rejection: "Rejected"
    };
    otherCharges = {
        action: "create",
        packagingAndForwarding: 0,
        freight: 0,
        insurance: 0,
        loadingAndUnloading: 0,
        miscellaneous: 0,
        totalAmount: 0
    };
    selectedCustomerDetails = {};
    masterData: IDirectTaxInvoiceMasterData = {
        autoIncrementedValues: {},
        companyData: [],
        customerCategoryOptions: [],
        customersOptions: [],
        transporterOptions: [],
        freightTermsOptions: [],
        modeOfTransportOptions: [],
        paymentTermsOptions: [],
        billFromLocationOptions: []
    };

    constructor(
        private directTaxInvoiceService: DirectTaxInvoiceService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        billFromLocation: new UntypedFormControl(null),
        DTICode: new UntypedFormControl(null),
        salesInvoiceDate: new UntypedFormControl(""),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        DTIValue: new UntypedFormControl(null),
        DTIStatus: new UntypedFormControl("Awaiting Approval"),
        salesInvoiceTotalAmount: new UntypedFormControl(null),
        paymentTerms: new UntypedFormControl(null, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        frightTerms: new UntypedFormControl(null, [Validators.required]),
        transporter: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl(null, [Validators.required]),
        salesInvoiceDetails: new UntypedFormControl([]),
        billFromAddress: new UntypedFormControl({}),
        customerShippingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl(""),
            contactPersonName: new UntypedFormControl(""),
            contactPersonNumber: new UntypedFormControl("")
        }),
        customerBillingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            line4: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl("India"),
            contactPersonName: new UntypedFormControl(""),
            contactPersonNumber: new UntypedFormControl("")
        })
    });
    get f() {
        return this.form.controls;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, DIRECT_TAX_INVOICE_FORM_ERRORS)) {
            return;
        }

        if (this.DTIDetailsArray.length == 0) {
            this.toastService.warning("Atleast one row is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.salesInvoiceDetails = this.DTIDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }
    update(formData: any) {
        this.spinner.show();
        this.directTaxInvoiceService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.directTaxInvoiceService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    preview() {
        this.search = "";
        this.DTIDetailsArray = this.DTIDetailsArray.filter((x: any) => x.dispatchQty > 0);
        if (this.DTIDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.DTIDetailsArray.length;
    }

    reset() {
        this.form.reset();
        this.customerOptions = [];
        this.DTIDetailsArray = [];
        this.collection = this.DTIDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.directTaxInvoiceService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DTIStatus"].setValue(this.statusArr[this.action]);
            this.f["salesInvoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        // this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.directTaxInvoiceService.getById(params["id"]);
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
                    this.DTIDetailsArray = success.salesInvoiceDetails;
                    this.collection = this.DTIDetailsArray.length;
                    if (success.salesInvoiceDate) {
                        success.salesInvoiceDate = this.utilityService.getFormatDate(
                            success.salesInvoiceDate,
                            "YYYY-MM-DD"
                        );
                    }
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.customer == success.customer
                    );
                    this.otherCharges = success.otherCharges;
                    this.setBillFromAddress({label: success?.billFromLocation});
                    this.f["DTIValue"].setValue(
                        this.DTIDetailsArray.map((x: any) => x.salesInvoiceLineValue)
                            .reduce((acc: number, cur: number) => acc + cur, 0)
                            .toFixed(2)
                    );
                    success.DTIStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "approval" ||
                        this.action == "rejection"
                    ) {
                        this.form.disable();
                    }
                });
            this.spinner.hide();
        });
    }

    setBillFromAddress(event: any) {
        this.f["DTICode"].setValue(this.masterData?.autoIncrementedValues[event?.label]);
        let data = this.masterData?.companyData?.placesOfBusiness.find((x: any) => x?.locationID == event?.label);
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

    customerValueChange(ele: any) {
        this.selectedCustomer = ele;
        if (ele?.customerShippingAddress?.length > 0) {
            this.f["customerShippingAddress"].patchValue(ele?.customerShippingAddress[0]);
            this.f["customerBillingAddress"].patchValue(ele?.customerShippingAddress[0]);
        }

        this.spinner.show();
        this.directTaxInvoiceService.getDTIDetailsByCustomerId(ele.customer).subscribe((success: any) => {
            this.DTIDetailsArray = success?.map((x: any, idx: number) => {
                x.DTILineNumber = idx + 1;
                return x;
            });
            this.collection = this.DTIDetailsArray.length;
            this.spinner.hide();
        });
    }
    getCustomers() {
        this.selectedCustomerDetails = {};
        this.f["customer"].setValue(null);
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["customerCategory"].value
        );
    }
    checkDispatchQty(ele: any) {
        let index = this.DTIDetailsArray.map((x: any) => x.DTILineNumber).indexOf(ele.DTILineNumber);

        if (ele.dispatchQty > ele.SOBalancedQty) {
            this.toastService.error("Dispatch Qty should not be greater then SO Balanced Qty");
            this.DTIDetailsArray[index].dispatchQty = 0;
            return;
        }
        this.DTIDetailsArray[index].salesInvoiceUnitRate =
            +ele.purchaseRate - +ele.purchaseRate * (+ele.discount / 100);
        this.DTIDetailsArray[index].salesInvoiceLineValue = +ele.dispatchQty * +ele.salesInvoiceUnitRate;
        this.DTIDetailsArray[index].SPVLine =
            ele.dispatchQty * ele.standardRate - ele.dispatchQty * ele.salesInvoiceUnitRate;
        this.f["DTIValue"].setValue(
            this.DTIDetailsArray.map((x: any) => x.salesInvoiceLineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["salesInvoiceTotalAmount"].patchValue(
            (+this.f["DTIValue"].value + +this.otherCharges.totalAmount).toFixed(2)
        );
    }
    setNetRate(DTILineNumber: number, ele: any) {
        let index = this.DTIDetailsArray.map((x: any) => x.DTILineNumber).indexOf(DTILineNumber);
        this.DTIDetailsArray[index].salesInvoiceUnitRate = ele.purchaseRate - ele.purchaseRate * (ele.discount / 100);
        this.DTIDetailsArray[index].salesInvoiceLineValue = ele.dispatchQty * ele.salesInvoiceUnitRate;
        this.DTIDetailsArray[index].SPVLine =
            ele.dispatchQty * ele.standardRate - ele.dispatchQty * ele.salesInvoiceUnitRate;
        this.f["DTIValue"].setValue(
            this.DTIDetailsArray.map((x: any) => x.salesInvoiceLineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["salesInvoiceTotalAmount"].setValue(
            (+this.f["DTIValue"].value + +this.otherCharges.totalAmount).toFixed(2)
        );
    }

    openViewDRNTermsModal() {
        const modalRef = this.modalService.open(ViewDrnTermsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = "create";
        modalRef.componentInstance.SOTermsArr = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions,
            paymentTermsArr: this.masterData?.paymentTermsOptions
        };
        modalRef.componentInstance.SOTermsData = {
            paymentTerms: this.form.controls["paymentTerms"].value,
            modeOfTransport: this.form.controls["modeOfTransport"].value,
            frightTerms: this.form.controls["frightTerms"].value,
            transporter: this.form.controls["transporter"].value,
            destination: this.form.controls["destination"].value
        };

        modalRef.componentInstance.billFromAddress = this.form.controls["billFromAddress"].value;
        modalRef.componentInstance.billToAddress = this.form.controls["customerBillingAddress"].value;
        modalRef.componentInstance.customerShippingAddress = this.form.controls["customerShippingAddress"].value;
        modalRef.componentInstance.billFromLocation = this.form.controls["billFromLocation"].value;
        modalRef.componentInstance.billFromCompanyData = this.masterData?.companyData;
        modalRef.componentInstance.billFromLocationArr = this.masterData?.billFromLocationOptions;
        modalRef.componentInstance.selectedCustomerData = this.selectedCustomer?.customerShippingAddress;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);

                    this.form.patchValue(success?.SOTermsData);
                    this.form.controls["billFromAddress"].patchValue(success?.billFromAddress);
                    this.form.controls["customerBillingAddress"].setValue(success?.billToAddress);
                    this.form.controls["customerShippingAddress"].patchValue(success?.customerShippingAddress);
                    this.form.controls["billFromLocation"].setValue(success?.billFromLocation);
                    this.setBillFromAddress({label: success?.billFromLocation});
                }
            },
            (reason: any) => {}
        );
    }

    openShipmentDetailsModal() {
        const modalRef = this.modalService.open(DTIOtherChargesModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.DTITotalAmount = this.f["DTIValue"].value;
        modalRef.componentInstance.otherCharges = this.otherCharges;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.otherCharges = success;
                    // otherCharges.totalAmount
                    this.form.controls["salesInvoiceTotalAmount"].setValue(success?.totalTaxInvoiceValue);
                }
            },
            (reason: any) => {}
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
        modalRef.componentInstance.customerOptions = this.customerOptions;
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

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.DTIDetailsArray = this.DTIDetailsArray;
        } else {
            this.DTIDetailsArray = [...this.DTIDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
