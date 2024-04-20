import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {COST_SHEET_PDF_DATA, COST_SHEET_REPORT_DATA} from "@mocks/export-data/planning/reports/costSheet";
import {COST_SHEET_REPORT_NAME} from "@mocks/options.constant";
import {SKUCostSheetService} from "@services/planning";
import {
    COST_SHEET_BY_PRODUCT_CATEGORY_PDF_DATA,
    COST_SHEET_BY_PRODUCT_CATEGORY_REPORT_DATA
} from "@mocks/export-data/planning/reports";
import {CostSheet} from "@mocks/models/planning/reports";

@Component({
    selector: "app-cost-sheet",
    templateUrl: "./cost-sheet.component.html"
})
export class CostSheetComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: CostSheet[] = [];
    SKUList: any = [];
    categoryList: any = [];
    toDate: string = "";
    reportNameObj: any = COST_SHEET_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.costSheetBySKU;
    SKUId: any = "";
    SKUCategory: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    reportQMSName: any = null;
    subscription!: Subscription;

    constructor(
        private skuCostSheetService: SKUCostSheetService,
        private exportToPDFService: ExportToPDFService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.menuTitleData = this.storageService.get("menuTitle");
        this.getFiscalDate();
        this.getAll();
        this.tabType = this.storageService.get("tab");
        if (this.tabType == "MASTER") {
            this.tabType = "masters";
        } else if (this.tabType == "TRANSACTION") {
            this.tabType = "transactions";
        } else if (this.tabType == "REPORT") {
            this.tabType = "reports";
        }
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.toDate = monthDates.toDate;
    }

    navigateTo(id: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/sku_cost_sheet?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.costSheetBySKU;
        this.SKUId = "";
        this.SKUCategory = "";
        this.getAll();
    }
    setReportName() {
        if (this.reportName == this.reportNameObj.costSheetBySKU) {
            this.SKUCategory = "";
        } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
            this.SKUId = "";
        } else {
            this.SKUId = "";
            this.SKUCategory = "";
        }
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
            SKUId: this.SKUId,
            SKUCategory: this.SKUCategory
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.skuCostSheetService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                if (this.reportName == this.reportNameObj.costSheetBySKU) {
                    this.excelDownload(success.rows);
                } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
                    this.excelDownloadForProductsCategory(success.rows);
                }
            } else if (flag == "PDF") {
                if (this.reportName == this.reportNameObj.costSheetBySKU) {
                    this.pdfDownload(success.rows);
                } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
                    this.pdfDownloadForProductsCategory(success.rows);
                }
            } else {
                this.tableData = success.rows;
                this.SKUList = success.SKUList;
                this.collection = success.count;
                this.categoryList = success.productCategories;
                this.reportQMSName = success?.display?.displayText;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = COST_SHEET_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(COST_SHEET_REPORT_DATA(data));
    }
    pdfDownloadForProductsCategory(data: any) {
        let outPut = COST_SHEET_BY_PRODUCT_CATEGORY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownloadForProductsCategory(data: any) {
        this.exportExcelService.exportExcel(COST_SHEET_BY_PRODUCT_CATEGORY_REPORT_DATA(data));
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
