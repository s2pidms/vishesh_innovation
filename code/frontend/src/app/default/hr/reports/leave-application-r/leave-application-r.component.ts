import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LeavesApplicationService} from "@services/hr";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {LEAVE_APPLICATION_PDF_DATA, LEAVE_APPLICATION_REPORT_DATA} from "@mocks/export-data/hr/reports";
import {leaveApplication} from "@mocks/models/hr&Admin/reports";

@Component({
    selector: "app-leave-application-r",
    templateUrl: "./leave-application-r.component.html"
})
export class LeaveApplicationRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "empCode";
    direction: number = -1;
    search: string = "";
    tableData: leaveApplication[] | any = [];
    user: any = [];
    date = new Date();
    originTableData: any = [];
    employee: any = [];
    userId: any = [];
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    subscription!: Subscription;
    constructor(
        private leavesApplicationService: LeavesApplicationService,
        private exportToPDFService: ExportToPDFService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private spinner: SpinnerService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.getInitialData();
                break;
            case "PDF":
                this.getInitialData(true, "PDF");
                break;
            case "EXCEL":
                this.getInitialData(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                this.getInitialData();

                break;
            default:
                break;
        }
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });

        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getInitialData();
    }

    clearFilter() {
        this.search = "";
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        this.column = "empCode";
        this.direction = -1;
        this.search = "";
        this.employee = "";
        this.userId = "";
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.tableData = [];
        this.getInitialData();
    }

    pdfDownload(data: any) {
        let outPut = LEAVE_APPLICATION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(LEAVE_APPLICATION_REPORT_DATA(data));
    }

    getInitialData(excel = false, flag = "") {
        let payload = {
            employeeId: this.userId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.leavesApplicationService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.employee = success.employees;
                this.collection = success.count;
                this.tableData = success.rows;
                this.user = this.employee.map((x: any) => {
                    return {
                        label: x.empCode + "  -  " + x.empFullName,
                        value: x._id
                    };
                });
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
