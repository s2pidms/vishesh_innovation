import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {AdvanceSalaryRequestService} from "@services/hr";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SALARY_ADVANCE_SUMMARY_REPORT_DATA, SALARY_ADVANCE_SUMMARY_PDF_DATA} from "@mocks/export-data/hr/transactions";
import {SalaryAdvanceSummary} from "@mocks/models/hr&Admin/transactions";

@Component({
    selector: "app-salary-adv-summary-list",
    templateUrl: "./salary-adv-summary-list.component.html"
})
export class SalaryAdvSummaryListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: SalaryAdvanceSummary[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private salaryAdvanceSummaryService: AdvanceSalaryRequestService,
        private router: Router,
        private exportExcelService: ExportExcelService,
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

    navigateTo(path: string, u: any, action: string) {
        if (
            (u.status == "Approved" && action == "edit") ||
            (u.status == "Approved" && action == "approve") ||
            (u.status == "Approved" && action == "reject") ||
            (u.status == "Rejected" && action == "edit") ||
            (u.status == "Rejected" && action == "approve") ||
            (u.status == "Rejected" && action == "reject")
        ) {
            return null;
        } else {
            this.router.navigate([path], {queryParams: {id: u?._id, action}});
            return;
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
        this.subscription = this.salaryAdvanceSummaryService.getAll(payload).subscribe(success => {
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
        this.exportExcelService.exportExcel(SALARY_ADVANCE_SUMMARY_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SALARY_ADVANCE_SUMMARY_PDF_DATA(data);
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
