import {ActivatedRoute} from "@angular/router";
import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {GoodsIssueService} from "@services/stores";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {GOODS_ISSUE_PDF_DATA, GOODS_ISSUE_REPORT_DATA} from "@mocks/export-data/stores/reports";
import {GoodsIssueReport} from "@mocks/models/stores/reports";

@Component({
    selector: "app-gi-report",
    templateUrl: "./gi-report.component.html"
})
export class GiReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: GoodsIssueReport[] = [];
    company: any = {};
    originTableData: any = [];
    departmentOptions: any = [];
    location: any = [];
    locations: any = [];
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    constructor(
        private goodsIssueService: GoodsIssueService,
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
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.locations = [];
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
            toDate: this.toDate,
            deliveryLocation: this.locations
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.goodsIssueService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.location = success.location;
                this.originTableData = success.rows;
                this.collection = success.count;
                this.company = success.company;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = GOODS_ISSUE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(GOODS_ISSUE_REPORT_DATA(data));
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
