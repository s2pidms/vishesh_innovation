import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-ink-code-details-modal",
    templateUrl: "./ink-code-details-modal.component.html"
})
export class InkCodeDetailsModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() inkId: any = "";
    @Input() inkMixingDetails: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "jobCardNo";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.inkId) {
            this.inkMixingDetails = this.inkMixingDetails.map((x: any) => {
                x.select = false;
                if (x.ink == this.inkId) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.inkMixingDetails.length;
    }

    setSelectData(u: any) {
        this.inkId = u.ink;
    }

    dismissModel() {
        this.activeModal.close(this.inkId);
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.inkMixingDetails = this.inkMixingDetails;
        } else {
            this.inkMixingDetails = [...this.inkMixingDetails].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
