import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ToastService, SpinnerService, ExportToPDFService, UtilityService} from "@core/services";
import {SALE_DEBIT_NOTE_PDF_DATA, SALE_DEBIT_NOTE_REPORT_DATA} from "@mocks/export-data/sales/transactions";
import {SaleDebitNote} from "@mocks/models/sales/transactions";
import {SaleDebitNoteService} from "@services/sales";

@Component({
    selector: "app-sales-debit-note-list",
    templateUrl: "./sales-debit-note-list.component.html"
})
export class SalesDebitNoteListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "DNNumber";
    direction: number = -1;
    search: string = "";
    tableData: SaleDebitNote[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private saleDebitNoteService: SaleDebitNoteService,
        private activatedRoute: ActivatedRoute,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.DNStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.DNStatus == "Awaiting Approval" && action == "view") ||
        //     (u.DNStatus == "Awaiting Approval" && action == "edit") ||
        //     (u.DNStatus == "Awaiting Approval" && action == "approve") ||
        //     (u.DNStatus == "Awaiting Approval" && action == "reject") ||
        //     (u.DNStatus == "Approved" && action == "view") ||
        //     (u.DNStatus == "Approved" && action == "generate") ||
        //     (u.DNStatus == "Rejected" && action == "view") ||
        //     action == "create"
        // ) {
        //     this.router.navigate([path], {queryParams: {id: u?._id, action}});
        //     return;
        // } else {
        //     return null;
        // }
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
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.saleDebitNoteService.getAll(payload).subscribe(success => {
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    update(u: any, action: string) {
        if (u?.DNStatus === "Approved") {
            u.DNStatus = action;

            this.spinner.show();
            this.saleDebitNoteService.update(u._id, u).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALE_DEBIT_NOTE_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SALE_DEBIT_NOTE_PDF_DATA(data);
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
