import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {INVENTORY_REPORT_NAME, LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {INVENTORY_NAME_REPORT_DATA, INVENTORY_REPORT_NAME_PDF_DATA} from "@mocks/export-data/stores/reports";
import {InventoryCorrectionService} from "@services/stores";
import {InventoryReport} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-inventory-report",
    templateUrl: "./inventory-report.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class InventoryReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 11;
    collection: number = 0;
    column: string = "itemCode";
    direction: number = 1;
    search: string = "";
    tableData: InventoryReport[] | any = [];
    suppliersArr: any = [];
    locationArr: any = [];
    itemsListArr: any = [];
    toDate: string = "";
    reportNameObj: any = INVENTORY_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllInventoryReportName();
    reportName: any = this.reportNameObj.aodInventory;
    itemId: any = "";
    supplierId: any = "";
    location: any = "";
    inventoryValue: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    subscription!: Subscription;
    menuItemId: any = "";
    menuItemName: any = "";
    planningMenuItemId: any = "64a6c1e33339d4dc9d8141a4";
    purchaseMenuItemId: any = "64a6c1e33339d4dc9d8141a5";
    storesMenuItemId: any = "64a6c1e33339d4dc9d8141a6";
    productionMenuItemId: any = "64a6c1e33339d4dc9d8141a8";
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
        if (this.menuItemId == this.planningMenuItemId) {
            this.menuItemName = "Planning";
        } else if (this.menuItemId == this.purchaseMenuItemId) {
            this.menuItemName = "Stores";
        } else if (this.menuItemId == this.storesMenuItemId) {
            this.menuItemName = "Stores";
        } else if (this.menuItemId == this.productionMenuItemId) {
            this.menuItemName = "Production";
        }
        this.getFiscalDate();
        this.getAll();
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.toDate = monthDates.toDate;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.search = "";
        this.getFiscalDate();
        this.reportName = this.reportNameObj.aodInventory;
        this.supplierId = "";
        this.location = "";
        this.getAll();
    }
    setReportName() {
        if (this.reportName == this.reportNameObj.aodInventoryBySupplier) {
            this.location = "";
            this.itemId = "";
        } else if (this.reportName == this.reportNameObj.aodInventoryByLocation) {
            this.supplierId = "";
            this.itemId = "";
        } else if (this.reportName == this.reportNameObj.aodInventoryByItem) {
            this.supplierId = "";
            this.location = "";
        } else {
            this.location = "";
            this.supplierId = "";
        }
    }

    setConversionOfUnit(item: any) {
        let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);
        if (this.tableData[index].UOM == item.secondaryUnit) {
            this.tableData[index].UOM = item.primaryUnit;
            this.tableData[index].purchaseRatINR = item.stdCostUom1;
        } else {
            this.tableData[index].UOM = item.secondaryUnit;
            this.tableData[index].purchaseRatINR = item.stdCostUom2;
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
            supplierId: this.supplierId,
            location: this.location,
            itemId: this.itemId,
            toDate: this.toDate,
            department: this.menuItemName
        };

        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.inventoryCorrectionService
            .getAllLocationSupplierItemWiseReports(payload)
            .subscribe(success => {
                if (flag == "EXCEL") {
                    this.excelDownload(success.rows);
                } else if (flag == "PDF") {
                    this.pdfDownload(success.rows);
                } else {
                    this.tableData = success?.rows?.map((x: any, index: number) => {
                        x.itemLineNumber = index + 1;
                        return x;
                    });
                    this.suppliersArr = success.suppliersList;
                    this.itemsListArr = success.itemsList;
                    this.locationArr = success.locations;
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
        let outPut = INVENTORY_REPORT_NAME_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(INVENTORY_NAME_REPORT_DATA(data));
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
