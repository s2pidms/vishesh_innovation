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
        `
    ]
})
export class StockCuttingPPICProcessComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() selectedStockCuttingData: any = {};
    @Input() shiftOptions: any = [];
    @Input() action: string = "create";
    PPICClosingStockActual: any = [];
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
        console.log("selectedStockCuttingData", this.selectedStockCuttingData);

        let MFArray = this.selectedStockCuttingData.PPICOpeningStock.map((obj: any) => obj?.MF);
        let maxValue = Math.max(...MFArray);

        let maxObject = this.selectedStockCuttingData.PPICOpeningStock.find((obj: any) => obj?.MF == maxValue);

        console.log("maxObject", maxObject);

        this.selectedStockCuttingData.PPICClosingStockCalculated =
            this.selectedStockCuttingData?.PPICClosingStockCalculated?.map((x: any) => {
                x.MRNNo = maxObject?.MRNNo;
                x.MRN = maxObject?.MRN;
                x.item = maxObject?.item ?? maxObject?.reference;
                x.itemCode = maxObject?.itemCode;
                x.itemName = maxObject?.itemName;
                x.itemDescription = maxObject?.itemDescription;
                x.U1 = maxObject?.U1;
                x.width = maxObject?.width;
                x.widthUnit = maxObject?.widthUnit;
                x.length = maxObject?.length;
                x.lengthUnit = maxObject?.lengthUnit;
                x.MF = +maxObject?.MF.toFixed(2);
                x.U2 = maxObject?.U2;
                x.U2Qty = +(
                    this.selectedStockCuttingData?.U2TotalQty -
                    this.selectedStockCuttingData?.PPICToProductionGT[0]?.U2Qty
                ).toFixed(2);

                x.U1Qty = +(x?.U2Qty / x?.MF).toFixed(2);
                return x;
            });

        this.selectedStockCuttingData.PPICClosingStockActual =
            this.selectedStockCuttingData?.PPICClosingStockActual?.map((x: any) => {
                x.MRNNo = maxObject?.MRNNo;
                x.MRN = maxObject?.MRN;
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
                //     this.selectedStockCuttingData?.U2TotalQty -
                //     this.selectedStockCuttingData?.PPICToProductionGT[0]?.U2Qty
                // ).toFixed(2);
                // x.U1Qty = +(x?.U2Qty / maxObject?.MF).toFixed(2);
                // x.U1Qty = Math.trunc(x.U1Qty);
                x.U2Qty = 0;
                x.U1Qty = 0;
                return x;
            });

        this.PPICClosingStockActual = JSON.parse(JSON.stringify(this.selectedStockCuttingData.PPICClosingStockActual));
    }

    deleteTableRow() {
        if (this.selectedStockCuttingData.PPICClosingStockActual.length > 1) {
            this.selectedStockCuttingData.PPICClosingStockActual.pop();
            this.calActualClosingStock();
        }
    }
    addTableRow() {
        this.selectedStockCuttingData.PPICClosingStockActual = [
            ...this.selectedStockCuttingData.PPICClosingStockActual,
            ...JSON.parse(JSON.stringify(this.PPICClosingStockActual))
        ];
    }

    setActualClosingStock(ele: any, index: any) {
        // let index = this.selectedStockCuttingData?.PPICClosingStockActual?.map((x: any) => x.reference).indexOf(
        //     ele?.reference
        // );
        let DFW = ele?.widthUnit == "mm" ? 1000 : 1;
        let DFL = ele?.lengthUnit == "mm" ? 1000 : 1;
        this.selectedStockCuttingData.PPICClosingStockActual[index].MF = +(
            +(ele.width * ele.length) /
            (DFW * DFL)
        ).toFixed(2);
        this.selectedStockCuttingData.PPICClosingStockActual[index].U2Qty = +(ele.U1Qty * ele.MF).toFixed(2);

        this.selectedStockCuttingData.PPICClosingStockActual[
            index
        ].itemDescription = `${ele?.width} ${ele?.widthUnit} X ${ele?.length} ${ele?.lengthUnit}`;

        this.calActualClosingStock();
    }

    calActualClosingStock() {
        let totalRejectionQty = this.selectedStockCuttingData?.PPICClosingStockActual?.reduce(
            (a: any, c: any) => +a + +c?.U2Qty,
            0
        ).toFixed(2);

        this.selectedStockCuttingData.rejectionQty = +(
            this.selectedStockCuttingData.PPICClosingStockCalculated[0]?.U2Qty - +totalRejectionQty
        ).toFixed(2);

        this.selectedStockCuttingData.rejectionPercent = +(
            (this.selectedStockCuttingData.rejectionQty /
                this.selectedStockCuttingData.PPICClosingStockCalculated[0]?.U2Qty) *
            100
        ).toFixed(2);
    }

    totalAddition(itemDetails: any, decimalDigit: number) {
        return itemDetails.reduce((a: number, c: number) => +a + +c, 0).toFixed(+decimalDigit);
    }

    submit() {
        // this.calTotalFn();
        let totalRejectionQty = this.selectedStockCuttingData?.PPICClosingStockActual?.reduce(
            (a: any, c: any) => +a + +c?.U2Qty,
            0
        ).toFixed(2);
        if (totalRejectionQty == 0) {
            this.toastService.warning("Fill PPIC Actual Closing Stock !!");
            return;
        }
        if (
            +this.selectedStockCuttingData.rejectionPercent > 100 ||
            +this.selectedStockCuttingData.rejectionPercent < 0
        ) {
            this.toastService.error("Recovery must be between 0 and 100% !!");
            return;
        }

        // if (+totalRejectionQty > +this.selectedStockCuttingData.PPICClosingStockCalculated[0]?.U2Qty) {
        //     this.toastService.error("Recovery must be between 0 and 100% !!");
        //     return;
        // }

        console.log("this.selectedStockCuttingData", this.selectedStockCuttingData);

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
        this.selectedStockCuttingData.PPICClosingStockActual = JSON.parse(JSON.stringify(this.PPICClosingStockActual));
        this.selectedStockCuttingData.rejectionQty = 0;
        this.selectedStockCuttingData.rejectionPercent = 0;
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
        modalRef.componentInstance.logEntry = this.selectedStockCuttingData?.logEntry;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                // if (success) {
                // this.selectedStockCuttingData?.logEntry = success?.selectedStockCuttingData?.logEntry
                // }
            },
            (reason: any) => {}
        );
    }
}
