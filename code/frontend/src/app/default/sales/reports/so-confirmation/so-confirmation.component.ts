import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesOrderService} from "@services/sales";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {
    SALES_ORDER_CONFIRMATION_PDF_DATA,
    SALES_ORDER_CONFIRMATION_REPORT_DATA
} from "@mocks/export-data/sales/reports";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {salesOrderConformation} from "@mocks/models/sales/reports";

@Component({
    selector: "app-so-confirmation",
    templateUrl: "./so-confirmation.component.html"
})
export class SoConfirmationComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesOrderConformation[] = [];
    company: any = {};
    originTableData: any = [];
    customerOptions: any = [];
    fromDate: string = "";
    toDate: string = "";
    customerId: string = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    constructor(
        private salesOrderService: SalesOrderService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private exportToPDFService: ExportToPDFService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
        this.getAll();
        this.menuTitleData = this.storageService.get("menuTitle");
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
        this.fromDate = monthDates.fromDate;
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
        this.customerId = "";
        this.getAll();
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
            customer: this.customerId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesOrderService.getAllSOConfirmationReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.customerOptions = success.customers;
                this.collection = success.count;
                this.company = success.company;
                this.totalAmount = success?.totalAmounts?.SOTotalAmount ? success?.totalAmounts?.SOTotalAmount : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_ORDER_CONFIRMATION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_ORDER_CONFIRMATION_REPORT_DATA(data));
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

    getById(id: string) {
        this.spinner.show();
        this.salesOrderService.getById(id).subscribe(success => {
            this.tableData = success.rows;
            this.originTableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
}
