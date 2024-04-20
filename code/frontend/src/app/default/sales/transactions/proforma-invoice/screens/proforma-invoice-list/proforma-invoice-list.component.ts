import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProformaInvoiceService} from "@services/sales";
import {ExportToPDFService, ToastService, UtilityService} from "@core/services";
import {ExportExcelService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {PROFORMA_INVOICE_PDF_DATA, PROFORMA_INVOICE_REPORT_DATA} from "@mocks/export-data/sales/transactions";
import {salesProformaInvoice} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-proforma-invoice-list",
    templateUrl: "./proforma-invoice-list.component.html"
})
export class ProformaInvoiceListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesProformaInvoice[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private spinner: SpinnerService,
        private proformaInvoiceService: ProformaInvoiceService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
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
        this.subscription = this.proformaInvoiceService.getAll(payload).subscribe(success => {
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
    update(u: any, action: string) {
        if (u?.PIStatus === "Approved") {
            this.spinner.show();
            this.proformaInvoiceService.update(u._id, {_id: u._id, PIStatus: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.router.navigate(["/default/sales/transactions/book_sales_order/form"], {
                    queryParams: {id: success?._id, action: "view"}
                });
                this.spinner.hide();
            });
        }
    }

    navigateToPrint(path: string, u: any, action: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}`, "_blank");
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.PIStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.PIStatus == "Created" && action == "Report Generated") ||
        //     (u.PIStatus == "Approved" && action == "edit") ||
        //     (u.PIStatus == "Approved" && action == "approve") ||
        //     (u.PIStatus == "Approved" && action == "reject")
        // ) {
        //     return null;
        // } else {
        //     this.router.navigate([path], {queryParams: {id: u?._id, action}});
        //     return;
        // }
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

    pdfDownload(data: any) {
        let outPut = PROFORMA_INVOICE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PROFORMA_INVOICE_REPORT_DATA(data));
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
