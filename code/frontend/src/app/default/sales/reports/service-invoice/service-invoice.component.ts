import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ServiceInvoiceService} from "@services/sales";
import {Subscription} from "rxjs";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SERVICE_INVOICE_PDF_DATA, SERVICE_INVOICE_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {serviceInvoice} from "@mocks/models/sales/reports";

@Component({
    selector: "app-service-invoice",
    templateUrl: "./service-invoice.component.html"
})
export class ServiceInvoiceComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 11;
    collection: number = 0;
    column: string = "serviceInvoiceNumber";
    direction: number = 1;
    search: string = "";
    customerId: string = "";
    tableData: serviceInvoice[] = [];
    customers: any = [];
    fromDate: any = "";
    toDate: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    totalAmount: number = 0;
    totalTaxAmount: number = 0;
    totalInvoiceAmtWithTax: number = 0;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private serviceInvoiceService: ServiceInvoiceService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
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
    navigateTo(u: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/service_invoice?id=${u?._id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();

        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
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

    update(u: any, action: string) {
        if (u?.status === "Approved") {
            this.spinner.show();
            this.serviceInvoiceService.update(u._id, {_id: u._id, status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
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
            customerId: this.customerId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.serviceInvoiceService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.customers = success.customers;
                this.totalAmount = success?.totalAmounts?.invoiceAmount
                    ? (success?.totalAmounts?.invoiceAmount).toFixed(2)
                    : 0;

                this.totalTaxAmount = success?.totalAmounts?.totalTaxAmount
                    ? (success?.totalAmounts?.totalTaxAmount).toFixed(2)
                    : 0;
                this.totalInvoiceAmtWithTax = success?.totalAmounts?.totalAmountWithTax
                    ? (success?.totalAmounts?.totalAmountWithTax).toFixed(2)
                    : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SERVICE_INVOICE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SERVICE_INVOICE_REPORT_DATA(data));
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
