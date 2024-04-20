import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-po-schedule-modal",
    templateUrl: "./po-schedule-modal.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
            .form-control-sch {
                margin: 0;
                height: 2.4rem !important;
                width: 9rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }
        `
    ]
})
export class POScheduleModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() bookSalesOrder: any = "";
    @Input() SOType: any = "";
    @Input() POQty: any = null;
    @Input() deliveryCount: any = null;
    @Input() UOM: any = null;
    @Input() deliveryDate: any = null;
    @Input() dispatchDate: any = null;
    @Input() PPICDate: any = null;
    @Input() deliveryScheduleArr: any = [];
    @Input() regularType: any = {};
    btnDisable = false;
    minDate: Date = new Date();
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.deliveryCount = this.deliveryCount;
        if (this.deliveryScheduleArr) {
            this.deliveryScheduleArr = this.deliveryScheduleArr.map((x: any) => {
                x.UOM = this.UOM;
                return x;
            });
        }
        if (this.bookSalesOrder == "Book Sales Order" && this.SOType == "Regular") {
            this.deliveryScheduleArr = [];
            this.deliveryCount = 1;
            if (!!!this.regularType.dispatchSchedule) {
                if (this.dispatchDate) {
                    let obj = {
                        scheduleNo: 1,
                        quantity: this.POQty,
                        UOM: this.UOM,
                        dispatchDate: this.dispatchDate,
                        PPICDate: this.PPICDate
                    };
                    this.deliveryScheduleArr.push(obj);
                }
            } else if (this.regularType.dispatchSchedule) {
                this.deliveryScheduleArr = this.regularType.dispatchSchedule;
            }
        }
    }

    setTable() {
        if (+this.deliveryCount < 1) {
            this.toastService.warning("Please enter a number between 1 to 5");
            this.deliveryCount = null;
        } else if (+this.deliveryCount > 5) {
            this.toastService.warning("Please enter a number between 1 to 5");
            this.deliveryCount = null;
        }
        let dividedCount = Math.floor(this.POQty / this.deliveryCount);
        let remainder = this.POQty % this.deliveryCount;
        this.deliveryScheduleArr = [];
        for (let i = 0; i < this.deliveryCount; i++) {
            let quantity = dividedCount;
            if (i === this.deliveryCount - 1) {
                quantity += remainder;
            }

            if (this.dispatchDate) {
                let obj = {
                    scheduleNo: i + 1,
                    quantity: quantity,
                    UOM: this.UOM,
                    dispatchDate: this.dispatchDate,
                    PPICDate: this.PPICDate
                };
                this.deliveryScheduleArr.push(obj);
            }
            if (this.deliveryDate) {
                let obj = {
                    scheduleNo: i + 1,
                    quantity: quantity,
                    UOM: this.UOM,
                    deliveryDate: this.deliveryDate
                };
                this.deliveryScheduleArr.push(obj);
            }
        }
    }

    setQuantity(index: any) {
        let totalQty = this.deliveryScheduleArr.map((x: any) => x.quantity).reduce((a: any, c: any) => a + c, 0);
        if (totalQty > this.POQty) {
            if (this.bookSalesOrder == "Book Sales Order") {
                this.toastService.warning("total qty should not be greater than SO Qty");
            } else if (this.bookSalesOrder != "Book Sales Order") {
                this.toastService.warning("total qty should not be greater than PO Qty");
            }
            this.deliveryScheduleArr[index].quantity = 0;
            return;
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.deliverySchedule = this.deliveryScheduleArr;
        obj.deliveryCount = this.deliveryCount;
        this.activeModal.close(obj);
    }
}
