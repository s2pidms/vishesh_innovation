import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-product-category-modal",
    templateUrl: "./product-category-modal.component.html"
})
export class ProductCategoryModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() productCategory: any = "";
    @Input() productCategoryList: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedProductCategory: any = null;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.productCategory) {
            this.selectedProductCategory = this.productCategory;
            this.productCategoryList = this.productCategoryList.map((x: any) => {
                x.select = false;
                if (x.value == this.productCategory) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.productCategoryList.length;
    }

    setSelectData(u: any) {
        this.selectedProductCategory = u?.value;
    }

    dismissModel() {
        let obj: any = {};
        obj.selectedProductCategory = this.selectedProductCategory;
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
            this.productCategoryList = this.productCategoryList;
        } else {
            this.productCategoryList = [...this.productCategoryList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
