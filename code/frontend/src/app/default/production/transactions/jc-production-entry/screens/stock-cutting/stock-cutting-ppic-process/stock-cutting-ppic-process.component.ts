import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LogEntryModalComponent} from "../log-entry-modal/log-entry-modal.component";
import {StockCuttingService} from "@services/production/stockCutting.service";
import {SpinnerService, ToastService} from "@core/services";
import {Router} from "@angular/router";

@Component({
    selector: "app-stock-cutting-ppic-process",
    templateUrl: "./stock-cutting-ppic-process.component.html",
    styles: [
        `
            .seperate-row {
                position: relative;
                .add-icon {
                    position: absolute;
                    right: -1rem;
                    top: -0.2rem;
                }
                .minus-icon {
                    position: absolute;
                    left: -1rem;
                    top: -0.2rem;
                }
                // .set-image {
                //     width: 100%;
                //     margin-top: -1rem !important;
                // }
            }
            .yellow-color {
                color: #ffc800 !important;
            }
            .green-color {
                color: #00ff00 !important;
            }
        `
    ]
})
export class StockCuttingPPICProcessComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() selectedStockCuttingData: any = {};
    @Input() shiftOptions: any = [];
    @Input() stockCuttingDetails: any = [];
    @Input() action: string = "create";
    oldPPICClosingStockActual: any = [];
    oldSelectedStockCuttingData: any = {};
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    constructor(
        private modalService: NgbModal,
        private stockCuttingService: StockCuttingService,
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private router: Router
    ) {}
    processNames: any = "slit";
    ngOnInit(): void {
        this.oldSelectedStockCuttingData = JSON.parse(JSON.stringify(this.selectedStockCuttingData));

        let MFArray = this.selectedStockCuttingData.stockCuttingDetails[0].PPICOpeningStock.map((obj: any) => obj?.MF);
        let maxValue = Math.max(...MFArray);

        let maxObject = this.selectedStockCuttingData.stockCuttingDetails[0].PPICOpeningStock.find(
            (obj: any) => obj?.MF == maxValue
        );

        this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockCalculated =
            this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockCalculated?.map((x: any) => {
                x.MRNNo = maxObject?.MRNNo;
                x.MRN = maxObject?.MRN;
                x.inventory = maxObject?.inventory;
                x.item = maxObject?.item ?? maxObject?.reference;
                x.itemCode = maxObject?.itemCode;
                x.itemName = maxObject?.itemName;
                x.itemDescription = maxObject?.itemDescription;
                x.U1 = maxObject?.U1;
                x.width = maxObject?.width;
                x.widthUnit = maxObject?.widthUnit;
                x.length = maxObject?.length;
                x.lengthUnit = maxObject?.lengthUnit;
                x.MF = +(+maxObject?.MF).toFixed(2);
                x.U2 = maxObject?.U2;
                x.U2Qty = +(
                    this.selectedStockCuttingData.stockCuttingDetails[0]?.U2TotalQty -
                    this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICToProductionGT[0]?.U2Qty
                ).toFixed(2);

                x.U1Qty = +(x?.U2Qty / x?.MF).toFixed(2);
                return x;
            });

        if (this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual[0].MRNNo == null) {
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual =
                this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockActual?.map((x: any) => {
                    x.MRNNo = maxObject?.MRNNo;
                    x.MRN = maxObject?.MRN;
                    x.inventory = maxObject?.inventory;
                    x.item = maxObject?.item ?? maxObject?.reference;
                    x.itemCode = maxObject?.itemCode;
                    x.itemName = maxObject?.itemName;
                    x.itemDescription = `${maxObject?.width} ${maxObject?.widthUnit} X ${maxObject?.length} ${maxObject?.lengthUnit}`;
                    x.U1 = maxObject?.U1;
                    x.width = maxObject?.width;
                    x.widthUnit = maxObject?.widthUnit;
                    x.length = maxObject?.length;
                    x.lengthUnit = maxObject?.lengthUnit;
                    x.MF = 0;
                    x.U2 = maxObject?.U2;
                    // x.U2Qty = +(
                    //     this.selectedStockCuttingData.stockCuttingDetails[0]?.U2TotalQty -
                    //     this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICToProductionGT[0]?.U2Qty
                    // ).toFixed(2);
                    // x.U1Qty = +(x?.U2Qty / maxObject?.MF).toFixed(2);
                    // x.U1Qty = Math.trunc(x.U1Qty);
                    x.U2Qty = 0;
                    x.U1Qty = 0;
                    return x;
                });
        } else {
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual =
                this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockActual;
        }

        this.selectedStockCuttingData.stockCuttingDetails[0].PPICToProductionGT =
            this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICToProductionGT?.map((x: any) => {
                x.MRNNo = maxObject?.MRNNo;
                x.MRN = maxObject?.MRN;
                x.inventory = maxObject?.inventory;

                return x;
            });

        this.oldPPICClosingStockActual = JSON.parse(
            JSON.stringify(this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual)
        );
    }

    deleteTableRow() {
        if (
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual.length > 1 &&
            !this.selectedStockCuttingData.stockCuttingDetails[0].isSaved
        ) {
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual.pop();
            this.calActualClosingStock();
        }
    }
    addTableRow() {
        if (!this.selectedStockCuttingData.stockCuttingDetails[0].isSaved) {
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual = [
                ...this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual,
                ...JSON.parse(JSON.stringify(this.oldPPICClosingStockActual))
            ];
        }
    }

    setActualClosingStock(ele: any, index: any) {
        // let index = this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockActual?.map((x: any) => x.reference).indexOf(
        //     ele?.reference
        // );
        let DFW = ele?.widthUnit == "mm" ? 1000 : 1;
        let DFL = ele?.lengthUnit == "mm" ? 1000 : 1;
        this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual[index].MF = +(
            +(ele.width * ele.length) /
            (DFW * DFL)
        ).toFixed(2);
        this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual[index].U2Qty = +(
            ele.U1Qty * ele.MF
        ).toFixed(2);

        this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual[
            index
        ].itemDescription = `${ele?.width} ${ele?.widthUnit} X ${ele?.length} ${ele?.lengthUnit}`;

        this.calActualClosingStock();
    }

    calActualClosingStock() {
        let totalRejectionQty = this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockActual?.reduce(
            (a: any, c: any) => +a + +c?.U2Qty,
            0
        ).toFixed(2);

        this.selectedStockCuttingData.stockCuttingDetails[0].rejectionQty = +(
            this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockCalculated[0]?.U2Qty -
            +totalRejectionQty
        ).toFixed(2);

        this.selectedStockCuttingData.stockCuttingDetails[0].rejectionPercent = +(
            (this.selectedStockCuttingData.stockCuttingDetails[0].rejectionQty /
                this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockCalculated[0]?.U2Qty) *
            100
        ).toFixed(2);
    }

    submit() {
        // this.calTotalFn();
        let totalRejectionQty = this.selectedStockCuttingData.stockCuttingDetails[0]?.PPICClosingStockActual?.reduce(
            (a: any, c: any) => +a + +c?.U2Qty,
            0
        ).toFixed(2);
        if (totalRejectionQty == 0) {
            this.toastService.warning("Fill PPIC Actual Closing Stock !!");
            return;
        }
        if (
            +this.selectedStockCuttingData.stockCuttingDetails[0].rejectionPercent > 100 ||
            +this.selectedStockCuttingData.stockCuttingDetails[0].rejectionPercent < 0
        ) {
            this.toastService.error("Recovery must be between 0 and 100% !!");
            return;
        }

        // if (+totalRejectionQty > +this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockCalculated[0]?.U2Qty) {
        //     this.toastService.error("Recovery must be between 0 and 100% !!");
        //     return;
        // }

        this.selectedStockCuttingData.stockCuttingDetails[0].isSaved = true;
        this.selectedStockCuttingData.stockCuttingDetails[0].isSelectItem = true;

        let stock = this.stockCuttingDetails.filter(
            (x: any) => x.reference != this.selectedStockCuttingData.stockCuttingDetails[0].reference
        );

        this.selectedStockCuttingData.stockCuttingDetails = [
            ...this.selectedStockCuttingData.stockCuttingDetails,
            ...stock
        ];

        if (this.selectedStockCuttingData) {
            this.spinner.show();
            this.stockCuttingService.createOrUpdate(this.selectedStockCuttingData).subscribe(success => {
                this.spinner.hide();
                this.toastService.success(success.message);
                this.activeModal.dismiss();
                this.modalService.dismissAll();
            });
        }
    }

    reset() {
        this.selectedStockCuttingData.stockCuttingDetails[0].rejectionQty =
            this.oldSelectedStockCuttingData.stockCuttingDetails[0].rejectionQty;
        this.selectedStockCuttingData.stockCuttingDetails[0].rejectionPercent =
            this.oldSelectedStockCuttingData.stockCuttingDetails[0].rejectionPercent;

        this.selectedStockCuttingData.stockCuttingDetails[0].PPICClosingStockActual = JSON.parse(
            JSON.stringify(this.oldPPICClosingStockActual)
        );

        // this.calActualClosingStock();
    }

    openLogEntryDetailsModal() {
        const modalRef = this.modalService.open(LogEntryModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.logEntry = this.selectedStockCuttingData.stockCuttingDetails[0]?.logEntry;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                // if (success) {
                // this.selectedStockCuttingData.stockCuttingDetails[0]?.logEntry = success?.selectedStockCuttingData.stockCuttingDetails[0]?.logEntry
                // }
            },
            (reason: any) => {}
        );
    }
}
