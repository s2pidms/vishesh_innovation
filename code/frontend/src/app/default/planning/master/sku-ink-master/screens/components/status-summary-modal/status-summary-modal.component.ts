import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-status-summary-modal",
    templateUrl: "./status-summary-modal.component.html"
})
export class StatusSummaryModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() totalAmounts: any = {};

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    dismissModel() {
        this.activeModal.close(this.totalAmounts);
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
