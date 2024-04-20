import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";

import {Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {PayrollService} from "@services/hr";
import {Payroll} from "@interfaces/payroll";
import {ExportExcelService, MenuTitleService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
@Component({
    selector: "app-payroll",
    templateUrl: "./payroll.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class PayrollComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: Payroll[] = [];
    originTableData: Payroll[] = [];
    user: any = {};
    fromDate: string = "";
    toDate: string = "";
    payrollForMonthYear: any = null;
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
    constructor(
        private router: Router,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private payrollService: PayrollService,
        private exportExcelService: ExportExcelService
    ) {}

    ngOnInit(): void {}
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.payrollForMonthYear = null;
        this.tableData = [];
        this.collection = this.tableData.length;
    }
    setNetPayable(id: number, element: any) {
        let index = this.tableData.map((x: any) => x.employeeId).indexOf(id);

        this.tableData[index].netPayable =
            element.gross - (element.PF + element.ESIC + element.TDS + element.advSalary + element.PT);
    }
    create(status: any) {
        this.spinner.show();
        this.tableData = this.tableData.map(x => {
            x.status = status;
            return x;
        });
        this.payrollService.create(this.tableData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.tableData = [];
            this.payrollForMonthYear = null;
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
        this.payrollService.getAllMasterData(this.payrollForMonthYear).subscribe(success => {
            this.spinner.hide();
            this.tableData = success.salaryPayrollOfMonth;
            this.collection = success.salaryPayrollOfMonth.length;
            this.btnFlag = this.tableData.every((x: any) => x.status == "Approved");
        });
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
            this.tableData = [...this.tableData].sort((a: any | Payroll, b: any | Payroll) => {
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
            title: "Payroll List",
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
                    header: "Department",
                    key: "department",
                    ...style
                },
                {
                    header: "Paid Days",
                    key: "paidDays",
                    ...style
                },
                {
                    header: "Gross",
                    key: "gross",
                    ...style
                },
                {
                    header: "PF",
                    key: "PF",
                    ...style
                },
                {
                    header: "ESIC",
                    key: "ESIC",
                    ...style
                },
                {
                    header: "TDS",
                    key: "TDS",
                    ...style
                },
                {
                    header: "PT",
                    key: "PT",
                    ...style
                },
                {
                    header: "Adv. Salary",
                    key: "advSalary",
                    ...style
                },
                {
                    header: "Net Payable",
                    key: "netPayable",
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
