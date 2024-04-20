import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-gt-request-remarks-modal",
    templateUrl: "./gt-request-remarks-modal.component.html",
})
export class GTRequestRemarksModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() remarksDetails: any = {};
    @Input() billFromLocationOptions: any = [];
    remarksObj: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.remarksObj = JSON.parse(JSON.stringify(this.remarksDetails));
    }

    reset() {
        this.remarksObj = JSON.parse(JSON.stringify(this.remarksDetails));
    }

    dismissModel() {
        this.activeModal.close(this.remarksObj);
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
