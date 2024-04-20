import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {Subscription} from "rxjs";
import {OnDutyApplicationService} from "@services/hr";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {ActivatedRoute} from "@angular/router";
import {OUTDOOR_DUTY_APPLICATION_PDF_DATA, OUTDOOR_DUTY_APPLICATION_REPORT_DATA} from "@mocks/export-data/hr/reports";
import {outdoorDutyApplication} from "@mocks/models/hr&Admin/reports";

@Component({
    selector: "app-od-application-r",
    templateUrl: "./od-application-r.component.html"
})
export class OdApplicationRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "empCode";
    direction: number = -1;
    search: string = "";
    tableData: outdoorDutyApplication[] | any = [];
    originTableData: any = [];
    user: any = [];
    fromDate: string = "";
    toDate: string = "";
    userId: any = [];
    subscription!: Subscription;
    constructor(
        private odApplicationService: OnDutyApplicationService,
        private exportToPDFService: ExportToPDFService,
        private activatedRoute: ActivatedRoute,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService
    ) {}

    employee: any = [];
    emp: any = [];
    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAllData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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
        this.search = "";
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        this.column = "empCode";
        this.direction = -1;
        this.search = "";
        this.userId = "";
        this.tableData = [];
        this.getAllData();
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
        this.subscription = this.odApplicationService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.employee = success.employees;
                this.tableData = success.rows;
                this.collection = success.count;
                this.user = this.employee.map((x: any) => {
                    return {
                        label: x.empCode + "  -  " + x.empFullName,
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

    pdfDownload(data: any) {
        let outPut = OUTDOOR_DUTY_APPLICATION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(OUTDOOR_DUTY_APPLICATION_REPORT_DATA(data));
    }
}
