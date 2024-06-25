import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, UtilityService} from "@core/services";

@Component({
    selector: "app-jw-delivery-schedule",
    templateUrl: "./jw-delivery-schedule.component.html",
    styleUrls: ["./jw-delivery-schedule.component.scss"]
})
export class JwDeliveryScheduleComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() IOQty: any = null;
    @Input() deliveryCount: any = null;
    @Input() UOM: any = null;
    @Input() deliveryDate: any = null;
    @Input() deliveryScheduleArr: any = [];
    btnDisable = false;
    minDate: Date = new Date();
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.deliveryCount = this.deliveryCount;
        if (this.deliveryScheduleArr) {
            this.deliveryScheduleArr = this.deliveryScheduleArr.map((x: any) => {
                x.UOM = this.UOM;
                return x;
            });
        }
        // if (this.indentCategory == "Standard") {
        //     this.deliveryScheduleArr = [];
        //     this.deliveryCount = 1;
        //     let obj = {
        //         scheduleNo: 1,
        //         quantity: this.IOQty,
        //         UOM: this.UOM,
        //         deliveryDate: this.deliveryDate
        //     };
        //     this.deliveryScheduleArr.push(obj);
        // }
    }

    setTable() {
        if (+this.deliveryCount < 1) {
            this.toastService.warning("Please enter a number between 1 to 5");
            this.deliveryCount = null;
        } else if (+this.deliveryCount > 5) {
            this.toastService.warning("Please enter a number between 1 to 5");
            this.deliveryCount = null;
        }
        let dividedCount = Math.floor(this.IOQty / this.deliveryCount);
        let remainder = this.IOQty % this.deliveryCount;
        this.deliveryScheduleArr = [];
        for (let i = 0; i < this.deliveryCount; i++) {
            let quantity = dividedCount;
            if (i === this.deliveryCount - 1) {
                quantity += remainder;
            }

            if (this.deliveryDate) {
                let obj = {
                    scheduleNo: i + 1,
                    quantity: quantity,
                    UOM: this.UOM,
                    deliveryDate:
                        this.deliveryDate == "Refer Schedule"
                            ? this.utilityService.getTodayDate("YYYY-MM-DD")
                            : this.deliveryDate
                };
                this.deliveryScheduleArr.push(obj);
            }
        }
    }

    setQuantity(index: any) {
        let totalQty = this.deliveryScheduleArr.map((x: any) => x.quantity).reduce((a: any, c: any) => a + c, 0);
        if (totalQty > this.IOQty) {
            this.toastService.warning("total qty should not be greater than IO Qty");
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
