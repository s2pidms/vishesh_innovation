import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {PDIREntryService} from "@services/quality";
import {LIST_DEFAULT_PERMISSION_ACTIONS, PDIR_ENTRY_TEMPLATE_NAME} from "@mocks/constant";
import {PDI_PDF_DATA, PDI_REPORT_DATA} from "@mocks/export-data/quality/reports";
import {PDIReports} from "@mocks/models/quality/reports";

@Component({
    selector: "app-pdi-report",
    templateUrl: "./pdi-report.component.html"
})
export class PDIReportReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: PDIReports[] = [];
    customerList: any = [];
    customer: string = "";
    templateNameObj: any = PDIR_ENTRY_TEMPLATE_NAME;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    constructor(
        private PDIREntryService: PDIREntryService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
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

    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.customer = "";
        this.getAll();
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            customer: this.customer,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.PDIREntryService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.customerList = success.customerList;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = PDI_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PDI_REPORT_DATA(data));
    }
    navigateToPrint(u: any, action: string) {
        let path = "";
        if (u.template == this.templateNameObj.genericPDIReport) {
            path = "/#/print/pdir_entry";
        } else {
            path = "/#/print/tgy_pdir_entry";
        }
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}`, "_blank");
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
