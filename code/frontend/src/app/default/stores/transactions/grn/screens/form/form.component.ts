import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GRNDetails} from "@interfaces/GRNDetails";
import {GoodsReceiptNoteService} from "@services/stores";
import {SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {GRN_FORM_ERRORS} from "@mocks/validations/stores";
import {AddtionalInfoModalComponent} from "../addtional-info-modal/addtional-info-modal.component";
import {GrnLocationMappingComponent} from "../grn-location-mapping/grn-location-mapping.component";
import {CancelPoComponent} from "@shared/modals/cancel-po/cancel-po.component";
import {IGRNMasterData} from "@mocks/models/stores/transactions";
import {DetailsOfSupplierListComponent} from "@shared/modals";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;

    submitted = false;
    action: string = "create";
    POFilter: any = [];
    selectedSupplierDetails = {};
    GRNDetailsArray: GRNDetails[] = [];
    masterData: IGRNMasterData = {
        autoIncrementNo: "",
        GRNQtyPercent: 0,
        transporterOptions: [],
        suppliersOptions: []
    };

    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        generate: "Report Generated",
        cancel: "Cancelled"
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        GRNNumber: new UntypedFormControl(null, [Validators.required]),
        GRNDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        PONumber: new UntypedFormControl(null, [Validators.required]),
        PODate: new UntypedFormControl(null),
        supplier: new UntypedFormControl(null, [Validators.required]),
        supplierInvoiceRef: new UntypedFormControl(null, [Validators.required]),
        supplierInvoiceRefDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        GRNStatus: new UntypedFormControl("Awaiting Approval", [Validators.required]),
        remarks: new UntypedFormControl(null),
        transporterName: new UntypedFormControl(null),
        goodsDeliveryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        freightChargesPaid: new UntypedFormControl(null),
        otherChargesPaid: new UntypedFormControl(null),
        AWB_LR_BR: new UntypedFormControl(null),
        GRNDetails: new UntypedFormControl([]),
        isTaxInvoice: new UntypedFormControl(false),
        isEWayBill: new UntypedFormControl(false),
        isDeliveryChallan: new UntypedFormControl(false),
        isPackingList: new UntypedFormControl(false),
        isCOATC: new UntypedFormControl(false),
        deliveryLocation: new UntypedFormControl(null),
        cancellationReason: new UntypedFormControl(null),
        storageLocationMapping: new UntypedFormControl({})
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private grnServices: GoodsReceiptNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.GRNDetailsArray = this.GRNDetailsArray.filter((x: any) => x.GRNQty > 0);
        this.submitted = true;

        this.form.value.GRNDetails = this.GRNDetailsArray;
        if (this.validationService.checkErrors(this.form, GRN_FORM_ERRORS)) {
            return;
        }
        if (this.GRNDetailsArray.length == 0) {
            this.toastService.warning("Please select at least 1 Order");
            return;
        }

        this.form.enable();

        let formData: any = this.form.value;
        formData.GRNDetails = this.GRNDetailsArray;

        if (this.action == "approve" && formData.GRNDetails.some((x: any) => x.invoicedQty <= 0)) {
            this.toastService.warning("Invoice quantity can not be zero");
            return;
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
        this.grnServices.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);

            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.grnServices.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.GRNDetailsArray = [];
        this.POFilter = [];
        this.collection = this.GRNDetailsArray.length;
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.spinner.show();
        this.grnServices.getAllMasterData({}).subscribe(result => {
            // set  dropdowns array
            this.masterData = result;

            // patch autoIncrementNo
            this.form.controls["GRNNumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["GRNStatus"].setValue("Awaiting Approval");
            this.form.controls["goodsDeliveryDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["GRNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["supplierInvoiceRefDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.grnServices.getById(params["id"]);
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
                    // patch all forms fields
                    this.GRNDetailsArray = success.GRNDetails.map((ele: any, idx: number) => {
                        return {
                            POLineNumber: ele.POLineNumber,
                            GRNLineNumber: idx + 1,
                            item: ele?.item?._id,
                            itemCode: ele?.item?.itemCode,
                            itemName: ele?.item?.itemName,
                            itemDescription: ele?.item?.itemDescription,
                            conversionOfUnits: ele?.item?.conversionOfUnits,
                            standardRate: ele?.standardRate,
                            purchaseRate: ele?.purchaseRate,
                            primaryUnit: ele?.primaryUnit,
                            secondaryUnit: ele?.secondaryUnit,
                            primaryToSecondaryConversion: ele?.primaryToSecondaryConversion,
                            secondaryToPrimaryConversion: ele?.secondaryToPrimaryConversion,
                            UOM: ele.UOM ? ele.UOM : ele.primaryUnit,
                            POQty: ele?.POQty,
                            GRNQty: ele?.GRNQty,
                            invoicedQty: ele?.invoicedQty,
                            balancedQty: ele?.balancedQty,
                            receivedQty: ele?.receivedQty,
                            canceledQty: ele?.canceledQty,
                            batchDate: this.utilityService.getFormatDate(ele?.batchDate, "YYYY-MM-DD")
                        };
                    });
                    this.collection = this.GRNDetailsArray.length;
                    this.POFilter = [
                        {
                            PONumber: success?.PONumber.PONumber,
                            _id: success?.PONumber._id
                        }
                    ];
                    success.PONumber = success.PONumber._id;
                    success.supplier = success.supplier._id;
                    if (success.PODate) {
                        success.PODate = this.utilityService.getFormatDate(success.PODate, "YYYY-MM-DD");
                    }

                    success.GRNDate = this.utilityService.getFormatDate(success.GRNDate, "YYYY-MM-DD");
                    success.supplierInvoiceRefDate = this.utilityService.getFormatDate(
                        success.supplierInvoiceRefDate,
                        "YYYY-MM-DD"
                    );

                    // this.POFilter = this.purchaseOrdersArr.filter((x: any) => x.supplier == success.supplier);
                    success.GRNStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.f["PONumber"].disable();
                    this.f["supplier"].disable();
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                        if (this.action == "cancel") {
                            this.f["cancellationReason"].enable();
                        }
                    }
                });
            this.spinner.hide();
        });
    }

    cancelGRN() {
        this.form.enable();
        let formData: any = this.form.value;
        if (!formData.cancellationReason) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }

        this.spinner.show();
        this.grnServices.updateOnCancel(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
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
        modalRef.componentInstance.heading = "GRN Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel GRN ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.cancelGRN();
                }
            },
            (reason: any) => {}
        );
    }

    getPONum(event: any) {
        this.f["PONumber"].setValue(null);
        this.f["PODate"].setValue(null);
        this.f["deliveryLocation"].setValue(null);
        this.GRNDetailsArray = [];
        this.collection = this.GRNDetailsArray.length;
        this.spinner.show();
        this.grnServices.getPOBySupplierId(event?.value).subscribe(success => {
            this.POFilter = success;
            this.spinner.hide();
        });
        // this.POFilter = this.purchaseOrdersArr.filter((x: any) => x.supplier == event.value);
    }
    setTableDetails(event: any) {
        this.f["PODate"].setValue(this.utilityService.getFormatDate(event?.PODate, "YYYY-MM-DD"));
        this.f["deliveryLocation"].setValue(event?.deliveryLocation);
        this.spinner.show();
        this.grnServices.getGRNDetailsByPOId(event._id).subscribe(success => {
            this.GRNDetailsArray = success.map((ele: any, idx: number) => {
                ele.GRNLineNumber = idx + 1;
                return ele;
            });
            this.collection = this.GRNDetailsArray.length;
            this.spinner.hide();
        });

        // let poDetails = this.purchaseOrdersArr.find((x: any) => x._id == this.f["PONumber"].value);
        // this.f["PODate"].setValue(this.utilityService.getFormatDate(poDetails.PODate, "YYYY-MM-DD"));
        // this.f["deliveryLocation"].setValue(poDetails.deliveryLocation);
        // this.GRNDetailsArray = poDetails.PODetails.filter((x: any) => x.balancedQty > 0).map(
        //     (ele: any, idx: number) => {
        //         return {
        //             POLineNumber: ele.POLineNumber,
        //             GRNLineNumber: idx + 1,
        //             item: ele?.item._id,
        //             itemCode: ele?.item.itemCode,
        //             itemName: ele?.item.itemName,
        //             itemDescription: ele?.item.itemDescription,
        //             conversionOfUnits: ele?.item.conversionOfUnits,
        //             standardRate: ele?.standardRate,
        //             purchaseRate: ele?.purchaseRate,
        //             UOM: ele?.UOM,
        //             POQty: ele?.POQty,
        //             GRNQty: 0,
        //             invoicedQty: 0,
        //             balancedQty: ele?.balancedQty,
        //             receivedQty: ele?.receivedQty,
        //             canceledQty: ele?.canceledQty,
        //             batchDate: this.utilityService.getFormatDate(ele?.batchDate, "YYYY-MM-DD")
        //         };
        //     }
        // );
    }
    setInvoiceQty(GRNLineNumber: any, ele: any) {
        let index: number = this.GRNDetailsArray.map((x: any) => x.GRNLineNumber).indexOf(GRNLineNumber);

        if (ele.invoicedQty > ele.balancedQty + ele.balancedQty * +this.masterData.GRNQtyPercent) {
            this.GRNDetailsArray[index].invoicedQty = 0;
            this.toastService.warning(
                `Invoice Quantity '${ele.invoicedQty}' cannot be greater than Balance Quantity '${ele.balancedQty}'!Tolerance allowed is 50%.`
            );
        }
    }
    changeGRNQty(GRNLineNumber: any, ele: any) {
        let index: number = this.GRNDetailsArray.map((x: any) => x.GRNLineNumber).indexOf(GRNLineNumber);
        if (ele.GRNQty > ele.balancedQty + ele.balancedQty * +this.masterData.GRNQtyPercent) {
            this.GRNDetailsArray[index].GRNQty = 0;
            this.toastService.warning(
                `GRN Quantity '${ele.GRNQty}' cannot be greater than Balance Quantity '${ele.balancedQty}'!Tolerance allowed is 50%.`
            );
        }
    }

    grnQtyChange(ev: any, GRNLineNumber: number) {
        let index: number = this.GRNDetailsArray.map((x: any) => x.GRNLineNumber).indexOf(GRNLineNumber);
        this.GRNDetailsArray[index].GRNQty = Math.abs(ev);
    }

    setConversionOfUnit(item: any) {
        let index = this.GRNDetailsArray.map((x: any) => x.GRNLineNumber).indexOf(item.GRNLineNumber);
        if (this.GRNDetailsArray[index].UOM == item.secondaryUnit) {
            this.GRNDetailsArray[index].UOM = item.primaryUnit;
        } else {
            this.GRNDetailsArray[index].UOM = item.secondaryUnit;
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
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
    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GRNDetailsArray = this.GRNDetailsArray;
        } else {
            this.GRNDetailsArray = [...this.GRNDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    openAditionalInfoModal() {
        const modalRef = this.modalService.open(AddtionalInfoModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.transporterArr = this.masterData?.transporterOptions;
        modalRef.componentInstance.receivedDocuments = {
            isTaxInvoice: this.form.value.isTaxInvoice,
            isEWayBill: this.form.value.isEWayBill,
            isDeliveryChallan: this.form.value.isDeliveryChallan,
            isPackingList: this.form.value.isPackingList,
            isCOATC: this.form.value.isCOATC,
            goodsDeliveryDate: this.form.value.goodsDeliveryDate,
            transporterName: this.form.value.transporterName,
            AWB_LR_BR: this.form.value.AWB_LR_BR,
            freightChargesPaid: this.form.value.freightChargesPaid,
            otherChargesPaid: this.form.value.otherChargesPaid
        };

        modalRef.result.then(
            (success: any) => {
                this.form.patchValue(success);
            },
            (reason: any) => {}
        );
    }
    openStorageLocationMappingModal() {
        const modalRef = this.modalService.open(GrnLocationMappingComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.storageLocationMapping = this.form.value.storageLocationMapping;

        modalRef.result.then(
            (success: any) => {
                this.form.controls["storageLocationMapping"].patchValue(success);
            },
            (reason: any) => {}
        );
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
        modalRef.componentInstance.supplierOptions = this.masterData.suppliersOptions;
        modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.getPONum(this.selectedSupplierDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
