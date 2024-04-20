import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-job-card-disp-modal",
    templateUrl: "./job-card-disp-modal.component.html"
})
export class JobCardDispModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    SOQty: any = 0;
    deliveryCount: number = 0;
    @Input() UOM: any = null;
    @Input() deliveryScheduleArr: any = [];
    btnDisable = false;
    minDate: Date = new Date();
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        // this.deliveryCount = this.deliveryCount;
        if (this.deliveryScheduleArr.length > 0) {
            this.deliveryScheduleArr = this.deliveryScheduleArr.map((x: any) => {
                x.UOM = this.UOM;
                return x;
            });
            this.deliveryCount = this.deliveryScheduleArr.length;

            let totalSOQty = this.deliveryScheduleArr
                .map((x: any) => x.quantity || 0)
                .reduce((a: any, c: any) => +a + +c, 0);
            this.SOQty = totalSOQty;
        }
    }
}
