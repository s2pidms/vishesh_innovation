import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    UPLOAD_DATA_FOR_CUSTOMER_INVENTORY,
    UPLOAD_DATA_FOR_ITEM_INVENTORY,
    UPLOAD_DATA_FOR_SUPPLIER_INVENTORY,
    UPLOAD_DATA_FOR_VALIDATE_INVENTORY
} from "@mocks/export-data/settings/masters";
import {ExportExcelService} from "@core/services";

@Component({
    selector: "app-custom-upload-details",
    templateUrl: "./custom-upload-details.component.html"
})
export class CustomUploadDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() title: any = "";
    @Input() type: any = "";
    @Input() inValidRecords: any = [];
    @Input() tableHead: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal, private exportExcelService: ExportExcelService) {}

    ngOnInit(): void {
        this.collection = this.inValidRecords.length;
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                // this.excelDownload();
                if (this.type == "Supplier") {
                    this.excelDownloadForSupplier();
                } else if (this.type == "Items") {
                    this.excelDownloadForItem();
                } else if (this.type == "Customer") {
                    this.excelDownloadForCustomer();
                } else if (this.type == "InventoryCorrection") {
                    this.excelDownloadForInventory();
                }
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    excelDownloadForInventory() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_VALIDATE_INVENTORY(this.inValidRecords));
    }
    excelDownloadForItem() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_ITEM_INVENTORY(this.inValidRecords));
    }
    excelDownloadForCustomer() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_CUSTOMER_INVENTORY(this.inValidRecords));
    }
    excelDownloadForSupplier() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SUPPLIER_INVENTORY(this.inValidRecords));
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.inValidRecords = this.inValidRecords;
        } else {
            this.inValidRecords = [...this.inValidRecords].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
