import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {EmployeeAttendanceService} from "@services/hr";
import {ExportExcelService, ToastService, SpinnerService, StorageService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AttendanceReviewEditModelComponent} from "./components";
export interface Attendance {
    _id: string;
    employeeCode: string;
    employeeName: string;
    monthDays: number;
    weeklyOff: number;
    paidHolidays: number;
    paidLeaves: number;
    presentDays: number;
    LOPDiff: number;
    ODDays?: number;
    status: string;
}
@Component({
    selector: "app-attendance-review",
    templateUrl: "./attendance-review.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class AttendanceReviewComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: Attendance[] = [];
    originTableData: Attendance[] = [];
    user: any = {};
    fromDate: string = "";
    toDate: string = "";
    attendanceForMonthYear: any = null;
    submitted = false;
    date = new Date();
    flag: number = -1;
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
        }
    ];
    btnFlag: boolean = true;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    superAdminId: any = "64a687b4e9143bffd820fb3d";
    constructor(
        private router: Router,
        private spinner: SpinnerService,
        private attendanceService: EmployeeAttendanceService,
        private toastService: ToastService,
        private exportExcelService: ExportExcelService,
        private modalService: NgbModal,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.attendanceForMonthYear = null;
        this.tableData = [];
        this.collection = this.tableData.length;
    }
    setLOP(id: number, element: any) {
        let index = this.tableData.map((x: any) => x._id).indexOf(id);
        this.tableData[index].LOPDiff =
            element.monthDays -
            (element.paidLeaves + element.presentDays + element.weeklyOff + element.ODDays + element.paidHolidays);
    }
    create(status: any) {
        this.spinner.show();
        this.tableData = this.tableData.map(x => {
            x.status = status;
            return x;
        });
        this.attendanceService.create(this.tableData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.tableData = [];
            this.attendanceForMonthYear = null;
            this.flag = -1;
            this.toastService.success(success.message);
        });
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.flag = -1;
                break;
            case "EXCEL":
                this.excelDownload(this.tableData);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    getAllData() {
        this.spinner.show();
        this.attendanceService.getAllMasterData(this.attendanceForMonthYear).subscribe(success => {
            this.tableData = success.attendanceOfMonth;
            this.collection = success.attendanceOfMonth.length;
            this.btnFlag = this.tableData.every((x: any) => x.status == "Approved");

            this.spinner.hide();
        });
    }

    openAttendanceModal(item: any) {
        if (item?.status == "Draft") {
            let index = this.tableData.map((x: any) => x.employeeId).indexOf(item.employeeId);
            const modalRef = this.modalService.open(AttendanceReviewEditModelComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.attendanceData = {
                monthDays: item.monthDays,
                weeklyOff: item.weeklyOff,
                paidHolidays: item.paidHolidays,
                paidLeaves: item.paidLeaves,
                ODDays: item.ODDays,
                presentDays: item.presentDays,
                LOPDiff: item.LOPDiff
            };
            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.tableData[index].weeklyOff = success.weeklyOff;
                        this.tableData[index].paidHolidays = success.paidHolidays;
                        this.tableData[index].paidLeaves = success.paidLeaves;
                        this.tableData[index].ODDays = success.ODDays;
                        this.tableData[index].presentDays = success.presentDays;
                        this.tableData[index].LOPDiff = success.LOPDiff;
                    }
                },
                (reason: any) => {}
            );
        }
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.tableData = this.tableData;
        } else {
            this.tableData = [...this.tableData].sort((a: any | Attendance, b: any | Attendance) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    excelDownload(data: any) {
        let style = {
            width: 24,
            style: {
                alignment: {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
            }
        };
        let reportData: any = {
            title: "Attendance Review",
            csvData: data,
            headers: [
                {
                    header: "Employee Code",
                    key: "employeeCode",
                    ...style
                },
                {
                    header: "Employee Name",
                    key: "employeeName",
                    ...style
                },
                {
                    header: "Month Days",
                    key: "monthDays",
                    ...style
                },
                {
                    header: "Weekly Off",
                    key: "weeklyOff",
                    ...style
                },
                {
                    header: "Paid Holidays",
                    key: "paidHolidays",
                    ...style
                },
                {
                    header: "Paid Leaves",
                    key: "paidLeaves",
                    ...style
                },
                {
                    header: "OD Days",
                    key: "ODDays",
                    ...style
                },
                {
                    header: "Present Days",
                    key: "presentDays",
                    ...style
                },
                {
                    header: "LOP/Diff",
                    key: "LOPDiff",
                    ...style
                },
                {
                    header: "Status",
                    key: "status",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
    }
}
