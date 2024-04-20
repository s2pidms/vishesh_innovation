import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {FinishedGoodsInwardEntryService} from "@services/stores";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {
    FG_INWARD_ENTRY_SUMMARY_PDF_DATA,
    FG_INWARD_ENTRY_SUMMARY_REPORT_DATA
} from "@mocks/export-data/production/reports/fgInwardEntrySummary";
import {FGInwardEntrySummary} from "@mocks/models/production/reports";

@Component({
    selector: "app-fg-inward-entry-summary",
    templateUrl: "./fg-inward-entry-summary.component.html"
})
export class FgInwardEntrySummaryComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "FGINNo";
    direction: number = -1;
    search: string = "";
    tableData: FGInwardEntrySummary[] = [];
    company: any = {};
    customerOptions: any = [];
    customerId: string = "";
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentWeekDates().fromDate;
    toDate = this.utilityService.getCurrentWeekDates().toDate;

    constructor(
        private finishedGoodsInwardEntryService: FinishedGoodsInwardEntryService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
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
        this.fromDate;
        this.toDate;
        this.tableData = [];
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
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.finishedGoodsInwardEntryService
            .getAllFGINSummaryReports(payload)
            .subscribe(success => {
                if (flag == "EXCEL") {
                    this.excelDownload(success.rows);
                } else if (flag == "PDF") {
                    this.pdfDownload(success.rows);
                } else {
                    this.tableData = success.rows;
                    this.collection = success.count;
                }
                this.spinner.hide();
            });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = FG_INWARD_ENTRY_SUMMARY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(FG_INWARD_ENTRY_SUMMARY_REPORT_DATA(data));
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
