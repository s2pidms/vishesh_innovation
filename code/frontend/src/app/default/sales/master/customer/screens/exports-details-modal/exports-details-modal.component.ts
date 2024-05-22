import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {AUTO_RENEWAL} from "@mocks/constant";

@Component({
    selector: "app-exports-details-modal",
    templateUrl: "./exports-details-modal.component.html"
})
export class ExportsDetailsModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() eximCode: any = "";
    printCodeOptions: any = AUTO_RENEWAL;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    dismissModel() {
        this.activeModal.close(this.eximCode);
    }
}
