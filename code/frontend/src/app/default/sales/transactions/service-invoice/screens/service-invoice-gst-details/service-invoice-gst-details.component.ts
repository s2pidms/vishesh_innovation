import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-service-invoice-gst-details",
    templateUrl: "./service-invoice-gst-details.component.html"
})
export class ServiceInvoiceGSTDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() GSTDetailsArray: any = [];
    @Input() action: string = "";

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
        this.activeModal.close(this.GSTDetailsArray);
    }
}
