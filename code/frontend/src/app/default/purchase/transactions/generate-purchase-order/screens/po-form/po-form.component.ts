import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {PurchaseOrderService} from "@services/purchase";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {PODetails} from "@interfaces/PODetails";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CancelPoComponent, DetailsOfSupplierListComponent, POOtherChargesComponent} from "@shared/modals";
import {GENERATE_PURCHASE_ORDER_FORM_ERRORS} from "@mocks/validations/purchase/generate-purchase-order.validation";
import {SpinnerService, UtilityService} from "@core/services";
import {POChangePTComponent} from "../po-change-pt/po-change-pt.component";
import {PURCHASE_ORDER_TYPE} from "@mocks/constant";
import {POScheduleModalComponent} from "../po-schedule-modal/po-schedule-modal.component";
import {IGeneratePOMasterData} from "@mocks/models/purchase/transactions";

@Component({
    selector: "app-po-form",
    templateUrl: "./po-form.component.html",
    styleUrls: ["./po-form.component.scss"]
})
export class PoFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    submitted = false;
    isPreview = false;
    POTypeObj: any = PURCHASE_ORDER_TYPE;
    POTypeArr: any = PURCHASE_ORDER_TYPE.getAllPurchasePOType();
    action: string = "create";
    earnings: any = [];
    PODetailsArray: PODetails[] = [];
    supplierOptions: any = [];
    purchaseCategoryValues: any = {};
    selectedSupplierDetails: any = {};
    minDate: Date = new Date();
    filterItems: PODetails[] = [];
    ESCPreviewArr: any = [];
    isESCPreview = false;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected",
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
    masterData: IGeneratePOMasterData = {
        purchaseCategoryOptions: [],
        paymentTermsOptions: [],
        freightTermsOptions: [],
        transporterOptions: [],
        locationOptions: []
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        purchaseCategory: new UntypedFormControl(null, [Validators.required]),
        supplier: new UntypedFormControl(null, [Validators.required]),
        changedPaymentTerms: new UntypedFormControl(null),
        POType: new UntypedFormControl(this.POTypeObj.STANDARD_PO),
        PONumber: new UntypedFormControl(""),
        PODate: new UntypedFormControl(""),
        POValidity: new UntypedFormControl(null, [Validators.required]),
        orderReference: new UntypedFormControl(""),
        currency: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(null, [Validators.required]),
        freightTerms: new UntypedFormControl("FOR - Free On Road"),
        transporter: new UntypedFormControl(null),
        deliveryDate: new UntypedFormControl(""),
        PODetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(""),
        PORemarks: new UntypedFormControl(""),
        totalLineValue: new UntypedFormControl(0),
        netPOValue: new UntypedFormControl(0),
        totalPPV: new UntypedFormControl(0),
        cancellationReason: new UntypedFormControl(""),
        POStatus: new UntypedFormControl("Awaiting Approval")
    });
    get f() {
        return this.form.controls;
    }
    constructor(
        private purchaseService: PurchaseOrderService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }
    navigateTo() {
        this.location.back();
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();

        if (this.validationService.checkErrors(this.form, GENERATE_PURCHASE_ORDER_FORM_ERRORS)) {
            return;
        }

        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }
        if (this.action == "cancel" && !this.form.controls["cancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }
        let formData: any = this.form.value;

        formData.otherCharges = this.otherCharges;
        formData.PODetails = this.filterItems.filter((x: any) => x.POQty > 0);
        if (formData.PODetails.length == 0) {
            this.toastService.warning("POQty can not be zero");
            return;
        }
        if (this.POTypeObj.PLANNED_PO == this.f["POType"].value) {
            if (this.action == "create") {
                let deliverySchedule = formData.PODetails.some((x: any) => x.deliverySchedule);
                if (!deliverySchedule) {
                    this.toastService.warning("Delivery Schedule is required");
                    return;
                }
            }
            if (this.action == "edit") {
                let deliverySchedule = formData.PODetails.some((x: any) => x.deliverySchedule.length > 0);
                if (!deliverySchedule) {
                    this.toastService.warning("Delivery Schedule is required");
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
        this.purchaseService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.purchaseService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.supplierOptions = [];
        this.isPreview = false;
        this.isESCPreview = false;
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    preview() {
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterItems;
        this.search = "";
        this.filterItems = this.filterItems.filter((x: any) => x.POQty > 0);
        if (this.filterItems.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.filterItems.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterItems = this.ESCPreviewArr;
        this.collection = this.filterItems.length;
    }
    getInitialData() {
        this.spinner.show();
        this.purchaseService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            if (this.masterData.locationOptions.length == 1) {
                this.form.controls["deliveryLocation"].patchValue(this.masterData.locationOptions[0]?.label);
            }
            this.purchaseCategoryValues = result?.autoIncValues;
            this.f["PODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["deliveryDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["freightTerms"].patchValue("FOR - Free On Road");
            this.form.controls["POType"].patchValue(this.POTypeObj.STANDARD_PO);
            this.setPOValidity();
            this.form.controls["POStatus"].patchValue("Awaiting Approval");
            this.form.controls["POStatus"].setValue(this.statusArr[this.action]);
            this.form.controls["currency"].patchValue("INR");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.purchaseService.getById(params["id"]);
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
                    if (success.PODate) {
                        success.PODate = this.utilityService.getFormatDate(success.PODate, "YYYY-MM-DD");
                    }
                    if (success.POValidity) {
                        success.POValidity = this.utilityService.getFormatDate(success.POValidity, "YYYY-MM-DD");
                    }
                    if (success.supplier._id && success.supplier) {
                        success.supplier = success?.supplier?._id;
                    }
                    if (success.deliveryDate) {
                        success.deliveryDate = this.utilityService.getFormatDate(success.deliveryDate, "YYYY-MM-DD");
                    }
                    if (success.PODetails.length && success.PODetails[0].deliveryDate) {
                        success.PODetails[0].deliveryDate = this.utilityService.getFormatDate(
                            success.PODetails[0].deliveryDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.purchaseCategory) {
                        this.spinner.show();
                        this.purchaseService
                            .getSupplierByCategory({purchaseCategory: success.purchaseCategory})
                            .subscribe(success => {
                                this.supplierOptions = success;
                                this.spinner.hide();
                            });
                    }

                    this.filterItems = success.PODetails.map((ele: any, idx: any) => {
                        if (!!!ele.unitConversion) {
                            if (ele.item.primaryToSecondaryConversion) {
                                ele.unitConversion = `1 ${ele.item.primaryUnit ?? "Unit"} = ${
                                    ele.item.primaryToSecondaryConversion ?? 1
                                } ${ele.item.secondaryUnit ?? "Unit"}`;
                            } else {
                                ele.unitConversion = `1 ${ele.item.secondaryUnit ?? "Unit"} = ${
                                    ele.item.secondaryToPrimaryConversion ?? 1
                                } ${ele.item.primaryUnit ?? "Unit"}`;
                            }
                        }
                        ele.POLineNumber = idx + 1;
                        return ele;
                    });
                    if (this.action != "edit") {
                        this.filterItems = this.filterItems.filter(x => x.POQty != 0);
                    }
                    this.f["totalLineValue"].setValue(
                        this.filterItems
                            .map((x: any) => x.lineValue)
                            .reduce((acc: number, cur: number) => acc + cur, 0)
                            .toFixed(2)
                    );
                    this.collection = this.filterItems.length;
                    if (success.POStatus == "Supplementary PO") {
                        success.POStatus = "Closed";
                    } else {
                        success.POStatus = this.statusArr[this.action];
                    }
                    this.otherCharges = success.otherCharges;
                    this.form.patchValue(success);
                    this.f["purchaseCategory"].disable();
                    this.f["supplier"].disable();
                    this.f["POType"].disable();

                    if (this.action != "edit") {
                        this.form.disable();
                        if (["approve", "reject", "cancel"].includes(this.action)) {
                            this.f["remarks"].enable();
                            this.f["cancellationReason"].enable();
                        }
                        this.f["POStatus"].enable();
                    }
                });
        });
    }

    setPOValidityFromPODate() {
        this.setPOValidity();
    }

    setPOValidity() {
        if (this.POTypeObj.STANDARD_PO == this.f["POType"].value) {
            let PODate = this.f["PODate"].value;
            let futureMonth = this.utilityService.getAddFormat(PODate, 1);
            this.f["POValidity"].setValue(futureMonth);
        } else if (this.POTypeObj.PLANNED_PO == this.f["POType"].value) {
            let PODate = this.f["PODate"].value;
            let futureMonth = this.utilityService.getAddFormat(PODate, 1);
            this.f["POValidity"].setValue(futureMonth);
        } else if (this.POTypeObj.BLANKET_PO == this.f["POType"].value) {
            let PODate = this.f["PODate"].value;
            let futureMonth = this.utilityService.getAddFormat(PODate, 12);
            this.f["POValidity"].setValue(futureMonth);
        }

        if (this.POTypeObj.STANDARD_PO != this.f["POType"].value) {
            this.filterItems = this.filterItems.map((ele: any) => {
                ele.deliveryDate = this.utilityService.getTodayDate("YYYY-MM-DD");
                return ele;
            });
        } else {
            this.filterItems = this.filterItems.map((ele: any) => {
                ele.deliveryDate = ele.leadDeliveryDate;
                return ele;
            });
        }
    }

    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "PO Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Purchase Order ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    clearFilter() {
        this.search = "";
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        this.column = "createdAt";
        this.direction = -1;
        this.search = "";
        this.getInitialData();
    }

    setDelivery() {
        this.filterItems = this.filterItems.map((ele: any) => {
            ele.deliveryDate = this.utilityService.getFormatDate(this.f["deliveryDate"].value, "YYYY-MM-DD");
            return ele;
        });
        let POD = this.form.controls["PODate"].value;
        let DD = this.form.controls["deliveryDate"].value;
        if (POD > DD) {
            this.toastService.warning("Please Take Proper Date !");
            this.form.controls["deliveryDate"].reset();
        }
    }
    getSuppliers(ev: any) {
        this.form.controls["PONumber"].setValue(this.purchaseCategoryValues[ev.value]);
        this.f["supplier"].setValue(null);
        this.selectedSupplierDetails = {};
        this.spinner.show();
        this.purchaseService.getSupplierByCategory({purchaseCategory: ev.value}).subscribe(success => {
            this.supplierOptions = success;
            this.spinner.hide();
        });
        this.filterItems = [];
        // this.supplierOptions = this.masterData.suppliersOptions.filter(
        //     (x: any) =>
        //         x.supplierPurchaseType.includes("Domestic", "Imports") ==
        //         this.f["purchaseCategory"].value.includes("Domestic", "Imports")
        // );
    }
    supplierValueChange(ev: any) {
        this.spinner.show();
        this.purchaseService.getAllItemsForSupplier({supplierId: ev.value}).subscribe(success => {
            this.filterItems = success.map((ele: any, index: any) => {
                ele.POLineNumber = index + 1;
                if (!!!ele.unitConversion) {
                    if (ele.primaryToSecondaryConversion) {
                        ele.unitConversion = `1 ${ele.primaryUnit ?? "Unit"} = ${
                            ele.primaryToSecondaryConversion ?? 1
                        } ${ele.secondaryUnit ?? "Unit"}`;
                    } else {
                        ele.unitConversion = `1 ${ele.secondaryUnit ?? "Unit"} = ${
                            ele.secondaryToPrimaryConversion ?? 1
                        } ${ele.primaryUnit ?? "Unit"}`;
                    }
                }
                if (this.f["POType"].value == this.POTypeObj.STANDARD_PO) {
                    ele.deliveryDate = ele?.leadDeliveryDate;
                }
                return ele;
            });
            this.spinner.hide();
        });
        this.f["currency"].setValue(ev?.supplierCurrency);
        this.f["transporter"].setValue(ev?.lastTransporter);
        this.f["changedPaymentTerms"].setValue(ev?.supplierPaymentTerms);
        this.f["deliveryDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.collection = this.filterItems.length;
    }

    lineValueRate(POLineNumber: number, element: any) {
        let index = this.filterItems.map((x: any) => x.POLineNumber).indexOf(POLineNumber);
        this.filterItems[index].lineValue = Number((+element.POQty * +element.purchaseRate).toFixed(2));

        this.filterItems[index].balancedQty = element.POQty;

        this.filterItems[index].linePPV = Number(
            (+element.POQty * +element.standardRate - +element.POQty * +element.purchaseRate).toFixed(2)
        );
        this.f["totalLineValue"].setValue(
            this.filterItems
                .map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["netPOValue"].setValue((+this.f["totalLineValue"].value + +this.otherCharges.totalAmount).toFixed(2));
        this.f["totalPPV"].setValue(
            this.filterItems
                .map((x: any) => x.linePPV)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }
    setConversionOfUnit(item: any) {
        if (["edit", "create"].includes(this.action)) {
            let index = this.filterItems.map((x: any) => x.POLineNumber).indexOf(item.POLineNumber);
            if (this.filterItems[index].UOM == item.secondaryUnit) {
                this.filterItems[index].UOM = item.primaryUnit;
                this.filterItems[index].purchaseRate = item.stdCostUom1;
                this.filterItems[index].standardRate = item.stdCostUom1;
                this.filterItems[index].POQty = 0;
                this.isPreview = false;
            } else {
                this.filterItems[index].UOM = item.secondaryUnit;
                this.filterItems[index].purchaseRate = item.stdCostUom2;
                this.filterItems[index].standardRate = item.stdCostUom2;
                this.filterItems[index].POQty = 0;
                this.isPreview = false;
            }

            this.lineValueRate(item.POLineNumber, item);
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openOtherChargesModal() {
        const modalRef = this.modalService.open(POOtherChargesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        this.otherCharges.action = this.action;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "amend"].includes(this.action)) {
                    this.otherCharges = success;
                    this.f["netPOValue"].setValue(
                        (+this.f["totalLineValue"].value + +this.otherCharges.totalAmount).toFixed(2)
                    );
                }
            },
            (reason: any) => {}
        );
    }

    openPOTermsModal() {
        const modalRef = this.modalService.open(POChangePTComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.paymentTermsArr = this.masterData.paymentTermsOptions;
        modalRef.componentInstance.deliveryLocationArr = this.masterData.locationOptions;
        modalRef.componentInstance.freightTermsArr = this.masterData.freightTermsOptions;
        modalRef.componentInstance.transporterArr = this.masterData.transporterOptions;
        modalRef.componentInstance.POTerms = {
            deliveryLocation: this.f["deliveryLocation"].value,
            changedPaymentTerms: this.f["changedPaymentTerms"].value,
            freightTerms: this.f["freightTerms"].value,
            transporter: this.f["transporter"].value,
            PORemarks: this.f["PORemarks"].value
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
    openPOScheduleModal(item: any) {
        const modalRef = this.modalService.open(POScheduleModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.POQty = item.POQty;
        modalRef.componentInstance.deliveryCount = item.deliveryCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.deliveryDate = this.utilityService.getFormatDate(item.deliveryDate, "YYYY-MM-DD");
        if (item.deliverySchedule) {
            modalRef.componentInstance.deliveryScheduleArr = item?.deliverySchedule.map((x: any) => {
                x.deliveryDate = this.utilityService.getFormatDate(x.deliveryDate, "YYYY-MM-DD");
                return x;
            });
        }
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    let index = this.filterItems.map((x: any) => x.POLineNumber).indexOf(item.POLineNumber);
                    this.filterItems[index].deliveryCount = success.deliveryCount;
                    this.filterItems[index].deliverySchedule = success.deliverySchedule;
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
            this.filterItems = this.filterItems;
        } else {
            this.filterItems = [...this.filterItems].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    openSupplierDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfSupplierListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedSupplierDetails = this.selectedSupplierDetails;
        modalRef.componentInstance.supplierOptions = this.supplierOptions;
        modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.supplierValueChange(this.selectedSupplierDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
