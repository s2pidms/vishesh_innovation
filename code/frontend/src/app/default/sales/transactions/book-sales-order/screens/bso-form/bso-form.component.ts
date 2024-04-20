import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SODetails} from "@interfaces/SODetails";
import {SalesOrderService} from "@services/sales";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent, DetailsOfCustomersListComponent} from "@modals/index";
import {BSO_FORM_ERRORS} from "@mocks/validations/sales";
import {MenuTitleService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {OpenPoNoComponent} from "../open-po-no/open-po-no.component";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {POScheduleModalComponent} from "src/app/default/purchase/transactions/generate-purchase-order/screens/po-schedule-modal/po-schedule-modal.component";
import {SoTermsDetailsComponent} from "../so-terms-details/so-terms-details.component";
import {SoTypeComponent} from "../so-type/so-type.component";
import {BookSalesOrderMasterData} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-bso-form",
    templateUrl: "./bso-form.component.html",
    styles: [
        `
            .assetCalendarTD {
                background-color: transparent;
                background-image: url("./../../../../../../../assets/new_icons/Asset_Calendar.svg");
                background-size: 100% 100%;
                border: 0;
                color: white;
                height: 1.6rem;
                width: 1.6rem;
            }
        `
    ]
})
export class BSOFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    SODetailsArray: SODetails[] = [];
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
        SONumber: new UntypedFormControl(null),
        SODate: new UntypedFormControl(""),
        billFromLocation: new UntypedFormControl(null, [Validators.required]),
        PONumber: new UntypedFormControl(null, [Validators.required]),
        PODate: new UntypedFormControl("", [Validators.required]),
        quotationProformaRef: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        SOFileName: new UntypedFormControl(null),
        SOTargetDate: new UntypedFormControl(""),
        SOTotalAmount: new UntypedFormControl(null, [Validators.required]),
        SODetails: new UntypedFormControl([]),
        customerShippingAddress: new UntypedFormControl({}),
        customerBillingAddress: new UntypedFormControl({}),
        SORemarks: new UntypedFormControl(null),
        SOCancellationReason: new UntypedFormControl(null),
        SOType: new UntypedFormControl(this.SOTypeObj.Regular),
        isActive: new UntypedFormControl(true),
        SOStatus: new UntypedFormControl("Created", [Validators.required]),
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
        private salesService: SalesOrderService,
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
            if (this.validationService.checkErrors(this.form, BSO_FORM_ERRORS)) {
                return;
            }
        }
        if (this.action == "cancel" && !this.form.controls["SOCancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.popupResponse = this.popupResponse;
        formData.SOTargetDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        formData.SODetails = this.SODetailsArray;

        if (this.SOTypeObj.Planned != this.f["SOType"].value) {
            for (const element of formData.SODetails) {
                if (!element.dispatchSchedule || element.dispatchSchedule.length == 0) {
                    let dispatchCount = 1;
                    for (let index = 0; index < dispatchCount; index++) {
                        let obj: any = {
                            scheduleNo: index + 1,
                            quantity: element.orderedQty,
                            UOM: element.UOM,
                            dispatchDate: element.SOLineTargetDate,
                            PPICDate: element.SOLineTargetDate
                        };

                        element.dispatchSchedule = [obj];
                        element.dispatchCount = 1;
                    }
                }
            }
        }

        if (this.action != "cancel") {
            for (let index = 0; index < BSO_FORM_ERRORS.length; index++) {
                const element = BSO_FORM_ERRORS[index];

                if (element.key && !formData[element.key]) {
                    this.toastService.warning(element.message);
                    return;
                }
            }
        }
        if (this.SOTypeObj.Planned == this.f["SOType"].value || this.SOTypeObj.Regular == this.f["SOType"].value) {
            if (this.action == "create") {
                let dispatchSchedule = formData.SODetails.some((x: any) => x.dispatchSchedule);
                if (!dispatchSchedule) {
                    this.toastService.warning("Dispatch Schedule is required");
                    return;
                }
            }
            if (this.action == "edit") {
                let dispatchSchedule = formData.SODetails.some((x: any) => x.dispatchSchedule.length > 0);
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
        this.salesService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.salesService.create(formData).subscribe(success => {
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
        this.SODetailsArray = [];
        this.customerOptions = [];
        this.collection = this.SODetailsArray.length;
        this.openPONumberArr = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.salesService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["SONumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isActive"].setValue(true);
            this.form.controls["SOType"].setValue(this.SOTypeObj.Regular);
            this.f["PODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["SODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["SOStatus"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salesService.getById(params["id"]);
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
                    if (success.SODate) {
                        success.SODate = this.utilityService.getFormatDate(success?.SODate, "YYYY-MM-DD");
                    }
                    success.customer = success.customer._id;
                    this.customerOptions = this.masterData?.customerOptions.filter(
                        (x: any) => x.salesCategory == success.customerCategory
                    );
                    if (success.PODate) {
                        success.PODate = this.utilityService.getFormatDate(success?.PODate, "YYYY-MM-DD");
                    }
                    if (success.SOTargetDate) {
                        success.SOTargetDate = this.utilityService.getFormatDate(success?.SOTargetDate, "YYYY-MM-DD");
                    }
                    this.selectedCustomer = this.masterData?.customerOptions.find(
                        (x: any) => x._id == success.customer
                    );
                    this.SODetailsArray = success?.SODetails.map((ele: any, idx: any) => {
                        return {
                            SOLineNumber: ele.SOLineNumber,
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
                            discount: ele?.discount,
                            netRate: ele?.netRate,
                            lineValue: ele?.lineValue,
                            SOLineTargetDate: this.utilityService.getFormatDate(ele?.SOLineTargetDate, "YYYY-MM-DD")
                        };
                    });
                    this.collection = this.SODetailsArray.length;
                    this.otherCharges = success.otherCharges;
                    success.SOStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "cancel" ||
                        this.action == "approve"
                    ) {
                        this.form.disable();
                        this.form.controls["SOCancellationReason"].enable();
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
        modalRef.componentInstance.heading = "SO Cancellation";
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
        modalRef.componentInstance.heading = "SO Confirmation";
        modalRef.componentInstance.cancelText =
            "SO already created against this PO. still you want to create new SO against same PO";
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
        this.SODetailsArray = this.SODetailsArray.map((ele: any) => {
            ele.SOLineTargetDate = this.utilityService.getFormatDate(this.f["SOLineTargetDate"].value, "YYYY-MM-DD");
            return ele;
        });
    }
    customerValueChange(ele: any) {
        this.form.controls["PONumber"].setValue(null);
        this.form.controls["PODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.form.controls["paymentTerms"].setValue(ele.customerPaymentTerms);
        this.f["currency"].setValue(ele?.customerCurrency);
        this.selectedCustomer = ele;
        this.salesService.getAllSalesSKUList({customerId: ele?._id}).subscribe(success => {
            this.SODetailsArray = success.SKUList.map((x: any, idx: any) => {
                x.SOLineNumber = 1;
                return x;
            });
            this.collection = this.SODetailsArray.length;
            this.openPONumberArr = success?.PODetails;
        });
    }

    openPONumber() {
        const modalRef = this.modalService.open(OpenPoNoComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerId = this.form.controls["customer"].value;
        modalRef.componentInstance.openPONumberArr = this.openPONumberArr;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.SODetailsArray = success?.SODetailsArray.map((ele: any, idx: any) => {
                        ele.SOLineNumber = idx + 1;
                        return ele;
                    });
                    this.collection = this.SODetailsArray.length;
                    this.openPONumberArr = success.openPONumberArr;
                    this.form.controls["PONumber"].setValue(success?.selectedData?.PONo);
                    this.form.controls["PODate"].setValue(
                        this.utilityService.getFormatDate(success?.selectedData?.PODate, "YYYY-MM-DD")
                    );
                }
            },
            (reason: any) => {}
        );
    }

    getCustomers() {
        this.f["customer"].setValue(null);
        this.f["currency"].setValue(null);
        this.selectedCustomerDetails = {};
        this.SODetailsArray = [];
        this.customerOptions = this.masterData?.customerOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }

    setLineValue(ele: any) {
        let index = this.SODetailsArray.findIndex((x: any) => x.SOLineNumber == ele.SOLineNumber && x.SKU == ele.SKU);
        (this.SODetailsArray[index].lineValue = +ele.orderedQty * +ele.netRate).toFixed(2);
        (this.SODetailsArray[index].balancedQty = +ele.orderedQty).toFixed(2);
        (this.SODetailsArray[index].JCCQty = +ele.orderedQty).toFixed(2);
        this.f["SOTotalAmount"].setValue(
            this.SODetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );

        if (ele.dispatchSchedule) {
            let dividedCount = Math.floor(ele.orderedQty / ele.dispatchCount);
            let remainder = ele.orderedQty % ele.dispatchCount;
            for (let i = 0; i < ele.dispatchCount; i++) {
                const element = this.SODetailsArray[index].dispatchSchedule[i];
                let quantity = dividedCount;
                if (i === ele.dispatchCount - 1) {
                    quantity += remainder;
                }
                element.quantity = quantity;
            }
        }
    }

    setNetRate(ele: any) {
        let index = this.SODetailsArray.findIndex((x: any) => x.SOLineNumber == ele.SOLineNumber && x.SKU == ele.SKU);
        this.SODetailsArray[index].netRate = ele.standardRate - ele.standardRate * (ele.discount / 100);
        this.SODetailsArray[index].lineValue = ele.orderedQty * ele.netRate;
        this.f["SOTotalAmount"].setValue(
            this.SODetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.SODetailsArray = this.ESCPreviewArr;
        this.collection = this.SODetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.SODetailsArray;
        this.SODetailsArray = this.SODetailsArray.filter((x: any) => x.orderedQty > 0);
        if (this.SODetailsArray.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.SODetailsArray.length;
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.SODetailsArray = this.SODetailsArray;
        } else {
            this.SODetailsArray = [...this.SODetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    openSOScheduleModal(item: any) {
        if (!this.form.controls["SOType"].value) {
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
        modalRef.componentInstance.SOType = this.form.controls["SOType"].value;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.POQty = item.orderedQty;
        modalRef.componentInstance.deliveryCount = item.dispatchCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.regularType = item;
        modalRef.componentInstance.dispatchDate = this.utilityService.getFormatDate(
            item.SOLineTargetDate,
            "YYYY-MM-DD"
        );
        modalRef.componentInstance.PPICDate = this.utilityService.getFormatDate(item.SOLineTargetDate, "YYYY-MM-DD");
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
                    let index = this.SODetailsArray.findIndex(
                        (x: any) => x.SOLineNumber == item.SOLineNumber && x.SKU == item.SKU
                    );
                    this.SODetailsArray[index].dispatchCount = success.deliveryCount;
                    this.SODetailsArray[index].dispatchSchedule = success.deliverySchedule;
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
            SORemarks: this.form.controls["SORemarks"].value
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
        modalRef.componentInstance.SOType = this.form.controls["SOType"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["SOType"].setValue(success);
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
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
