import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-details-of-supplier-list",
    templateUrl: "./details-of-supplier-list.component.html"
})
export class DetailsOfSupplierListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() supplier: any = "";
    @Input() supplierOptions: any = [];
    @Input() selectedSupplierDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.supplier) {
            this.selectedSupplierDetails._id = this.supplier;
            this.supplierOptions = this.supplierOptions.map((x: any) => {
                x.select = false;
                if (x._id == this.supplier) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.supplierOptions.length;
    }

    setSelectData(u: any) {
        this.selectedSupplierDetails = u;
        this.supplierOptions = this.supplierOptions.map((x: any) => {
            x.select = false;
            if (x._id == this.selectedSupplierDetails._id) {
                x.select = true;
            }
            return x;
        });
    }

    dismissModel() {
        let obj: any = {};
        obj.selectedSupplierDetails = this.selectedSupplierDetails;
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
            this.supplierOptions = this.supplierOptions;
        } else {
            this.supplierOptions = [...this.supplierOptions].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
