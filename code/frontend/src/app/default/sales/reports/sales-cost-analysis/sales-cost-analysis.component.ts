import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesOrderService} from "@services/sales";
import {SALES_COST_ANALYSIS_PDF_DATA, SALES_COST_ANALYSIS_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {SalesCostAnalysis} from "@mocks/models/sales/reports";

@Component({
    selector: "app-sales-cost-analysis",
    templateUrl: "./sales-cost-analysis.component.html"
})
export class SalesCostAnalysisComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "SKUName";
    direction: number = 1;
    search: string = "";
    tableData: SalesCostAnalysis[] = [];
    SKUOptions: any = [];
    customerOptions: any = [];
    customerId: string = "";
    SKUId: string = "";
    fromDate: any = "";
    toDate: any = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    constructor(
        private salesOrderService: SalesOrderService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private spinner: SpinnerService,
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
        this.SKUId = "";
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
            customerId: this.customerId,
            SKUId: this.SKUId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesOrderService.getAllSOCostAnalysisReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.SKUOptions = success.SKU;
                this.customerOptions = success.customers;
                this.collection = success.count;
                this.totalAmount = success?.totalAmounts?.totalTotalCost ? success?.totalAmounts?.totalTotalCost : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_COST_ANALYSIS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_COST_ANALYSIS_REPORT_DATA(data));
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
