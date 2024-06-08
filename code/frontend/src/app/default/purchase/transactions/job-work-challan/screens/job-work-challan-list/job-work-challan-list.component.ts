import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {JobWorkChallanService} from "@services/purchase";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {JOB_WORK_CHALLAN_PDF_DATA, JOB_WORK_CHALLAN_REPORT_DATA} from "@mocks/export-data/purchase/transactions";
import {IJobWorkerChallan} from "@mocks/models/purchase/transactions";

@Component({
    selector: "app-job-work-challan-list",
    templateUrl: "./job-work-challan-list.component.html"
})
export class JobWorkChallanListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "JWChallanNo";
    direction: number = -1;
    search: string = "";
    tableData: IJobWorkerChallan[] = [];
    statusArray: any = ["Report Generated", "Cancelled", "Rejected", "GRN Partial Created", "GRN Created", "Closed"];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private jobWorkChallanService: JobWorkChallanService,
        private router: Router,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        if (
            (u.status == "Awaiting Approval" && action == "view") ||
            (u.status == "Awaiting Approval" && action == "edit") ||
            (u.status == "Awaiting Approval" && action == "approve") ||
            (u.status == "Awaiting Approval" && action == "reject") ||
            (u.status == "Approved" && action == "view") ||
            (u.status == "Approved" && action == "generate") ||
            (u.status == "Rejected" && action == "view") ||
            action == "create"
        ) {
            this.router.navigate([path], {
                relativeTo: this.activatedRoute,
                queryParams: {id: u?._id, action}
            });
            return;
        } else {
            return null;
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

    navigateToPrint(path: string, u: any, action: string, preview: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}&preview=${preview}`, "_blank");
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            statusArray: this.statusArray,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.jobWorkChallanService.getAll(payload).subscribe(success => {
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
        if (u?.status === "Approved") {
            this.spinner.show();
            this.jobWorkChallanService.update(u._id, {status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(JOB_WORK_CHALLAN_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = JOB_WORK_CHALLAN_PDF_DATA(data);
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
