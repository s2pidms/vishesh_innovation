import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {
    NPD_LOST_ORDER_ANALYSIS_PDF_DATA,
    NPD_LOST_ORDER_ANALYSIS_REPORT_DATA
} from "@mocks/export-data/business-leads/reports/npdLostOrderAnalysis";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NPDReviewService} from "@services/business-leads";
import {NPDLostOrderAnalysis} from "@mocks/models/business-leads/reports";
@Component({
    selector: "app-npd-lost-order-analysis",
    templateUrl: "./npd-lost-order-analysis.component.html"
})
export class NpdLostOrderAnalysisComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: NPDLostOrderAnalysis[] = [];
    customerOptions: any = [];
    customerId: any = "";
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    menuTitleData: any = {};
    tabType: any = "";
    constructor(
        private npdReviewService: NPDReviewService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
        this.menuTitleData = this.storageService.get("menuTitle");
        this.tabType = this.storageService.get("tab");
        if (this.tabType == "MASTER") {
            this.tabType = "masters";
        } else if (this.tabType == "TRANSACTION") {
            this.tabType = "transactions";
        } else if (this.tabType == "REPORT") {
            this.tabType = "reports";
        }
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    navigateTo(id: any, action: string, pdfAction: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/npd_review/print_form?id=${id}&action=${action}&pdfAction=${pdfAction}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }

    navigateToPrint(id: any, action: string, pdfAction: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/npd_review_feasibility_print_screen?id=${id}&action=${action}&pdfAction=${pdfAction}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
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
        this.customerId = "";
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
            referenceName: this.customerId,
            excel: excel,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.npdReviewService.getAllNPDFinalStatusReport(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.customerOptions = success.customers;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    pdfDownload(data: any) {
        let outPut = NPD_LOST_ORDER_ANALYSIS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(NPD_LOST_ORDER_ANALYSIS_REPORT_DATA(data));
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
