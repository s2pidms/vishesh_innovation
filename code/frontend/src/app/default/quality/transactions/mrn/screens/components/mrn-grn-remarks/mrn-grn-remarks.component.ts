import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-mrn-grn-remarks",
    templateUrl: "./mrn-grn-remarks.component.html",
    styleUrls: ["./mrn-grn-remarks.component.scss"]
})
export class MrnGrnRemarksComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";

    @Input() MRNRemarks: any = "";
    @Input() GRNRemarks: any = "";

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    saveData(value: any) {
        if (value.key == "MRNRemarks") {
            this.MRNRemarks = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "GRNRemarks") {
            this.GRNRemarks = value.data;
            this.active = this.active - 1;
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.GRNRemarks = this.GRNRemarks;
        obj.MRNRemarks = this.MRNRemarks;
        this.activeModal.close(obj);
    }
}
