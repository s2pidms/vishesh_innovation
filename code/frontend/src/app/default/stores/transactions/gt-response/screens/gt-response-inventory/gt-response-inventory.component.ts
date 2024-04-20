import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-gt-response-inventory",
    templateUrl: "./gt-response-inventory.component.html"
})
export class GTResponseInventoryComponent implements OnInit {
    @Input() data: any = {};
    @Input() action: any = "";
    @Input() totalGTResponseQty: any = 0;
    FIFODetails: any = {};
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    calTotalGTRequestQty(FIFODetails: any) {
        if (FIFODetails?.length) {
            this.totalGTResponseQty = FIFODetails?.reduce((a: any, c: any) => +a + +c.GTQty, 0) || 0;
        }
    }

    ngOnInit(): void {
        this.FIFODetails = JSON.parse(JSON.stringify(this.data));

        this.calTotalGTRequestQty(this.FIFODetails?.FIFO);
    }
    dismissModel() {
        this.activeModal.close({
            FIFO: this.FIFODetails?.FIFO,
            totalGTResponseQty: this.totalGTResponseQty
        });
    }

    reset() {
        this.FIFODetails = JSON.parse(JSON.stringify(this.data));
        this.calTotalGTRequestQty(this.FIFODetails?.FIFO);
    }

    checkGTQty(ele: any, index: number) {
        let totalGTResponseQty = this.FIFODetails?.FIFO?.reduce((a: any, c: any) => +a + +c.GTQty, 0);

        if (ele.GTQty > this.FIFODetails.GTRQty) {
            this.toastService.error("GT Qty should not be greater then GTR Qty");
            this.FIFODetails.FIFO[index].GTQty = 0;
        }
        if (ele.GTQty > ele.IRQty) {
            this.toastService.error("GT Qty should not be greater then IR Qty");
            this.FIFODetails.FIFO[index].GTQty = 0;
        }

        if (totalGTResponseQty > this.FIFODetails.GTRQty) {
            this.FIFODetails.FIFO[index].GTQty = 0;
            this.FIFODetails.FIFO = [...this.FIFODetails.FIFO];
            this.toastService.error("GT Qty. should not be greater than GTR Qty.");
        }
        totalGTResponseQty = this.FIFODetails?.FIFO?.reduce((a: any, c: any) => +a + +c.GTQty, 0);
        this.totalGTResponseQty = totalGTResponseQty;
    }
}
