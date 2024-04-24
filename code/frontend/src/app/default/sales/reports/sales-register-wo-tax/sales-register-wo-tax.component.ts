import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    MenuTitleService,
    SpinnerService,
    StorageService,
    ToastService,
    UtilityService
} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesInvoiceService} from "@services/dispatch";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SALES_REGISTER_PDF_DATA, SALES_REGISTER_REPORT_DATA} from "@mocks/export-data/sales/reports/salesRegisterWoTax";
import {salesRegisterWoTax} from "@mocks/models/sales/reports";

export interface Order {
    _id: string;
    po: string;
    poDate: string;
    supplierName: string;
    currency: string;
    poValue: string;
    status: string;
}

@Component({
    selector: "app-sales-register-wo-tax",
    templateUrl: "./sales-register-wo-tax.component.html"
})
export class SalesRegisterWOTaxComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesRegisterWoTax[] = [];
    company: any = {};
    originTableData: any = [];
    customerOptions: any = [];
    fromDate: any = "";
    toDate: any = "";
    customerId: string = "";
    totalInvoiceValue: number = 0;
    totalSalesInvoiceAmount: number = 0;
    totalSalesInvoiceTaxAmount: number = 0;
    lakh = 100000;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    subscription!: Subscription;
    superAdminId: any = "64a687b4e9143bffd820fb3d";
    user: any = "";
    constructor(
        private salesInvoiceService: SalesInvoiceService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);

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
    navigateTo(id: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/tax_invoice?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.fromDate = monthDates.fromDate;
        this.toDate = monthDates.toDate;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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

    reset() {
        this.getFiscalDate();
        this.customerId = "";
        this.getAll();
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
        this.subscription = this.salesInvoiceService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.totalInvoiceValue = +success?.totalAmounts?.totalInvoiceValue;
                this.totalSalesInvoiceAmount = +success?.totalAmounts?.totalSalesInvoiceAmount;
                this.totalSalesInvoiceTaxAmount = +success?.totalAmounts?.totalSalesInvoiceTaxAmount;
                this.customerOptions = success.customers;
                this.collection = success.count;
                this.company = success.company;
                this.menuTitleService.set({
                    subTitle: `Total Invoice Value:- ${this.totalInvoiceValue} Lakh`
                });
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_REGISTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_REGISTER_REPORT_DATA(data));
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
        this.salesInvoiceService.getById(id).subscribe(success => {
            this.tableData = success.rows;
            this.originTableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }

    update(id: any, item: any) {
        this.spinner.show();
        this.salesInvoiceService.update(id, item).subscribe(success => {
            this.toastService.success(success.message);
            this.getAll();
            this.spinner.hide();
        });
    }
}
