import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-details-of-customers-list",
    templateUrl: "./details-of-customers-list.component.html"
})
export class DetailsOfCustomersListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() customer: any = "";
    @Input() customerOptions: any = [];
    @Input() selectedCustomerDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.customer) {
            this.selectedCustomerDetails._id = this.customer;
            this.customerOptions = this.customerOptions.map((x: any) => {
                x.select = false;
                if (x._id == this.customer) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.customerOptions.length;
    }

    setSelectData(u: any) {
        this.selectedCustomerDetails = u;
        this.customerOptions = this.customerOptions.map((x: any) => {
            x.select = false;
            if (x._id == this.selectedCustomerDetails._id) {
                x.select = true;
            }
            return x;
        });
    }

    dismissModel() {
        let obj: any = {};
        obj.selectedCustomerDetails = this.selectedCustomerDetails;
        this.activeModal.close(obj);
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
            this.customerOptions = this.customerOptions;
        } else {
            this.customerOptions = [...this.customerOptions].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
