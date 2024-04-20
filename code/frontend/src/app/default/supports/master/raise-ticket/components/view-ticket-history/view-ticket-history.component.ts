import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
    selector: "app-view-ticket-history",
    templateUrl: "./view-ticket-history.component.html"
})
export class ViewTicketHistoryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "issueNumber";
    direction: number = -1;
    search: string = "";
    @Input() historyData: any = [];

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.collection = this.historyData.length;
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.historyData = this.historyData;
        } else {
            this.historyData = [...this.historyData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
