import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportToPDFService, ToastService} from "@core/services";
import {InventoryCorrectionService} from "@services/stores";
import {ExportExcelService, UtilityService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {INVENTORY_CORRECTION_PDF_DATA, INVENTORY_CORRECTION_REPORT_DATA} from "@mocks/export-data/stores/transactions";
import {IInventoryCorrectionMasterData, InventoryCorrection} from "@mocks/models/stores/transactions";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    category: any = [];
    group: any = "";
    fromDate: any = [];
    toDate: string = "";
    isPreview = false;
    btnFlag: boolean = true;
    flag: number = -1;
    filterData: InventoryCorrection[] = [];
    itemGroup = null;
    itemCategory = null;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    masterData: IInventoryCorrectionMasterData = {
        autoIncrementNo: "",
        itemCategoriesOptions: [],
        itemSubCategoriesOptions: []
    };

    constructor(
        private exportExcelService: ExportExcelService,
        private InventoryCorrectionService: InventoryCorrectionService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.getAllData();
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    }

    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.category = [];
        this.group = "";
        this.filterData = [];
        this.isPreview = false;
        this.getAllData();
    }

    update() {
        this.spinner.show();
        this.InventoryCorrectionService.update(this.filterData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
        this.isPreview = false;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                // this.getAllFilterData();
                break;
                break;
            case "PDF":
                this.getAllFilterData(true, "PDF");
                break;
            case "EXCEL":
                this.getAllFilterData(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                // this.getAllFilterData();
                break;
            default:
                break;
        }
    }
    pdfDownload(data: any) {
        let outPut = INVENTORY_CORRECTION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(INVENTORY_CORRECTION_REPORT_DATA(data));
    }
    // sort
    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.filterData = this.filterData;
        } else {
            this.filterData = [...this.filterData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getAllData(excel = false) {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        this.InventoryCorrectionService.getAllMasterData(payload).subscribe(success => {
            this.masterData = success;
            this.collection = success.count;
            this.spinner.hide();
        });
    }

    getAllFilterData(excel = false, flag = "") {
        let payload = {
            itemGroup: this.category,
            itemCategory: this.group
            // page: this.page,
            // pageSize: this.pageSize,
            // search: this.search,
            // column: this.column,
            // direction: this.direction
        };
        this.InventoryCorrectionService.getAllMasterFilterData(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.filterData = success.rows;
            }
            this.collection = this.filterData.length;
        });
    }

    setUpdatedQty(_id: any, element: any) {
        let index: number = this.filterData.map((x: any) => x._id).indexOf(_id);
        (this.filterData[index].closedIRQty = +element.openIRQty + +element.updatedQty).toFixed(2);
    }

    Preview() {
        this.search = "";
        this.filterData = this.filterData.filter((x: any) => x.updatedQty && x.updatedQty != 0);
        if (this.filterData.length == 0) {
            this.toastService.warning(`At least one Inventory Correction required !`);
        } else {
            this.isPreview = true;
        }
    }
}
