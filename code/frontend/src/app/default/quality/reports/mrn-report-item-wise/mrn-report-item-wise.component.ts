import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {UtilityService} from "@core/services";
import {MaterialReleaseNoteService} from "@services/quality";
import {MRN_REPORT_ITEM_WISE_PDF_DATA, MRN_REPORT_ITEM_WISE_REPORT_DATA} from "@mocks/export-data/quality/reports";
import {MRNItemWise} from "@mocks/models/quality/reports";

@Component({
    selector: "app-mrn-report-item-wise",
    templateUrl: "./mrn-report-item-wise.component.html"
})
export class MrnReportItemWiseComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: MRNItemWise[] = [];
    itemList: any = [];
    itemId: string = "";
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    subscription!: Subscription;
    constructor(
        private materialReleaseNote: MaterialReleaseNoteService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(id: any, action: string) {
        window.open(`${window.location.origin}/#/print/mrn?id=${id}&action=${action}`, "_blank");
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
        this.itemId = "";
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
            item: this.itemId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.materialReleaseNote.getAllItemWiseReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.itemList = success.itemList;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = MRN_REPORT_ITEM_WISE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(MRN_REPORT_ITEM_WISE_REPORT_DATA(data));
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
