import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
@Component({
    selector: "app-fg-stock-details-modal",
    templateUrl: "./fg-stock-details-modal.component.html"
})
export class FGStockDetailsModalComponent implements OnInit {
    @Input() data: any = [];
    @Input() action: any = "";
    @Input() totalDispatchQty: any = 0;
    @Input() tBatchNo: any = "";
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        if (this.data && this.data.FGStockDetails.length == 1) {
            if (this.data.FGStockDetails[0].FGBatchDate) {
                this.tBatchNo = this.utilityService.getFormatDate(
                    this.data?.FGStockDetails[0]?.FGBatchDate,
                    "YYYY-MM-DD"
                );
            }
        }
    }
    dismissModel() {
        this.activeModal.close({
            FGStockDetails: this.data.FGStockDetails,
            tBatchNo: this.tBatchNo,
            totalDispatchQty: this.totalDispatchQty
        });
    }

    checkDispatchQty(ele: any, index: number) {
        let totalDispatchQty = this.data.FGStockDetails.map((m: any) => +m.dispatchQty).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        if (ele.dispatchQty > this.data.SOBalancedQty) {
            this.toastService.error("Dispatch Qty should not be greater then SO Balanced Qty");
            this.data.FGStockDetails[index].dispatchQty = 0;
        }

        if (ele.dispatchQty > ele.FGINQuantity) {
            this.toastService.error("Dispatch Qty should not be greater then FGIN Qty");
            this.data.FGStockDetails[index].dispatchQty = 0;
        }
        if (totalDispatchQty > this.data.SOBalancedQty) {
            this.data.FGStockDetails[index].dispatchQty = 0;
            this.data.FGStockDetails = [...this.data.FGStockDetails];
            this.toastService.error("Dispatch Qty. should not be greater than FGIN Qty.");
            return;
        }
        this.totalDispatchQty = totalDispatchQty;
    }
}
