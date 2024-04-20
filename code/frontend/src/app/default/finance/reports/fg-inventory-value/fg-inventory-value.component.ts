import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {FinishedGoodsInwardEntryService} from "@services/stores";
import {FG_INVENTORY_VALUE_REPORT_DATA, FG_INVENTORY_VALUE_PDF_DATA} from "@mocks/export-data/finance/reports";

@Component({
    selector: "app-fg-inventory-value",
    templateUrl: "./fg-inventory-value.component.html",
    styleUrls: ["./fg-inventory-value.component.scss"]
})
export class FGInventoryValueComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    location: any = "";
    locations: any = [];
    totalLineValue: number = 0;
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    constructor(
        private finishedGoodsInwardEntryService: FinishedGoodsInwardEntryService,
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
            location: this.locations
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.finishedGoodsInwardEntryService
            .getAllFGINValueFinanceReports(payload)
            .subscribe(success => {
                if (flag == "EXCEL") {
                    this.excelDownload(success.rows);
                } else if (flag == "PDF") {
                    this.pdfDownload(success.rows);
                } else {
                    this.tableData = success.rows;
                    this.location = success.locations;
                    this.totalLineValue = +success?.totalAmounts?.totalLineValue;
                    this.collection = success.count;
                }
                this.spinner.hide();
            });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(FG_INVENTORY_VALUE_REPORT_DATA(data));
    }
    pdfDownload(data: any) {
        let output = FG_INVENTORY_VALUE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
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
