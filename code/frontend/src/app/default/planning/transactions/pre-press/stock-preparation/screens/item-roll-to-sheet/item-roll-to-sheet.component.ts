import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-item-roll-to-sheet",
    templateUrl: "./item-roll-to-sheet.component.html"
})
export class ItemRollToSheetComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() HSNCode: any = "";
    @Input() editScreen: string = "";
    @Input() childItemList: any = [];
    @Input() outputDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    HSNSelect: any = null;
    HSNSelectCode: any = null;
    selectedChildItem: any = {};
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.collection = this.childItemList.length;
    }

    setSelectData(u: any) {
        this.selectedChildItem = u;
        console.log("this.selectedChildItem", this.selectedChildItem);
    }

    dismissModel() {
        this.outputDetails = this.outputDetails.map((x: any) => {
            x.closedIRQty = 0;
            x.width = this.selectedChildItem.widthInMM;
            x.length = this.selectedChildItem.lengthInM;
            x.SQM = this.selectedChildItem.SQM;
            x.UOM = "SQM";
            x.roll = 0;
            x.item = this.selectedChildItem._id;
            x.referenceModel = "ChildItem";
            x.itemCode = this.selectedChildItem.itemCode;
            x.itemName = this.selectedChildItem.itemName;
            x.itemDescription = this.selectedChildItem.itemDescription;
            return x;
        });

        this.activeModal.close(this.outputDetails);
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
            this.childItemList = this.childItemList;
        } else {
            this.childItemList = [...this.childItemList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
