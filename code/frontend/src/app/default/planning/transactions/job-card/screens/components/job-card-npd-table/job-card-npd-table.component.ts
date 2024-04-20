import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {IDSKUDetailsOfJC} from "@mocks/models/planning/transactions";
import TABLE_HEADERS from "./tableHeaders";
import {ToastService} from "@core/services";

@Component({
    selector: "app-job-card-npd-table",
    templateUrl: "./job-card-npd-table.component.html",
    styles: [
        `
            .box {
                display: grid;
                place-items: center;
                div {
                    height: 1rem;
                    width: 1rem;
                }
            }
        `
    ]
})
export class JobCardNPDTableComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() DSKUDetailsOfJC: IDSKUDetailsOfJC[] = [];
    @Input() collection: any = 0;
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectDSKU: any = null;
    tableHead: any = TABLE_HEADERS;

    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.collection = this.DSKUDetailsOfJC.length;
    }

    dismissModel() {
        let obj: any = {};
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.DSKUDetailsOfJC = this.DSKUDetailsOfJC;
        } else {
            this.DSKUDetailsOfJC = [...this.DSKUDetailsOfJC].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    openDrawing(drawing: any) {
        if (drawing) {
            window.open(drawing, "_blank");
        } else {
            this.toastService.warning("Drawing File Not Present");
        }
    }

    setBatchQty(item: IDSKUDetailsOfJC) {
        if (+item.batchQty > +item.balQty) {
            this.toastService.warning("Batch Qty Should not greater than NPD Qty");
            item.batchQty = 0;
            this.selectDSKU = null;
            return;
        }

        if (typeof +item.batchQty == "number" && +item.batchQty > 0) {
            this.selectDSKU = item?.DSKUNo;
        } else {
            this.selectDSKU = null;
        }

        let totalBatchQuantity = this.DSKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.saveData.emit({data: totalBatchQuantity, key: "totalBatchQuantity"});
        this.collection = this.DSKUDetailsOfJC.length;
    }
}
