import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {JobCardCreationService} from "@services/planning";
import TABLE_HEADERS from "./tableHeaders";
import {JOB_CARD_PDF_DATA, JOB_CARD_REPORT_DATA} from "@mocks/export-data/sales/transactions/jobCardCreation";
import {JobCardCreation} from "@mocks/models/planning/transactions";

@Component({
    selector: "app-job-card-list",
    templateUrl: "./job-card-list.component.html"
})
export class JobCardListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "jobCardNo";
    direction: number = -1;
    search: string = "";
    tableData: JobCardCreation[] = [];
    subscription!: Subscription;
    tableHead: any = TABLE_HEADERS;
    businessLeadsMenuItemId: string = "64a6c1e33339d4dc9d8141a2";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    menuItemId: string = "";
    orderType: any = "";
    constructor(
        private exportExcelService: ExportExcelService,
        private jobCardCreationService: JobCardCreationService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.status,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.status == "Awaiting Approval" && action == "Report Generated") ||
        //     (["Approved", "Report Generated", "Cancelled"].includes(u.status) && action == "edit") ||
        //     (["Approved", "Report Generated", "Cancelled"].includes(u.status) && action == "approve") ||
        //     (["Approved", "Report Generated", "Cancelled"].includes(u.status) && action == "cancel")
        // ) {
        //     return null;
        // } else {
        //     this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
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

    navigateToPrint(path: string, u: any, action: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}`, "_blank");
    }

    update(u: any, action: string) {
        if (u?.status === "Approved") {
            this.spinner.show();
            this.jobCardCreationService.update(u._id, {_id: u._id, status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }

    getAll(excel = false, flag = "") {
        if (this.menuItemId == this.businessLeadsMenuItemId) {
            this.orderType = "NPD";
        } 
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            orderType: this.orderType,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.jobCardCreationService.getAll(payload).subscribe(success => {
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
    pdfDownload(data: any) {
        let outPut = JOB_CARD_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(JOB_CARD_REPORT_DATA(data));
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
