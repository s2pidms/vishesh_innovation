import {DRNDetails} from "@interfaces/DRNDetails";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DispatchRequestNoteService} from "@services/sales";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DRN_FORM_ERRORS} from "@mocks/validations/sales";
import {SpinnerService, UtilityService} from "@core/services";
import {FGStockDetailsModalComponent} from "../fg-stock-details-modal/fg-stock-details-modal.component";
import {DrnShipToAddressComponent} from "../drn-ship-to-address/drn-ship-to-address.component";
import {DrnReviewTermsComponent} from "../drn-review-terms/drn-review-terms.component";
import {DrnExportDetailsComponent} from "../drn-export-details/drn-export-details.component";
import {DRNMasterData} from "@mocks/models/sales/transactions";
import {CancelPoComponent, DetailsOfCustomersListComponent} from "@shared/modals";
@Component({
    selector: "app-dispatch-request-note-form",
    templateUrl: "./dispatch-request-note-form.component.html"
})
export class DispatchRequestNoteFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    DRNDetailsArray: DRNDetails[] = [];
    customerOptions: any = [];
    customers: any = [];
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    action: string = "create";
    ESCPreviewArr: any = [];
    shipToArr: any = [];
    isESCPreview = false;
    statusArr: any = {
        create: "Created",
        edit: "Created",
        approval: "Approved",
        cancel: "Cancelled",
        rejection: "Rejected"
    };
    SOTermsArr: any;
    customerCurrency: any = "INR";
    masterData: DRNMasterData = {
        autoIncrementNo: "",
        freightTermsOptions: [],
        modeOfTransportOptions: [],
        paymentTermsOptions: [],
        salesCategoryOptions: [],
        transporterOptions: [],
        customersOptions: []
    };
    selectedCustomerDetails = {};
    constructor(
        private dispatchRequestNoteService: DispatchRequestNoteService,
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
        DRNNumber: new UntypedFormControl(null),
        DRNDate: new UntypedFormControl(""),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        DRNDetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        DRNStatus: new UntypedFormControl("Created"),
        customerShippingAddress: new UntypedFormGroup({
            contactPersonName: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            line4: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        }),
        exportsInfo: new UntypedFormGroup({
            exportsInvoiceNo: new UntypedFormControl(null),
            exportsInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
            exportsInvoiceTotalValue: new UntypedFormControl(null),
            exchangeRate: new UntypedFormControl(null),
            finalDestination: new UntypedFormControl(null)
        }),
        paymentTerms: new UntypedFormControl(null),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        frightTerms: new UntypedFormControl("FOR - Free On Road"),
        transporter: new UntypedFormControl(null),
        destination: new UntypedFormControl(null, [Validators.required]),
        cancellationReason: new UntypedFormControl(null)
    });
    get f() {
        return this.form.controls;
    }
    get shipToAddress() {
        return this.form.get("customerShippingAddress") as UntypedFormGroup;
    }
    get exportsInfo() {
        return this.form.get("exportsInfo") as UntypedFormGroup;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        if (this.action == "cancel" && !this.f["cancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }
        this.form.enable();
        if (this.validationService.checkErrors(this.form, DRN_FORM_ERRORS)) {
            return;
        }
        if (this.action == "rejection" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }

        if (this.DRNDetailsArray.length == 0) {
            this.toastService.warning("Atleast one row is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.DRNDetails = this.DRNDetailsArray.filter((x: any) => x.dispatchQty > 0);
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
        this.dispatchRequestNoteService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.dispatchRequestNoteService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.DRNDetailsArray = this.ESCPreviewArr;
        this.collection = this.DRNDetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.DRNDetailsArray;
        this.DRNDetailsArray = this.DRNDetailsArray.filter((x: any) => x.dispatchQty > 0);
        if (this.DRNDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.DRNDetailsArray.length;
    }

    reset() {
        this.form.reset();
        this.customerOptions = [];
        this.DRNDetailsArray = [];
        this.shipToArr = [];
        this.collection = this.DRNDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.dispatchRequestNoteService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DRNNumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["frightTerms"].setValue("FOR - Free On Road");
            this.f["DRNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["DRNStatus"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.dispatchRequestNoteService.getById(params["id"]);
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

                    this.DRNDetailsArray = success.DRNDetails;
                    if (success.DRNDate) {
                        success.DRNDate = this.utilityService.getFormatDate(success.DRNDate, "YYYY-MM-DD");
                    }
                    if (success.exportsInfo && success.exportsInfo.exportsInvoiceDate) {
                        success.exportsInfo.exportsInvoiceDate = this.utilityService.getFormatDate(
                            success.exportsInfo.exportsInvoiceDate,
                            "YYYY-MM-DD"
                        );
                    }

                    this.customerCurrency = this.masterData?.customersOptions.find(
                        (x: any) => x?.customerName == success?.customer?.customerName
                    )?.customerCurrency;

                    success.customer = success.customer._id;
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.salesCategory == success.customerCategory
                    );

                    this.collection = this.DRNDetailsArray.length;
                    success.DRNStatus = this.statusArr[this.action];
                    this.form.patchValue(success);

                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "rejection" ||
                        this.action == "approval" ||
                        this.action == "cancel"
                    ) {
                        this.form.disable();
                        this.form.controls["remarks"].enable();
                        this.f["cancellationReason"].enable();
                    }
                });
        });
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
            this.DRNDetailsArray = this.DRNDetailsArray;
        } else {
            this.DRNDetailsArray = [...this.DRNDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    customerValueChange(ele: any) {
        this.form.controls["paymentTerms"].setValue(ele?.customerPaymentTerms);
        this.shipToAddress.controls["contactPersonName"].setValue(null);
        this.customerCurrency = ele?.customerCurrency ?? "INR";
        this.shipToArr = ele?.customerShippingAddress;
        this.spinner.show();
        this.dispatchRequestNoteService.getDRNDetailsByCustomerId(ele._id).subscribe((success: any) => {
            this.DRNDetailsArray = success;
            this.collection = this.DRNDetailsArray.length;
            this.spinner.hide();
        });
    }

    getCustomers() {
        this.f["customer"].setValue(null);
        this.selectedCustomerDetails;
        this.DRNDetailsArray = [];
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }
    checkDispatchQty(ele: any) {
        let index = this.DRNDetailsArray.map((x: any) => x.DRNLineNumber).indexOf(ele.DRNLineNumber);
        let totalDispatchQty = this.DRNDetailsArray.filter(x => x.FGINId == ele?.FGINId)
            .map(m => m.dispatchQty)
            .reduce((a, c) => a + c, 0);
        if (totalDispatchQty > ele?.FGINQty) {
            this.DRNDetailsArray[index].FGINMfgDate = "";
            this.DRNDetailsArray[index].dispatchQty = 0;
            this.DRNDetailsArray = [...this.DRNDetailsArray];
            this.toastService.error("Dispatch Qty. should not be greater than FGIN Qty.");
            return;
        }
        if (ele.dispatchQty > ele.SOBalancedQty) {
            this.toastService.error("Dispatch Qty should not be greater then SO Balanced Qty");
            this.DRNDetailsArray[index].dispatchQty = 0;
        }
        if (ele.dispatchQty > ele.FGINQty) {
            this.toastService.error("Dispatch Qty should not be greater then FGIN Qty");
            this.DRNDetailsArray[index].dispatchQty = 0;
        }
    }
    setFGINQty(ele: any, DRNObj: any) {
        let FGINObj = DRNObj.FGINOptions.find((x: any) => x._id == ele.target.value);
        let index = this.DRNDetailsArray.map((x: any) => x.DRNLineNumber).indexOf(DRNObj.DRNLineNumber);

        let totalDispatchQty = this.DRNDetailsArray.filter(x => x.FGINId == FGINObj?._id)
            .map(m => m.dispatchQty)
            .reduce((a, c) => a + c, 0);
        if (totalDispatchQty > FGINObj?.FGINQuantity) {
            this.DRNDetailsArray[index].FGINMfgDate = "";
            this.toastService.error("FGIN Qty should not be greater then Dispatch Qty of that batch.");
            return;
        }
        this.DRNDetailsArray[index].FGINId = FGINObj?._id;
        this.DRNDetailsArray[index].FGINQty = FGINObj?.FGINQuantity;
        this.DRNDetailsArray[index].FGINMfgDate = FGINObj?.manufacturingDate;
    }
    setShipToAddress(event: any) {
        this.shipToAddress.patchValue(event);
    }
    openShipToAddressModal() {
        const modalRef = this.modalService.open(DrnShipToAddressComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerShippingAddress = this.shipToAddress.value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                }
            },
            (reason: any) => {}
        );
    }
    openDRNReviewTermsModal() {
        const modalRef = this.modalService.open(DrnReviewTermsComponent, {
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
            frightTerms: this.form.controls["frightTerms"].value,
            transporter: this.form.controls["transporter"].value,
            destination: this.form.controls["destination"].value
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openExportDetailsModal() {
        const modalRef = this.modalService.open(DrnExportDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerCurrency = this.customerCurrency;
        modalRef.componentInstance.exportDetailsArray = {
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions
        };
        modalRef.componentInstance.ExportDetailsData = {
            ...this.exportsInfo.value,
            modeOfTransport: this.form.controls["modeOfTransport"].value,
            frightTerms: this.form.controls["frightTerms"].value,
            destination: this.form.controls["destination"].value
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.exportsInfo.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openFGStockModal(row: any) {
        let index = this.DRNDetailsArray.findIndex(
            (x: any) => x.DRNLineNumber == row.DRNLineNumber && x.SONumber == row.SONumber && x.SKUNo == row.SKUNo
        );

        const modalRef = this.modalService.open(FGStockDetailsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = row;
        modalRef.componentInstance.totalDispatchQty = row.totalDispatchQty;
        modalRef.componentInstance.tBatchNo = row.tBatchNo;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.DRNDetailsArray[index].FGStockDetails = success.FGStockDetails;
                    this.DRNDetailsArray[index].tBatchNo = success.tBatchNo;
                    this.DRNDetailsArray[index].totalDispatchQty = success.totalDispatchQty;
                    this.DRNDetailsArray[index].dispatchQty = success.totalDispatchQty;
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
    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "DRN Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel DRN ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }
}
