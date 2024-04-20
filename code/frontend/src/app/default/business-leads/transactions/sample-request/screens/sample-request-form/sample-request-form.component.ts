import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SODetails} from "@interfaces/SODetails";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent, DetailsOfCustomersListComponent} from "@modals/index";
import {MenuTitleService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {POScheduleModalComponent} from "src/app/default/purchase/transactions/generate-purchase-order/screens/po-schedule-modal/po-schedule-modal.component";
import {BookSalesOrderMasterData} from "@mocks/models/sales/transactions";
import {OpenPoNoComponent} from "src/app/default/sales/transactions/book-sales-order/screens/open-po-no/open-po-no.component";
import {SoTermsDetailsComponent} from "src/app/default/sales/transactions/book-sales-order/screens/so-terms-details/so-terms-details.component";
import {SoTypeComponent} from "src/app/default/sales/transactions/book-sales-order/screens/so-type/so-type.component";
import {SampleRequestService} from "@services/business-leads";
import {SAMPLE_REQUEST_FORM_ERRORS} from "@mocks/validations/business-leads";
import {Location} from "@angular/common";

@Component({
    selector: "app-sample-request-form",
    templateUrl: "./sample-request-form.component.html",
    styleUrls: ["./sample-request-form.component.scss"]
})
export class SampleRequestFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    SRDetailsArray: SODetails[] = [];
    openPONumberArr: any = [];
    customerOptions: any = [];
    selectedCustomer: any = {};
    displayName: any = {};
    selectedCustomerDetails: any = {};
    submitted = false;
    popupResponse = "No";
    isPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Created",
        edit: "Created",
        approve: "Approved",
        cancel: "Cancelled"
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
    SOTypeObj: any = SO_ORDER_TYPE;
    SOTypeArr: any = SO_ORDER_TYPE.getAllSOType();
    ESCPreviewArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    masterData: BookSalesOrderMasterData = {
        autoIncrementNo: "",
        billFromLocationOptions: [],
        freightTermsOptions: [],
        modeOfTransportOptions: [],
        paymentTermsOptions: [],
        salesCategoryOptions: [],
        transporterOptions: [],
        customerOptions: [],
        companyData: {
            _id: "",
            placesOfBusiness: []
        }
    };
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null),
        sampleReqNo: new UntypedFormControl(null),
        SRDate: new UntypedFormControl(""),
        billFromLocation: new UntypedFormControl(null, [Validators.required]),
        quotationProformaRef: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        SRTargetDate: new UntypedFormControl(""),
        SRTotalAmount: new UntypedFormControl(null, [Validators.required]),
        SRDetails: new UntypedFormControl([]),
        customerShippingAddress: new UntypedFormControl({}),
        customerBillingAddress: new UntypedFormControl({}),
        SRRemarks: new UntypedFormControl(null),
        SRCancellationReason: new UntypedFormControl(null),
        SRType: new UntypedFormControl(this.SOTypeObj.Regular),
        isActive: new UntypedFormControl(true),
        SRStatus: new UntypedFormControl("Created", [Validators.required]),
        billFromAddress: new UntypedFormControl({}),
        billToAddress: new UntypedFormControl({}),
        paymentTerms: new UntypedFormControl(null),
        modeOfTransport: new UntypedFormControl(null),
        frightCharge: new UntypedFormControl(null),
        frightTerms: new UntypedFormControl(null),
        transporter: new UntypedFormControl(null),
        destination: new UntypedFormControl(null)
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private sampleRequestService: SampleRequestService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.displayName = this.storageService.get("menuTitle")?.title;
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
        if (this.action != "cancel") {
            if (this.validationService.checkErrors(this.form, SAMPLE_REQUEST_FORM_ERRORS)) {
                return;
            }
        }
        if (this.action == "cancel" && !this.form.controls["SRCancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.popupResponse = this.popupResponse;
        formData.SRTargetDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        formData.SRDetails = this.SRDetailsArray;

        if (this.SOTypeObj.Planned != this.f["SRType"].value) {
            for (const element of formData.SRDetails) {
                if (!element.dispatchSchedule || element.dispatchSchedule.length == 0) {
                    let dispatchCount = 1;
                    for (let index = 0; index < dispatchCount; index++) {
                        let obj: any = {
                            scheduleNo: index + 1,
                            quantity: element.orderedQty,
                            UOM: element.UOM,
                            dispatchDate: element.SRLineTargetDate,
                            PPICDate: element.SRLineTargetDate
                        };

                        element.dispatchSchedule = [obj];
                        element.dispatchCount = 1;
                    }
                }
            }
        }

        if (this.action != "cancel") {
            for (let index = 0; index < SAMPLE_REQUEST_FORM_ERRORS.length; index++) {
                const element = SAMPLE_REQUEST_FORM_ERRORS[index];

                if (element.key && !formData[element.key]) {
                    this.toastService.warning(element.message);
                    return;
                }
            }
        }
        if (this.SOTypeObj.Planned == this.f["SRType"].value || this.SOTypeObj.Regular == this.f["SRType"].value) {
            if (this.action == "create") {
                let dispatchSchedule = formData.SRDetails.some((x: any) => x.dispatchSchedule);
                if (!dispatchSchedule) {
                    this.toastService.warning("Dispatch Schedule is required");
                    return;
                }
            }
            if (this.action == "edit") {
                let dispatchSchedule = formData.SRDetails.some((x: any) => x.dispatchSchedule.length > 0);
                if (!dispatchSchedule) {
                    this.toastService.warning("Dispatch Schedule is required");
                    return;
                }
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
        this.sampleRequestService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.sampleRequestService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            if (success.POExists == "Yes") {
                this.openConfirmSOModal();
            } else {
                this.toastService.success(success.message);
                this.location.back();
            }
        });
    }
    reset() {
        this.form.reset();
        this.SRDetailsArray = [];
        this.customerOptions = [];
        this.collection = this.SRDetailsArray.length;
        this.openPONumberArr = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.sampleRequestService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["sampleReqNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isActive"].setValue(true);
            this.form.controls["SRType"].setValue(this.SOTypeObj.Regular);
            this.f["SRDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["SRStatus"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.sampleRequestService.getById(params["id"]);
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
                    if (success.SRDate) {
                        success.SRDate = this.utilityService.getFormatDate(success?.SRDate, "YYYY-MM-DD");
                    }
                    success.customer = success.customer;
                    this.customerOptions = this.masterData?.customerOptions.filter(
                        (x: any) => x.customerCategory == success.salesCategory
                    );
                    if (success.SRTargetDate) {
                        success.SRTargetDate = this.utilityService.getFormatDate(success?.SRTargetDate, "YYYY-MM-DD");
                    }
                    this.selectedCustomer = this.masterData?.customerOptions.find(
                        (x: any) => x._id == success.customer
                    );
                    this.SRDetailsArray = success?.SRDetails.map((ele: any, idx: any) => {
                        return {
                            SRLineNumber: ele.SRLineNumber,
                            SKU: ele?.SKU?._id,
                            SKUNo: ele?.SKU?.SKUNo,
                            SKUName: ele?.SKU?.SKUName,
                            SKUDescription: ele.SKU?.SKUDescription,
                            customerPartNo: ele?.customerPartNo,
                            UOM: ele?.UOM,
                            dispatchSchedule: ele?.dispatchSchedule,
                            dispatchCount: ele?.dispatchCount,
                            orderedQty: ele?.orderedQty,
                            balancedQty: ele?.orderedQty,
                            JCCQty: ele?.orderedQty,
                            standardRate: ele?.standardRate,
                            netRate: ele?.netRate,
                            lineValue: ele?.lineValue,
                            SRLineTargetDate: this.utilityService.getFormatDate(ele?.SRLineTargetDate, "YYYY-MM-DD")
                        };
                    });
                    this.collection = this.SRDetailsArray.length;
                    this.otherCharges = success.otherCharges;
                    success.SRStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "cancel" ||
                        this.action == "approve"
                    ) {
                        this.form.disable();
                        this.form.controls["SRCancellationReason"].enable();
                    }
                });

            this.menuTitleService.set({
                title: this.action == "cancel" ? "Sales Order Cancellation" : `${this.displayName}`,
                subTitle: null,
                type: this.action == "cancel" ? null : null
            });
        });
    }
    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "SR Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Sales Order ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }
    openConfirmSOModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "SR Confirmation";
        modalRef.componentInstance.cancelText =
            "SR already created against this PO. still you want to create new SR against same PO";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.popupResponse = "Yes";
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    setDelivery() {
        this.SRDetailsArray = this.SRDetailsArray.map((ele: any) => {
            ele.SRLineTargetDate = this.utilityService.getFormatDate(this.f["SRLineTargetDate"].value, "YYYY-MM-DD");
            return ele;
        });
    }
    customerValueChange(ele: any) {
        this.form.controls["paymentTerms"].setValue(ele.customerPaymentTerms);
        this.f["currency"].setValue(ele?.customerCurrency);
        this.form.controls["customerName"].setValue(ele?.customerName);
        this.selectedCustomer = ele;
        this.sampleRequestService.getAllSalesSKUList({customerId: ele?._id}).subscribe(success => {
            this.SRDetailsArray = success?.map((x: any, idx: any) => {
                x.SRLineNumber = 1;
                return x;
            });
            this.collection = this.SRDetailsArray.length;
            this.openPONumberArr = success?.PODetails;
        });
    }

    getCustomers() {
        this.f["customer"].setValue(null);
        this.f["currency"].setValue(null);
        this.selectedCustomerDetails = {};
        this.SRDetailsArray = [];
        this.customerOptions = this.masterData?.customerOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }

    setLineValue(ele: any) {
        let index = this.SRDetailsArray.findIndex((x: any) => x.SRLineNumber == ele.SRLineNumber && x.SKU == ele.SKU);

        this.SRDetailsArray[index].netRate = +ele.standardRate;
        this.SRDetailsArray[index].lineValue = +(+ele.orderedQty * +ele.netRate).toFixed(2);
        this.SRDetailsArray[index].balancedQty = +(+ele.orderedQty).toFixed(2);
        this.SRDetailsArray[index].JCCQty = +(+ele.orderedQty).toFixed(2);
        this.f["SRTotalAmount"].setValue(
            this.SRDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );

        if (ele.dispatchSchedule) {
            let dividedCount = Math.floor(ele.orderedQty / ele.dispatchCount);
            let remainder = ele.orderedQty % ele.dispatchCount;
            for (let i = 0; i < ele.dispatchCount; i++) {
                const element = this.SRDetailsArray[index].dispatchSchedule[i];
                let quantity = dividedCount;
                if (i === ele.dispatchCount - 1) {
                    quantity += remainder;
                }
                element.quantity = quantity;
            }
        }
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.SRDetailsArray = this.ESCPreviewArr;
        this.collection = this.SRDetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.SRDetailsArray;
        this.SRDetailsArray = this.SRDetailsArray.filter((x: any) => x.orderedQty > 0);
        if (this.SRDetailsArray.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.SRDetailsArray.length;
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.SRDetailsArray = this.SRDetailsArray;
        } else {
            this.SRDetailsArray = [...this.SRDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    openSOScheduleModal(item: any) {
        if (!this.form.controls["SRType"].value) {
            this.toastService.warning("PO Type is required !");
            return;
        }
        const modalRef = this.modalService.open(POScheduleModalComponent, {
            centered: true,
            windowClass: "custom-modal-sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.bookSalesOrder = "Book Sales Order";
        modalRef.componentInstance.SOType = this.form.controls["SRType"].value;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.POQty = item.orderedQty;
        modalRef.componentInstance.deliveryCount = item.dispatchCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.regularType = item;
        modalRef.componentInstance.dispatchDate = this.utilityService.getFormatDate(
            item.SRLineTargetDate,
            "YYYY-MM-DD"
        );
        modalRef.componentInstance.PPICDate = this.utilityService.getFormatDate(item.SRLineTargetDate, "YYYY-MM-DD");
        if (item.dispatchSchedule) {
            modalRef.componentInstance.deliveryScheduleArr = item?.dispatchSchedule.map((x: any) => {
                x.dispatchDate = this.utilityService.getFormatDate(x.dispatchDate, "YYYY-MM-DD");
                x.PPICDate = this.utilityService.getFormatDate(x.PPICDate, "YYYY-MM-DD");
                return x;
            });
        }
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    let index = this.SRDetailsArray.findIndex(
                        (x: any) => x.SRLineNumber == item.SRLineNumber && x.SKU == item.SKU
                    );
                    this.SRDetailsArray[index].dispatchCount = success.deliveryCount;
                    this.SRDetailsArray[index].dispatchSchedule = success.deliverySchedule;
                }
            },
            (reason: any) => {}
        );
    }
    openSOTermsDetailsModal() {
        const modalRef = this.modalService.open(SoTermsDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.SOTermsArr = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions,
            paymentTermsArr: this.masterData?.paymentTermsOptions
        };
        modalRef.componentInstance.SOTermsData = {
            paymentTerms: this.form.controls["paymentTerms"].value,
            modeOfTransport: this.form.controls["modeOfTransport"].value,
            frightCharge: this.form.controls["frightCharge"].value,
            frightTerms: this.form.controls["frightTerms"].value,
            transporter: this.form.controls["transporter"].value,
            destination: this.form.controls["destination"].value,
            SORemarks: this.form.controls["SRRemarks"].value
        };

        modalRef.componentInstance.billFromAddress = this.form.controls["billFromAddress"].value;
        modalRef.componentInstance.billToAddress = this.form.controls["billToAddress"].value;
        modalRef.componentInstance.billFromLocation = this.form.controls["billFromLocation"].value;
        modalRef.componentInstance.billFromCompanyData = this.masterData?.companyData;
        modalRef.componentInstance.billFromLocationArr = this.masterData?.billFromLocationOptions;

        modalRef.componentInstance.customerShippingAddress = this.form.controls["customerShippingAddress"].value;
        modalRef.componentInstance.customerBillingAddress = this.form.controls["customerBillingAddress"].value;
        modalRef.componentInstance.selectedCustomerData = this.selectedCustomer?.customerShippingAddress;
        modalRef.componentInstance.selectedCustomerBillingData = this.selectedCustomer?.customerBillingAddress;
        modalRef.componentInstance.otherCharges = this.otherCharges;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success?.SOTermsData);
                    this.form.controls["SRRemarks"].setValue(success?.SOTermsData?.SORemarks);
                    this.otherCharges = success?.SOTermsData?.otherCharges;
                    this.form.controls["billFromAddress"].patchValue(success?.billFromAddress);
                    this.form.controls["billToAddress"].patchValue(success?.billToAddress);
                    this.form.controls["customerShippingAddress"].patchValue(success?.customerShippingAddress);
                    this.form.controls["customerBillingAddress"].patchValue(success?.customerBillingAddress);
                    this.form.controls["billFromLocation"].setValue(success?.billFromLocation);
                }
            },
            (reason: any) => {}
        );
    }

    openSOTypeModal() {
        const modalRef = this.modalService.open(SoTypeComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.SOType = this.form.controls["SRType"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["SRType"].setValue(success);
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
}
