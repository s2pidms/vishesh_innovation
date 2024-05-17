import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {SpinnerService, ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StockCuttingProcessComponent} from "../stock-cutting-process/stock-cutting-process.component";
import {StockCuttingService} from "@services/production/stockCutting.service";

@Component({
    selector: "app-stock-cutting-form",
    templateUrl: "./stock-cutting-form.component.html"
})
export class StockCuttingFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() selectedDetails: any = {};
    @Input() jobCardDetails: any = {};
    stockCutting: any = {};
    processNames: any = [];
    shiftOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    action: string = "create";
    selectedStockCuttingData: any = {};
    processName: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    sheetToSheetData: any = [];

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    constructor(
        private spinner: SpinnerService,
        private stockCuttingService: StockCuttingService,
        private toastService: ToastService,
        public activeModal: NgbActiveModal,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.getInitialData();
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

    setProcessName(event: any) {
        this.stockCutting.processName = event?.parameterName;
    }

    setSelectData(u: any) {
        this.selectedStockCuttingData = {
            stockCuttingDetails: [u],

            SKUName: this.stockCutting.SKUName,
            SKUDescription: this.stockCutting.SKUDescription,
            processName: this.stockCutting.processName,
            jobCard: this.stockCutting.jobCard,
            jobCardNo: this.stockCutting.jobCardNo,
            SKU: this.stockCutting.SKU,
            SKUNo: this.stockCutting.SKUNo,
            UOM: this.stockCutting.UOM,
            SKUBatchQty: this.stockCutting.SKUBatchQty
        };
        this.stockCutting.stockCuttingDetails = this.stockCutting?.stockCuttingDetails.map((x: any) => {
            x.select = false;
            if (x.reference == this.selectedStockCuttingData.stockCuttingDetails[0].reference) {
                x.select = true;
            }
            return x;
        });
    }

    changeU2Qty(ele: any) {
        let index = this.stockCutting.stockCuttingDetails.map((x: any) => x.reference).indexOf(ele?.reference);
        let DFW = ele?.widthUnit == "mm" ? 1000 : 1;
        let DFL = ele?.lengthUnit == "mm" ? 1000 : 1;
        this.stockCutting.stockCuttingDetails[index].MF = +((ele.width * ele.length) / (DFW * DFL)).toFixed(2);
        this.stockCutting.stockCuttingDetails[index].U2Qty = +(ele.U1Qty * ele.MF).toFixed(2);
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.stockCuttingService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.stockCutting = result.stockCutting;
            if (result?.stockCutting?.stockCuttingDetails?.length == 0 || !result?.stockCutting?.stockCuttingDetails) {
                this.toastService.warning(`Please define the Bill of Material of the SKU`);
                this.stockCutting = this.jobCardDetails;
            }
            this.stockCutting.stockCuttingDetails = this.stockCutting?.stockCuttingDetails?.map((x: any) => {
                x.select = false;
                return x;
            });
            this.stockCutting.processName = null;
            this.processNames = result.processNames;
            this.shiftOptions = result.shiftOptions;
            this.collection = this.stockCutting?.stockCuttingDetails?.length;

            this.spinner.hide();
        });
    }

    reset() {
        this.processName = "";
        this.selectedStockCuttingData = {};
        this.getInitialData();
    }

    openStockCuttingPPICOpeningDetailsModal() {
        if (this.stockCutting?.stockCuttingDetails?.every((x: any) => !x?.select) == true) {
            this.toastService.warning("MRP as per BOM At least One Row is Required");
            return;
        }

        const modalRef = this.modalService.open(StockCuttingProcessComponent, {
            centered: true,
            windowClass: "modelPage",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.stockCuttingDetails = this.stockCutting?.stockCuttingDetails;
        modalRef.componentInstance.selectedStockCuttingData = this.selectedStockCuttingData;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.stockCutting.stockCuttingDetails = this.stockCutting.stockCuttingDetails;
        } else {
            this.stockCutting.stockCuttingDetails = [...this.stockCutting.stockCuttingDetails].sort(
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
