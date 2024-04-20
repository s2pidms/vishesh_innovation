import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesInvoiceService} from "@services/dispatch";
import {
    SALES_REGISTER_WITH_LINE_DETAILS_PDF_DATA,
    SALES_REGISTER_WITH_LINE_DETAILS_REPORT_DATA
} from "@mocks/export-data/sales/reports";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {salesRegisterWithDetails} from "@mocks/models/sales/reports";

@Component({
    selector: "app-sales-register-with-details",
    templateUrl: "./sales-register-with-details.component.html"
})
export class SalesRegisterWithDetailsComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 11;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesRegisterWithDetails[] = [];
    company: any = {};
    originTableData: any = [];
    customerOptions: any = [];
    fromDate: any = "";
    toDate: any = "";
    customerId: string = "";
    totalTaxableValue: number = 0;
    totalTax: number = 0;
    totalInvoiceValue: number = 0;
    subscription!: Subscription;
    constructor(
        private salesInvoiceService: SalesInvoiceService,
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
        this.subscription = this.salesInvoiceService.getAllSILineDetails(payload).subscribe(success => {
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
                this.totalTaxableValue = success?.totalAmounts?.totalLineValue
                    ? (success?.totalAmounts?.totalLineValue).toFixed(2)
                    : 0;
                this.totalTax = success?.totalAmounts?.totalTaxAmount
                    ? (success?.totalAmounts?.totalTaxAmount).toFixed(2)
                    : 0;
                this.totalInvoiceValue = success?.totalAmounts?.totalAmountWithTax
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
        let outPut = SALES_REGISTER_WITH_LINE_DETAILS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title, "landscape");
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_REGISTER_WITH_LINE_DETAILS_REPORT_DATA(data));
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
}
