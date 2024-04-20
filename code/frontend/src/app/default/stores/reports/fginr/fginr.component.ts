import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FinishedGoodsInwardEntryService} from "@services/stores";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {FINISHED_GOODS_INWARD_PDF_DATA, FINISHED_GOODS_INWARD_REPORT_DATA} from "@mocks/export-data/stores/reports";
import {FGINReports} from "@mocks/models/stores/reports";

@Component({
    selector: "app-fginr",
    templateUrl: "./fginr.component.html"
})
export class FGINRComponent implements OnInit, OnDestroy {
    [x: string]: any;

    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: FGINReports[] = [];
    user: any = [];
    FGINDetails: any = [];
    userId: any = [];
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    constructor(
        private exportExcelService: ExportExcelService,
        private finishedGoodsService: FinishedGoodsInwardEntryService,
        private router: Router,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.getInitialData();
                break;
            case "PDF":
                this.getInitialData(true, "PDF");
                break;
            case "EXCEL":
                this.getInitialData(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                this.getInitialData();
                break;
            default:
                break;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getAllData(excel = false) {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            SKUName: this.userId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            excel: excel
        };
        this.finishedGoodsService.getAllReports(payload).subscribe(success => {
            if (excel) {
                this.excelDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.spinner.hide();
            }
        });
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });

        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getInitialData();
    }

    clearFilter() {
        this.userId = "";
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.tableData = [];
        this.getInitialData();
    }
    getInitialData(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            SKUName: this.userId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.finishedGoodsService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.user = this.tableData.map((x: any) => {
                    return {
                        label: `${x.SKUNo} - ${x.SKUName}`,
                        value: x.SKUId
                    };
                });
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = FINISHED_GOODS_INWARD_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(FINISHED_GOODS_INWARD_REPORT_DATA(data));
    }
}
