import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportToPDFService, ExportExcelService, SpinnerService} from "@core/services";
import {EmployeeAttendanceService} from "@services/hr";
import {EMPLOYEE_ATTENDANCE_PDF_DATA, EMPLOYEE_ATTENDANCE_REPORT_DATA} from "@mocks/export-data/hr/reports";
import {EmployeeAttendance} from "@mocks/models/hr&Admin/reports";
@Component({
    selector: "app-employee-attendance-r",
    templateUrl: "./employee-attendance-r.component.html"
})
export class EmployeeAttendanceRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "employeeCode";
    direction: number = -1;
    search: string = "";
    tableData: EmployeeAttendance[] = [];
    employee: any = [];
    emp: any = [];
    user: any = [];
    fromDate: string = "";
    toDate: string = "";
    attendanceForMonthYear: string = "";
    subscription!: Subscription;
    date = new Date();
    month: any = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1).toISOString().slice(0, 7);
    monthOptions = [
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1).toISOString().slice(0, 7)
        },
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth(), 1).toISOString().slice(0, 7)
        },
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1).toISOString().slice(0, 7)
        },
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth() - 2, 1).toISOString().slice(0, 7)
        },
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth() - 3, 1).toISOString().slice(0, 7)
        },
        {
            value: new Date(this.date.getFullYear(), this.date.getMonth() - 4, 1).toISOString().slice(0, 7)
        }
    ];
    constructor(
        private employeeAttendanceService: EmployeeAttendanceService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAllData();
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
                this.getAllData();
                break;
            case "PDF":
                this.getAllData(true, "PDF");
                break;
            case "EXCEL":
                this.getAllData(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                this.getAllData();
                break;
            default:
                break;
        }
    }

    clearFilter() {
        this.fromDate = "";
        this.toDate = "";
        this.attendanceForMonthYear = "";
        this.search = "";
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        this.column = "employeeCode";
        this.direction = -1;
        this.search = "";
        this.user = "";
        this.tableData = [];
        this.getAllData();
    }
    pdfDownload(data: any) {
        let outPut = EMPLOYEE_ATTENDANCE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(EMPLOYEE_ATTENDANCE_REPORT_DATA(data));
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });

        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getAllData();
    }

    getAllData(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            employeeId: this.user,
            fromDate: this.fromDate,
            toDate: this.toDate,
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            attendanceForMonthYear: this.attendanceForMonthYear,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.employeeAttendanceService.getAllReports(payload).subscribe(success => {
            this.spinner.hide();
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                if (success.employees.length) {
                    this.employee = success.employees.map((x: any) => {
                        return {
                            label: x.empCode + "  -  " + x.empFullName,
                            value: x._id
                        };
                    });
                }
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
