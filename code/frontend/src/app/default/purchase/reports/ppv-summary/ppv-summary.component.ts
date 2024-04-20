import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {PurchaseOrderService} from "@services/purchase";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {PPV_SUMMARY_PDF_DATA, PPV_SUMMARY_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {PPVSummary} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-ppv-summary",
    templateUrl: "./ppv-summary.component.html"
})
export class PPVSummaryComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: PPVSummary[] = [];
    submitted = false;
    supplierOptions: any = [];
    itemCategoryOptions: any = [];
    itemCategory: any = [];
    supplierId: string = "";
    fromDate: any = "";
    toDate: any = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    constructor(
        private purchaseService: PurchaseOrderService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
        this.getAll();
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();

        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
    }

    navigateTo(path: string, id: any, action: any) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    reset() {
        this.getFiscalDate();
        this.itemCategory = "";
        this.supplierId = "";
        this.getAll();
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
    trackByFn(index: number, item: any) {
        return item?._id;
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
            itemCategory: this.itemCategory,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.purchaseService.getAllPPVSummaryReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.supplierOptions = success.suppliers;
                this.itemCategoryOptions = success.itemCategoryOptions;
                this.collection = success.count;
                this.totalAmount = success?.totalAmounts?.totalPPV ? success?.totalAmounts?.totalPPV : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = PPV_SUMMARY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        data = data.map((data: any) => {
            data.diff = data.standardRate - data.purchaseRate;
            data.totalSpend = data?.POQty * data?.purchaseRate;
            data.PPV = data?.POQty * (data?.standardRate - data?.purchaseRate);
            return data;
        });
        this.exportExcelService.exportExcel(PPV_SUMMARY_REPORT_DATA(data));
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
