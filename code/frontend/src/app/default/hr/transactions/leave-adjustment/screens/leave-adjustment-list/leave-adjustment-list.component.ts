import {OnDestroy, ViewChildren} from "@angular/core";
import {QueryList} from "@angular/core";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {LeavesApplicationService} from "@services/hr";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {LEAVE_ADJUSTMENT_REPORT_DATA, LEAVE_ADJUSTMENT_PDF_DATA} from "@mocks/export-data/hr/transactions";
import {LeaveAdjustment} from "@mocks/models/hr&Admin/transactions";

@Component({
    selector: "app-leave-adjustment-list",
    templateUrl: "./leave-adjustment-list.component.html"
})
export class LeaveAdjustmentListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: LeaveAdjustment[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private leaveService: LeavesApplicationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    statusArr: any = {
        create: "Submitted",
        approve: "Approved",
        cancel: "Cancelled",
        edit: "Submitted"
    };
    navigateTo(path: string, u: any, action: string) {
        if (
            (u.status == "Approved" && action == "approve") ||
            (u.status == "Cancelled" && action == "edit") ||
            (u.status == "Cancelled" && action == "approve") ||
            (u.status == "Cancelled" && action == "cancel") ||
            (u.status == "Approved" && action == "cancel")
        ) {
            return null;
        }
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
        return;
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
            excel: excel,
            status: ["Submitted", "Recommend", "Availed", "Cancelled", "Rejected", "Deleted", "Adjusted"]
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.leaveService.getAll(payload).subscribe(success => {
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
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(LEAVE_ADJUSTMENT_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = LEAVE_ADJUSTMENT_PDF_DATA(data);
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
