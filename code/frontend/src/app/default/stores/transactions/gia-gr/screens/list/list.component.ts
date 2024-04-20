import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {GoodsIssueService} from "@services/stores";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, MenuTitleService, SpinnerService} from "@core/services";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {
    GOODS_ISSUE_AGAINST_GR_PDF_DATA,
    GOODS_ISSUE_AGAINST_GR_REPORT_DATA
} from "@mocks/export-data/stores/transactions";
import {GoodsIssueAgainstGR} from "@mocks/models/stores/transactions";
@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: GoodsIssueAgainstGR[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private router: Router,
        private menuTitle: MenuTitleService,
        private goodIssue: GoodsIssueService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        if (
            (u.GIStatus == "Acknowledged" && action == "view") ||
            (u.GIStatus == "Discrepancy Reported" && action == "view") ||
            (u.GIStatus == "Discrepancy Resolved" && action == "view") ||
            (u.GIStatus == "Opened" && action == "view") ||
            (u.GIStatus == "Opened" && action == "edit") ||
            (u.GIStatus == "Opened" && action == "approve") ||
            (u.GIStatus == "Opened" && action == "reject") ||
            (u.GIStatus == "Awaiting Acknowledgement" && action == "view") ||
            (u.GIStatus == "Awaiting Acknowledgement" && action == "generate") ||
            (u.GIStatus == "Rejected" && action == "view") ||
            action == "create" ||
            action == "Acknowledged"
        ) {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
            return;
        } else {
            return null;
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
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.goodIssue.getAll(payload).subscribe(success => {
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

    update(data: any, action: string) {
        if (data?.GIStatus == "Approved") {
            this.spinner.show();
            this.goodIssue.update(data._id, {GIStatus: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
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
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = GOODS_ISSUE_AGAINST_GR_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(GOODS_ISSUE_AGAINST_GR_REPORT_DATA(data));
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
        this.getAll();
    }
}
