import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-gt-response-inventory",
    templateUrl: "./gt-response-inventory.component.html",
    styleUrls: ["./gt-response-inventory.component.scss"]
})
export class GTResponseInventoryComponent implements OnInit {
    @Input() data: any = {};
    @Input() action: any = "";
    @Input() totalGTResponseQty: any = 0;
    FIFODetails: any = {};
    page: number = 1;
    pageSize: number = 6;
    direction: number = 1;
    search: string = "";
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    calTotalGTRequestQty(FIFODetails: any) {
        if (FIFODetails?.length) {
            this.totalGTResponseQty = FIFODetails?.reduce((a: any, c: any) => +a + +c.GTQty, 0) || 0;
        }
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    ngOnInit(): void {
        this.FIFODetails = JSON.parse(JSON.stringify(this.data));
        this.calTotalGTRequestQty(this.FIFODetails?.FIFO);

        if (this.FIFODetails?.FIFO?.length > 0) {
            this.FIFODetails.FIFO = this.FIFODetails?.FIFO?.map((x: any, index: any) => {
                x.FIFONo = index + 1;
                return x;
            });
        }
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

    checkGTQty(ele: any) {
        let index: number = this.FIFODetails.FIFO.map((x: any) => x.FIFONo).indexOf(ele.FIFONo);
        console.log("index", index);

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
