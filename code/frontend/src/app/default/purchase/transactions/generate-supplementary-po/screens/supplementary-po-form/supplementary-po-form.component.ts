import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Location} from "@angular/common";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {GoodsReceiptNoteService} from "@services/stores";
import {SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {PurchaseOrderService} from "@services/purchase";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ISupplementaryPODetails, ISupplementaryPOMasterData} from "@mocks/models/purchase/transactions";

@Component({
    selector: "app-supplementary-po-form",
    templateUrl: "./supplementary-po-form.component.html"
})
export class SupplementaryPOFormComponent implements OnInit {
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
    // ISupplementaryPODetails[]
    GRNDetailsArray: any = [];
    GRNNumbersArr: any = [];
    GRNNumberId: any = "";
    PODetails: any = [];
    oldPONumber: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: ISupplementaryPOMasterData = {
        rows: []
    };

    form = new UntypedFormGroup({
        GRNDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        PONumber: new UntypedFormControl(""),
        PODate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        supplier: new UntypedFormControl(null),
        supplierName: new UntypedFormControl(null),
        purchaseCategory: new UntypedFormControl(""),
        changedPaymentTerms: new UntypedFormControl(""),
        orderReference: new UntypedFormControl(""),
        currency: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(""),
        deliveryDate: new UntypedFormControl(""),
        PODetails: new UntypedFormControl([]),
        PORemarks: new UntypedFormControl(""),
        netPOValue: new UntypedFormControl(""),
        totalPPV: new UntypedFormControl(""),
        isActive: new UntypedFormControl(""),
        otherCharges: new UntypedFormControl({}),
        POStatus: new UntypedFormControl("Supplementary PO")
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private grnServices: GoodsReceiptNoteService,
        private POServices: PurchaseOrderService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private toastService: ToastService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();

        let formData: any = this.form.value;
        formData.PODetails = this.GRNDetailsArray;

        this.create(formData);
    }
    create(formData: any) {
        this.spinner.show();
        this.POServices.create(formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.reset();
        });
    }
    reset() {
        this.form.reset();
        this.GRNDetailsArray = [];
        this.GRNNumberId = "";
        this.oldPONumber = "";
        this.collection = this.GRNDetailsArray.length;
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.grnServices.getAllGRNForSupplementaryPO({}).subscribe(result => {
            this.form.controls["POStatus"].setValue("Supplementary PO");
            this.form.controls["GRNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.GRNNumbersArr = result.rows;

            this.spinner.hide();
        });
    }

    goodRequisitionById() {
        this.spinner.show();
        this.grnServices.getById(this.GRNNumberId).subscribe(success => {
            this.form.patchValue(success.PONumber);
            this.oldPONumber = success.PONumber.PONumber;
            let obj = {
                supplierName: success.supplier.supplierName,
                PONumber: success.PONumber.PONumber.replace("PO", "PO/S"),
                supplier: success.supplier._id,
                GRNDate: this.utilityService.getFormatDate(success.GRNDate, "YYYY-MM-DD"),
                PODate: this.utilityService.getFormatDate(success.PODate, "YYYY-MM-DD"),
                POStatus: "Supplementary PO"
            };
            this.form.patchValue(obj);

            this.GRNDetailsArray = success.PONumber.PODetails.map((ele: any) => {
                return {
                    ...ele,
                    ...success.GRNDetails.find((x: any) => x.item._id == ele.item)
                };
            }).filter((y: any) => y.GRNQty > y.POQty);

            this.GRNDetailsArray = this.GRNDetailsArray.map((x: any) => {
                return {
                    POLineNumber: x.POLineNumber,
                    item: x.item._id,
                    UOM: x.UOM,
                    primaryUnit: x.item.primaryUnit,
                    POQty: x.GRNQty - x.POQty,
                    standardRate: x.standardRate,
                    purchaseRate: x.purchaseRate,
                    lineValue: (x.GRNQty - x.POQty) * x.purchaseRate,
                    linePPV: (x.GRNQty - x.POQty) * x.purchaseRate,
                    deliveryDate: this.form.controls["GRNDate"].value,
                    gst: x.gst,
                    igst: x.igst,
                    cgst: x.cgst,
                    sgst: x.sgst,
                    lineRemarks: x.lineRemarks,
                    receivedQty: x.receivedQty,
                    invoicedQty: x.invoicedQty,
                    balancedQty: x.balancedQty,
                    canceledQty: x.canceledQty,
                    markedForAlternateSupplier: x.markedForAlternateSupplier,
                    lineStatus: x.lineStatus,

                    /// PO data Ended
                    itemCode: x.item.itemCode,
                    itemName: x.item.itemName,
                    itemDescription: x.item.itemDescription,
                    orderInfoUOM: x.item.orderInfoUOM,
                    unitConversion: x.item.conversionOfUnits,
                    GRNQty: x.GRNQty
                };
            });

            this.collection = this.GRNDetailsArray.length;
            this.f["netPOValue"].setValue(
                this.GRNDetailsArray.map((x: any) => x.lineValue)
                    .reduce((acc: number, cur: number) => +acc + +cur, 0)
                    .toFixed(2)
            );

            this.spinner.hide();
        });
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
}
