import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "../../../../../../shared/directives";
import {ContactMatrix} from "@interfaces/contactMatrix";

@Component({
    selector: "app-customer-input-checklist",
    templateUrl: "./customer-input-checklist.component.html"
})
export class CustomerInputChecklistComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() customerInputCheckList: any = {};
    @Input() checklistParticulars: any = [];
    @Input() action: string = "";

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
        this.activeModal.close(this.checklistParticulars);
    }
}
