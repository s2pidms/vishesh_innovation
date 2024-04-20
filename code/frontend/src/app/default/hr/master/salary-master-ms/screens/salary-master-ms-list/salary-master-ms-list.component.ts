import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalaryMasterService} from "@services/hr";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {Subscription} from "rxjs";
import {
    SALARY_MASTER_MANAGEMENT_STAFF_REPORT_DATA,
    SALARY_MASTER_MANAGEMENT_STAFF_PDF_DATA
} from "@mocks/export-data/hr/master";
import {salaryMasterManagementStaff} from "@mocks/models/hr&Admin/master";

@Component({
    selector: "app-salary-master-ms-list",
    templateUrl: "./salary-master-ms-list.component.html"
})
export class SalaryMasterMSListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "empCode";
    direction: number = 1;
    search: string = "";
    tableData: salaryMasterManagementStaff[] = [];
    extraColumns: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private salaryMasterService: SalaryMasterService,
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
        this.subscription = this.salaryMasterService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.extraColumns = success.extraColumns;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
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

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALARY_MASTER_MANAGEMENT_STAFF_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SALARY_MASTER_MANAGEMENT_STAFF_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
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
