import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@shared/directives";

@Component({
    selector: "app-quotation-terms-and-cond",
    templateUrl: "./quotation-terms-and-cond.component.html"
})
export class QuotationTermsAndCondComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() domesticAndExportsTermsList: any = [];
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
        this.activeModal.close(this.domesticAndExportsTermsList);
    }
}
