import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {InvoicePaymentService} from "@services/accounts/invoicePayment.service";
import {InvoiceAging} from "@mocks/models/accounts/reports";
import {INVOICE_AGING_PDF_DATA, INVOICE_AGING_REPORT_DATA} from "@mocks/export-data/accounts/reports/invoiceAging";

@Component({
    selector: "app-invoice-aging",
    templateUrl: "./invoice-aging.component.html"
})
export class InvoiceAgingComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 11;
    collection: number = 0;
    column: string = "serviceInvoiceDate";
    direction: number = 1;
    search: string = "";
    tableData: InvoiceAging[] = [];
    customerOptions: any = [];
    totalTaxAmount: number = 0;
    totalAmountWithTax: number = 0;
    totalValue: number = 0;
    fromDate: any = "";
    toDate: any = "";
    customerId: string = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private invoicePaymentService: InvoicePaymentService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
        this.getAll();
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
        this.subscription = this.invoicePaymentService.getAllInvoiceAgingReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.totalValue = +success?.totalAmounts?.totalValue
                    ? +(success?.totalAmounts?.totalValue).toFixed(2)
                    : 0;
                this.totalTaxAmount = +success?.totalAmounts?.totalTaxAmount
                    ? +(success?.totalAmounts?.totalTaxAmount).toFixed(2)
                    : 0;
                this.totalAmountWithTax = +success?.totalAmounts?.totalAmountWithTax
                    ? +(success?.totalAmounts?.totalAmountWithTax).toFixed(2)
                    : 0;
                this.tableData = success.rows;
                this.customerOptions = success.customersList;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = INVOICE_AGING_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(INVOICE_AGING_REPORT_DATA(data));
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
