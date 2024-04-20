import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {PurchaseOrderService} from "@services/purchase";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {ITEM_CONSUMPTION_PDF_DATA, ITEM_CONSUMPTION_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {ItemConsumption} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-item-consumption",
    templateUrl: "./item-consumption.component.html"
})
export class ItemConsumptionComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "itemCode";
    direction: number = 1;
    search: string = "";
    year: number = 0;

    tableData: ItemConsumption[] = [];
    submitted = false;
    currentYear = new Date().getFullYear();
    fiscalYears: any = [];

    subscription!: Subscription;
    constructor(
        private purchaseService: PurchaseOrderService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.setFiscalYears();
        this.getAll();
    }

    setFiscalYears() {
        for (let i = 1; i <= 3; i++) {
            const startYear = this.currentYear - i;
            const endYear = startYear + 1;
            const fiscalYear = `FY ${String(startYear)}-${String(endYear)}`;
            this.fiscalYears.push(fiscalYear);
        }
    }

    navigateTo(path: string, id: any, action: any) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    reset() {
        this.year = 0;
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
            year: this.year
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.purchaseService.getAllItemConsumptionReports(payload).subscribe(success => {
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
        let output = ITEM_CONSUMPTION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(ITEM_CONSUMPTION_REPORT_DATA(data));
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
