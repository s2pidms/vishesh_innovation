import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-bom-document-revision-history",
    templateUrl: "./bom-document-revision-history.component.html",
    styleUrls: ["./bom-document-revision-history.component.scss"]
})
export class BomDocumentRevisionHistoryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() oldDocumentDetails: any = [];
    @Input() action: string = "";
    column: string = "documentNo";
    direction: any = 1;
    search: string = "";
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.collection = this.oldDocumentDetails.length;
        this.oldDocumentDetails = this.oldDocumentDetails.reverse();
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":

            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
}
