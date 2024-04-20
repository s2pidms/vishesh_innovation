import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CreditNoteService} from "@services/sales";
import {ExportToPDFService, ToastService, UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, SpinnerService} from "@core/services";
import {CREDIT_NOTE_PDF_DATA, CREDIT_NOTE_REPORT_DATA} from "@mocks/export-data/sales/transactions";
import {salesCreditNote} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-credit-list",
    templateUrl: "./credit-list.component.html"
})
export class CreditListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesCreditNote[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private creditNoteService: CreditNoteService,
        private router: Router,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
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
            status: u.CNStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // {url: , disabled: action, displayName, _id: subModuleId}: any
        // if (
        //     (u.CNStatus == "Awaiting Approval" && action == "view") ||
        //     (u.CNStatus == "Awaiting Approval" && action == "edit") ||
        //     (u.CNStatus == "Awaiting Approval" && action == "approve") ||
        //     (u.CNStatus == "Awaiting Approval" && action == "reject") ||
        //     (u.CNStatus == "Approved" && action == "view") ||
        //     (u.CNStatus == "Approved" && action == "generate") ||
        //     (u.CNStatus == "Rejected" && action == "view") ||
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
        this.subscription = this.creditNoteService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    update(u: any, action: string) {
        if (u?.CNStatus === "Approved") {
            u.CNStatus = action;

            this.spinner.show();
            this.creditNoteService.update(u._id, u).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }
    pdfDownload(data: any) {
        let outPut = CREDIT_NOTE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(CREDIT_NOTE_REPORT_DATA(data));
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
