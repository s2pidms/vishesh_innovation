import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SalesOrderService} from "@services/sales";
import {ExportExcelService, ExportToPDFService, MenuTitleService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {BACK_ORDER_REPORT_SKU_PDF_DATA, BACK_ORDER_REPORT_SKU_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {backOrderSKU} from "@mocks/models/sales/reports";

@Component({
    selector: "app-back-order-sku",
    templateUrl: "./back-order-sku.component.html"
})
export class BackOrderSKUComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    tableData: backOrderSKU[] = [];
    skuId: string = "";
    fromDate: string = "";
    toDate: string = "";
    submitted = false;
    Data: any = [];
    sku: any = [];
    totalBackOrderValue: any = 0;
    subscription!: Subscription;
    action: string = "create";
    crore: any = "";

    constructor(
        private menuTitleService: MenuTitleService,
        private router: Router,
        private spinner: SpinnerService,
        private salesService: SalesOrderService,
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
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
    reset() {
        this.skuId = "";
        this.fromDate = "";
        this.toDate = "";
        this.crore = "Cr";
        this.tableData = [];
        this.getAll();
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            SKU: this.skuId,
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesService.getBackSalesOrderBySKUPath(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.totalBackOrderValue = +success?.totalAmounts?.totalTotalCost
                    ? (+success?.totalAmounts?.totalTotalCost).toFixed(2)
                    : 0;

                this.menuTitleService.set({
                    subTitle: `Back Order Bal Value (₹) :${this.totalBackOrderValue} ${this.crore}`
                });

                this.Data = success.totalBackOrderValue;
                this.sku = success.SKUMasters.map((x: any) => {
                    return {
                        SkuNo: x.SKUNo,
                        id: x._id,
                        SKUDescription: x.SKUDescription
                    };
                });
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = BACK_ORDER_REPORT_SKU_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(BACK_ORDER_REPORT_SKU_REPORT_DATA(data));
    }
}
