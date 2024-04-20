import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {PayrollService} from "@services/hr/Payroll.service";
import {Payroll} from "@interfaces/payroll";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {PAYROLL_PDF_DATA, PAYROLL_REPORT_DATA} from "@mocks/export-data/hr/reports";

@Component({
    selector: "app-payroll-r",
    templateUrl: "./payroll-r.component.html"
})
export class PayrollRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "employeeCode";
    direction: number = -1;
    search: string = "";
    tableData: Payroll[] = [];
    originTableData: Payroll[] = [];
    fromDate: string = "";
    toDate: string = "";
    gross: number = 0;
    netPayable: number = 0;
    PF: number = 0;
    TDS: number = 0;
    payrollForMonthYear: string = "";
    date = new Date();
    user: any = [];
    userId: any = [];
    subscription!: Subscription;
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
        private payrollService: PayrollService,
        private exportToPDFService: ExportToPDFService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private spinner: SpinnerService
    ) {}
    employee: any = [];

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
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

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            employeeId: this.userId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            payrollForMonthYear: this.payrollForMonthYear,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.payrollService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.gross = +success?.totalAmounts?.gross;
                this.netPayable = +success?.totalAmounts?.netPayable;
                this.PF = +success?.totalAmounts?.PF;
                this.TDS = +success?.totalAmounts?.TDS;
                this.employee = success.employees;
                this.user = this.employee.map((x: any) => {
                    return {
                        label: `${x.empCode} -  ${x.empFullName}`,
                        value: x._id
                    };
                });
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    clearFilter() {
        this.fromDate = "";
        this.toDate = "";
        this.payrollForMonthYear = "";
        this.search = "";
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        this.column = "employeeCode";
        this.direction = -1;
        this.search = "";
        this.userId = "";
        this.tableData = [];
        this.getAll();
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

    pdfDownload(data: any) {
        let outPut = PAYROLL_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PAYROLL_REPORT_DATA(data));
    }
}
