import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {InventoryCorrectionService} from "@services/stores";
import {
    ITEM_WISE_INVENTORY_REPORT_DATA,
    ITEM_WISE_INVENTORY_REPORT_PDF_DATA
} from "@mocks/export-data/stores/reports/itemWiseInventory";
import {ItemWiseInventoryReport} from "@mocks/models/purchase/reports/itemWiseInventoryReport";

@Component({
    selector: "app-item-wise-inventory",
    templateUrl: "./item-wise-inventory.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class ItemWiseInventoryComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 11;
    collection: number = 0;
    column: string = "itemCode";
    direction: number = 1;
    search: string = "";
    tableData: ItemWiseInventoryReport[] | any = [];
    itemsOptions: any = [];
    itemId: string = "";
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    inventoryValue: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    subscription!: Subscription;
    menuItemId: any = "";
    menuItemName: any = "";
    constructor(
        private inventoryCorrectionService: InventoryCorrectionService,
        private exportToPDFService: ExportToPDFService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.menuItemId = this.appGlobalService.menuItemId;
       
        this.getAll();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.itemId = "";
        this.getAll();
    }

    setConversionOfUnit(item: any) {
        let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);
        if (this.tableData[index].UOM == item.secondaryUnit) {
            this.tableData[index].UOM = item.primaryUnit;
        } else {
            this.tableData[index].UOM = item.secondaryUnit;
        }

        let closedIRQtyQuantity =
            this.utilityService.setConversion({
                UOM: this.tableData[index].UOM,
                quantity: item.closedIRQty,
                primaryUnit: item.primaryUnit,
                secondaryUnit: item.secondaryUnit,
                primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            }) || 0;

        this.tableData[index].closedIRQty = +closedIRQtyQuantity;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.getAll();
                break;
            case "PDF":
                this.getAll(true, "PDF");
                break;
            case "EXCEL":
                this.getAll(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                this.getAll();
                break;
            default:
                break;
        }
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            itemId: this.itemId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            department: this.menuItemName
        };

        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.inventoryCorrectionService.getAllItemWiseReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success?.rows?.map((x: any, index: number) => {
                    x.itemLineNumber = index + 1;
                    return x;
                });
                this.tableData = success.rows;
                this.itemsOptions = success.itemsOptions;
                this.collection = success.count;
                this.inventoryValue = success?.totalAmounts?.value;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = ITEM_WISE_INVENTORY_REPORT_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(ITEM_WISE_INVENTORY_REPORT_DATA(data));
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getAll();
    }
}
