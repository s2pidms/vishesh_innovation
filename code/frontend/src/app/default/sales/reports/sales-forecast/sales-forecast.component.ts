import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesForecastService} from "@services/sales";
import {LIST_DEFAULT_PERMISSION_ACTIONS, SALES_FORECAST_REPORT_NAME} from "@mocks/constant";
import {SALES_FORECAST_PDF_DATA, SALES_FORECAST_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {salesForecast} from "@mocks/models/sales/reports";

@Component({
    selector: "app-sales-forecast",
    templateUrl: "./sales-forecast.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class SalesForecastComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesForecast[] = [];
    company: any = {};
    customerOptions: any = [];
    SKUNameArr: any = [];
    toDate: string = "";
    reportNameObj: any = SALES_FORECAST_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.aodBalanceForecast;
    customerId: any = "";
    SKUId: any = "";
    FCQuantity: number = 0;
    FCValue: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    reportQMSName: any = null;
    subscription!: Subscription;
    constructor(
        private salesForecastService: SalesForecastService,
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

    navigateTo(u: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/so_confirmation?id=${u?._id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.aodBalanceForecast;
        this.customerId = "";
        this.SKUId = "";
        this.getAll();
    }
    setReportName() {
        if (this.reportName == this.reportNameObj.aodForecastByCustomer) {
            this.SKUId = "";
        } else if (this.reportName == this.reportNameObj.aodForecastBySKUName) {
            this.customerId = "";
        } else {
            this.SKUId = "";
            this.customerId = "";
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
            customerId: this.customerId,
            SKUId: this.SKUId,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesForecastService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.customerOptions = success.customerList;
                this.SKUNameArr = success.SKUList;
                this.collection = success.count;
                this.company = success.company;
                this.FCValue = success?.totalAmounts?.FCValue;
                this.FCQuantity = success?.totalAmounts?.FCQty;
                this.reportQMSName = success?.display?.displayText;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_FORECAST_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_FORECAST_REPORT_DATA(data));
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
