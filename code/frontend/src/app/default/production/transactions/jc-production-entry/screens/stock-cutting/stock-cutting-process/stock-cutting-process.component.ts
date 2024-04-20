import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {SFGStockService} from "@services/planning";
import {WIPInventoryService} from "@services/planning";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {IRMDetailsOfRoll, IRollToRollMasterData} from "@mocks/models/planning/transactions";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StockCuttingPPICProcessComponent} from "../stock-cutting-ppic-process/stock-cutting-ppic-process.component";

@Component({
    selector: "app-stock-cutting-process",
    templateUrl: "./stock-cutting-process.component.html",
    styleUrls: ["./stock-cutting-process.component.scss"]
})
export class StockCuttingProcessComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: any = "create";
    @Input() selectedStockCuttingData: any = {};
    @Input() shiftOptions: any = [];
    oldSelectedStockCuttingData: any = {};
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    isESCPreview = false;
    ESCPreviewArr: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    constructor(
        private toastService: ToastService,
        private modalService: NgbModal,
        public activeModal: NgbActiveModal
    ) {}

    ngOnInit(): void {
        if (this.selectedStockCuttingData) {
            this.selectedStockCuttingData.PPICOpeningStock = this.selectedStockCuttingData?.PPICOpeningStock?.filter(
                (x: any) => x?.itemCode == this.selectedStockCuttingData?.itemCode
            );

            this.selectedStockCuttingData.PPICToProductionGT = this.selectedStockCuttingData?.PPICToProductionGT?.map(
                (x: any) => {
                    x.MRNNo = this.selectedStockCuttingData?.MRNNo ?? "-";
                    x.MRN = this.selectedStockCuttingData?.MRN;
                    x.item = this.selectedStockCuttingData?.item ?? this.selectedStockCuttingData?.reference;
                    x.itemCode = this.selectedStockCuttingData?.itemCode;
                    x.itemName = this.selectedStockCuttingData?.itemName;
                    x.itemDescription = this.selectedStockCuttingData?.itemDescription;
                    x.U1 = this.selectedStockCuttingData?.U1;
                    x.U1Qty = +this.selectedStockCuttingData?.U1Qty.toFixed(2);
                    x.width = this.selectedStockCuttingData?.width;
                    x.widthUnit = this.selectedStockCuttingData?.widthUnit;
                    x.length = this.selectedStockCuttingData?.length;
                    x.lengthUnit = this.selectedStockCuttingData?.lengthUnit;
                    x.MF = this.selectedStockCuttingData?.MF;
                    x.U2 = this.selectedStockCuttingData?.U2;
                    x.U2Qty = this.selectedStockCuttingData?.U2Qty;
                    return x;
                }
            );

            this.oldSelectedStockCuttingData = JSON.parse(JSON.stringify(this.selectedStockCuttingData));
        }
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
    setPagination() {
        this.page = 1;
    }
    setSelectData(u: any) {
        let calU2Qty = this.selectedStockCuttingData?.PPICOpeningStock?.map((x: any) =>
            x?.select == true ? x?.U2Qty : 0
        )
            .reduce((a: any, c: any) => +a + +c, 0)
            .toFixed(2);
        this.selectedStockCuttingData.U2TotalQty = +calU2Qty;
    }

    reset() {
        this.selectedStockCuttingData = JSON.parse(JSON.stringify(this.oldSelectedStockCuttingData));
    }

    preview() {
        this.isESCPreview = true;
        this.search = "";
        this.ESCPreviewArr = this.selectedStockCuttingData.PPICOpeningStock;

        this.selectedStockCuttingData.PPICOpeningStock = this.selectedStockCuttingData.PPICOpeningStock.filter(
            (x: any) => x.select
        );
        if (this.selectedStockCuttingData.PPICOpeningStock.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.selectedStockCuttingData.PPICOpeningStock.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;

        this.selectedStockCuttingData.PPICOpeningStock = this.ESCPreviewArr;
        this.collection = this.selectedStockCuttingData?.PPICOpeningStock?.length;
    }

    changeU2Qty(ele: any) {
        let index = this.selectedStockCuttingData?.PPICToProductionGT?.map((x: any) => x.reference).indexOf(
            ele?.reference
        );
        let DFW = ele?.widthUnit == "mm" ? 1000 : 1;
        let DFL = ele?.lengthUnit == "mm" ? 1000 : 1;
        this.selectedStockCuttingData.PPICToProductionGT[index].MF = +((ele.width * ele.length) / (DFW * DFL)).toFixed(
            2
        );
        this.selectedStockCuttingData.PPICToProductionGT[index].U2Qty = +(ele.U1Qty * ele.MF).toFixed(2);
    }

    openStockCuttingPPICClosingDetailsModal() {
        if (this.selectedStockCuttingData.U2TotalQty < this.selectedStockCuttingData.PPICToProductionGT[0].U2Qty) {
            this.toastService.warning("U2 Total must be greater than PPIC to Production GT U2 Qty ");
            return;
        }

        this.preview();

        const modalRef = this.modalService.open(StockCuttingPPICProcessComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedStockCuttingData = this.selectedStockCuttingData;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;

        modalRef.result.then(
            (success: any) => {
                // if (success) {
                // this.selectedStockCuttingData = success?.selectedStockCuttingData
                // }
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
            this.selectedStockCuttingData.PPICOpeningStock = this.selectedStockCuttingData.PPICOpeningStock;
        } else {
            this.selectedStockCuttingData.PPICOpeningStock = [...this.selectedStockCuttingData.PPICOpeningStock].sort(
                (a: any, b: any) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
    }
}
