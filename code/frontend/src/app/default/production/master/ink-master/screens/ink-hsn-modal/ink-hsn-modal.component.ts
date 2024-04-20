import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-ink-hsn-modal",
    templateUrl: "./ink-hsn-modal.component.html"
})
export class InkHsnModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() HSNValue: string = "";
    @Input() HSNCode: any = "";
    @Input() editScreen: string = "";
    @Input() HSNCodeArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    HSNSelect: any = null;
    HSNSelectCode: any = null;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        if (this.HSNValue || this.HSNCode) {
            this.HSNSelect = this.HSNValue;
            this.HSNSelectCode = this.HSNCode;
            this.HSNCodeArr = this.HSNCodeArr.map((x: any) => {
                x.select = false;
                if (x.value == this.HSNCode) {
                    x.select = true;
                }
                return x;
            });
        }
        this.collection = this.HSNCodeArr.length;
    }

    setSelectData(u: any) {
        this.HSNSelect = u?._id;
        this.HSNSelectCode = u?.value;
    }

    dismissModel() {
        let obj: any = {};
        obj.HSNSelect = this.HSNSelect;
        obj.HSNSelectCode = this.HSNSelectCode;
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
            this.HSNCodeArr = this.HSNCodeArr;
        } else {
            this.HSNCodeArr = [...this.HSNCodeArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
