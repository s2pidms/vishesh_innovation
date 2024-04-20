import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
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
import {DSKU_COST_SHEET_REPORT_NAME} from "@mocks/options.constant";
import {CostSheetForDSKU} from "@mocks/models/business-leads/reports";
import {CostSheetForDSKUService} from "@services/business-leads";
import {
    DSKU_COST_SHEET_BY_PRODUCT_CATEGORY_PDF_DATA,
    DSKU_COST_SHEET_BY_PRODUCT_CATEGORY_REPORT_DATA,
    DSKU_COST_SHEET_PDF_DATA,
    DSKU_COST_SHEET_REPORT_DATA
} from "@mocks/export-data/business-leads/reports";

@Component({
    selector: "app-dsku-cost-sheet",
    templateUrl: "./dsku-cost-sheet.component.html"
})
export class DskuCostSheetComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: CostSheetForDSKU[] = [];
    DSKUList: any = [];
    categoryList: any = [];
    toDate: string = "";
    reportNameObj: any = DSKU_COST_SHEET_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.costSheetByDSKU;
    DSKUId: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    categoryName: any = "";
    reportQMSName: any = null;
    subscription!: Subscription;
    constructor(
        private costSheetForDSKUService: CostSheetForDSKUService,
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
            `${window.location.origin}/#/print/dsku_cost_sheet?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.costSheetByDSKU;
        this.DSKUId = "";
        this.categoryName = "";
        this.getAll();
    }
    setReportName() {
        if (this.reportName == this.reportNameObj.costSheetByDSKU) {
            this.categoryName = "";
        } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
            this.DSKUId = "";
        } else {
            this.DSKUId = "";
            this.categoryName = "";
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
            DSKUId: this.DSKUId,
            DSKUCategory: this.categoryName
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.costSheetForDSKUService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                if (this.reportName == this.reportNameObj.costSheetByDSKU) {
                    this.excelDownload(success.rows);
                } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
                    this.excelDownloadForProductsCategory(success.rows);
                }
            } else if (flag == "PDF") {
                if (this.reportName == this.reportNameObj.costSheetByDSKU) {
                    this.pdfDownload(success.rows);
                } else if (this.reportName == this.reportNameObj.costSheetByProductCategory) {
                    this.pdfDownloadForProductsCategory(success.rows);
                }
            } else {
                this.tableData = success.rows;
                this.DSKUList = success.DSKUList;
                this.categoryList = success.categoryList;
                this.collection = success.count;
                this.reportQMSName = success?.display?.displayText;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = DSKU_COST_SHEET_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(DSKU_COST_SHEET_REPORT_DATA(data));
    }
    pdfDownloadForProductsCategory(data: any) {
        let outPut = DSKU_COST_SHEET_BY_PRODUCT_CATEGORY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownloadForProductsCategory(data: any) {
        this.exportExcelService.exportExcel(DSKU_COST_SHEET_BY_PRODUCT_CATEGORY_REPORT_DATA(data));
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
