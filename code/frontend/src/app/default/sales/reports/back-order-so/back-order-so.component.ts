import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SalesOrderService} from "@services/sales";
import {ExportExcelService, ExportToPDFService, MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {BACK_ORDER_REPORT_BY_SO_PDF_DATA, BACK_ORDER_REPORT_BY_SO_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {backOrderSO} from "@mocks/models/sales/reports";
@Component({
    selector: "app-back-order-so",
    templateUrl: "./back-order-so.component.html"
})
export class BackOrderSOComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    tableData: backOrderSO[] = [];
    originTableData: any = [];
    sku: any = [];
    skuId: string = "";
    totalBackOrderValue: any = 0;
    fromDate: any = "";
    toDate: any = "";
    crore = "";
    subscription!: Subscription;

    constructor(
        private SalesService: SalesOrderService,
        private menuTitleService: MenuTitleService,
        private router: Router,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
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

    reset() {
        this.skuId = "";
        this.fromDate = "";
        this.toDate = "";
        this.crore = "Cr";
        this.tableData = [];
        this.getFiscalDate();
        this.getAll();
    }
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.tableData = this.tableData;
        } else {
            this.tableData = [...this.tableData].sort(
                (a: any | BackOrderSOComponent, b: any | BackOrderSOComponent) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
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

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            SKU: this.skuId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.SalesService.getBackSalesOrderBySO(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.collection = success.count;
                this.tableData = success.rows;
                this.totalBackOrderValue = +success?.totalAmounts?.SOTotalAmount
                    ? +success?.totalAmounts?.SOTotalAmount
                    : 0;

                this.menuTitleService.set({
                    subTitle: `Back Order Bal Value (₹) :${this.totalBackOrderValue} ${this.crore}`
                });

                this.sku = success.SKUMasters.map((x: any) => {
                    return {
                        skuNum: x.SKUNo,
                        _id: x._id,
                        SKUDescription: x.SKUDescription,
                        SKUName: x.SKUName
                    };
                });
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    setDescription(ev: any) {}

    pdfDownload(data: any) {
        let outPut = BACK_ORDER_REPORT_BY_SO_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(BACK_ORDER_REPORT_BY_SO_REPORT_DATA(data));
    }
}
