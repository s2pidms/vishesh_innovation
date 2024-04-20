import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {EmployeeService} from "@services/hr";
import {ActivatedRoute} from "@angular/router";
import {EMPLOYEE_EXIT_PDF_DATA, EMPLOYEE_EXIT_REPORT_DATA} from "@mocks/export-data/hr/reports";
import {EmployeeExit} from "@mocks/models/hr&Admin/reports";
@Component({
    selector: "app-employee-exit-r",
    templateUrl: "./employee-exit-r.component.html"
})
export class EmployeeExitRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "empCode";
    direction: number = -1;
    search: string = "";
    tableData: EmployeeExit[] = [];
    subscription!: Subscription;
    constructor(
        private employeeService: EmployeeService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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

    getInitialData(excel = false, flag = "") {
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
        this.subscription = this.employeeService.employeeDepartmentWiseStructure(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.collection = success.count;
                this.tableData = success.rows;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = EMPLOYEE_EXIT_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(EMPLOYEE_EXIT_REPORT_DATA(data));
    }
}
