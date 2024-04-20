import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-npd-review-history",
    templateUrl: "./npd-review-history.component.html",
    styleUrls: ["./npd-review-history.component.scss"]
})
export class NpdReviewHistoryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() reviewHistory: NPDReview[] = [];
    @Input() labels: any = {};
    @Input() action: string = "";
    column: string = "reviewNo";
    direction: any = 1;
    search: string = "";
    page: number = 1;
    pageSize: number = 1;
    collection: number = 0;
    display: any = [];
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.collection = this.reviewHistory.length;
        this.reviewHistory = [...this.reviewHistory].sort((a: any, b: any) => {
            let x = typeof a[this.column] == "string" ? a[this.column].toLowerCase() : a[this.column];
            let y = typeof b[this.column] == "string" ? b[this.column].toLowerCase() : b[this.column];
            const res = x < y ? -1 : x > y ? 1 : 0;
            return this.direction === "asc" ? res : -res;
        });
        this.reviewHistory = this.reviewHistory.map((x: any) => {
            x.technicalReview = x.technicalReview.sort((a: any, b: any) => a.orderNo - b.orderNo);
            return x;
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
            // this.excelDownload(this.tableData)
            // break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
}
