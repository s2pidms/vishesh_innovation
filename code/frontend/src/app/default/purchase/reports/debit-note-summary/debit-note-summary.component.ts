import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DebitNoteService} from "@services/purchase";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {DEBIT_NOTE_SUMMARY_PDF_DATA, DEBIT_NOTE_SUMMARY_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {DebitNoteSummary} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-debit-note-summary",
    templateUrl: "./debit-note-summary.component.html"
})
export class DebitNoteSummaryComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: DebitNoteSummary[] = [];
    company: any = {};
    statusOptionsArr: any = [];
    supplierOptions: any = [];
    fromDate: any = "";
    toDate: any = "";
    supplierId: string = "";
    statusOptions: string = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    constructor(
        private debitNoteService: DebitNoteService,
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

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();

        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
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
        this.supplierId = "";
        this.statusOptions = "";
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
            supplier: this.supplierId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.debitNoteService.getAllDNSummaryReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.statusOptionsArr = success.statusOptions;
                this.supplierOptions = success.suppliers;
                this.collection = success.count;
                this.company = success.company;
                this.totalAmount = success?.totalAmounts?.totalAmountDebited
                    ? success?.totalAmounts?.totalAmountDebited
                    : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = DEBIT_NOTE_SUMMARY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(DEBIT_NOTE_SUMMARY_REPORT_DATA(data));
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
