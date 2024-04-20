import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesOrderService} from "@services/sales";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {PURCHASE_VS_INVOICE_PDF_DATA, PURCHASE_VS_INVOICE_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {PurchaseVsInvoice} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-purchase-vs-invoice",
    templateUrl: "./purchase-vs-invoice.component.html"
})
export class PurchaseVsInvoiceComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "month";
    direction: number = -1;
    search: string = "";
    subscription!: Subscription;
    tableData: PurchaseVsInvoice[] = [];
    originTableData: PurchaseVsInvoice[] = [];
    customerOptions: any = [];
    customerId: string = "";
    fromDate: any = "";
    toDate: any = "";
    invoicesTotal: number = 0;
    purchaseTotal: number = 0;
    purchaseToInvoicePercentage: number = 0;
    constructor(
        private SalesOrderService: SalesOrderService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
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
                this.matches();
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
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.SalesOrderService.getAllPurchaseVsInvoiceReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success?.allAmounts);
            } else if (flag == "PDF") {
                this.pdfDownload(success.allAmounts);
            } else {
                this.tableData = success?.allAmounts;
                this.originTableData = success?.allAmounts;
                this.invoicesTotal = +success?.invoicesTotal ? +success?.invoicesTotal : 0;
                this.purchaseTotal = +success?.purchaseTotal ? +success?.purchaseTotal : 0;
                this.purchaseToInvoicePercentage = +success?.purchaseToInvoicePercentage
                    ? +success?.purchaseToInvoicePercentage
                    : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    matches() {
        this.tableData = this.originTableData.filter(
            (ele: any) =>
                (ele?.months && ele?.months?.toLowerCase().match(this.search.toLowerCase())) ||
                (ele?.ordersBooked && ele?.ordersBooked?.toLowerCase().match(this.search.toLowerCase())) ||
                (ele?.purchase && ele?.purchase?.toLowerCase().match(this.search.toLowerCase())) ||
                (ele?.invoices && ele?.invoices.toString().match(this.search.toLowerCase()))
        );
    }
    pdfDownload(data: any) {
        let output = PURCHASE_VS_INVOICE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PURCHASE_VS_INVOICE_REPORT_DATA(data));
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
            this.tableData = [...this.tableData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
