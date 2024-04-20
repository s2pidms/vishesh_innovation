import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-custom-search-details-modal",
    templateUrl: "./custom-search-details-modal.component.html",
    styleUrls: ["./custom-search-details-modal.component.scss"]
})
export class CustomSearchDetailsModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() title: any = "";
    @Input() tableHead: any = [];
    @Input() _id: any = "";
    @Input() bodyList: any = [];
    @Input() selectedDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "jobCardNo";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this._id) {
            this.selectedDetails._id = this._id;
            this.bodyList = this.bodyList.map((x: any) => {
                x.select = false;

                if (x._id == this._id) {
                    x.select = true;
                }

                if (this.title == "SKU Name/Product Code" && x.productMasterNo == this._id) {
                    x.select = true;
                }

                return x;
            });
        }
        this.collection = this.bodyList.length;
    }

    setSelectData(u: any) {
        this.selectedDetails = u;
    }

    dismissModel() {
        let obj: any = {};
        obj.selectedDetails = this.selectedDetails;
        this.activeModal.close(obj);
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
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
            this.bodyList = this.bodyList;
        } else {
            this.bodyList = [...this.bodyList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
