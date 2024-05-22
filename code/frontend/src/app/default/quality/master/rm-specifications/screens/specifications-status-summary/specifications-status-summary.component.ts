import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-specifications-status-summary",
    templateUrl: "./specifications-status-summary.component.html"
})
export class SpecificationsStatusSummaryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() heading: string = "";
    @Input() activeCount: string = "";
    @Input() specificationCreatedForCount: string = "";
    @Input() specificationPendingForCount: string = "";
    @Input() totalActive: any = 0;
    @Input() totalCreated: any = 0;
    @Input() totalPending: any = 0;

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    dismissModel() {
        this.activeModal.close();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
