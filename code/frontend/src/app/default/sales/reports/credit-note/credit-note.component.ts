import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CreditNoteService} from "@services/sales";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {CREDIT_NOTE_PDF_DATA, CREDIT_NOTE_REPORT_DATA} from "@mocks/export-data/sales/reports";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {CreditNote} from "@mocks/models/sales/reports";

@Component({
    selector: "app-credit-note",
    templateUrl: "./credit-note.component.html"
})
export class CreditNoteComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: CreditNote[] = [];
    company: any = {};
    originTableData: any = [];
    customersOptions: any = [];
    fromDate: any = "";
    toDate: any = "";
    customerId: string = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    constructor(
        private creditNoteService: CreditNoteService,
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
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

    navigateTo(id: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/credit_note?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();

        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
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
        this.getFiscalDate();
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
            excel: excel,
            customer: this.customerId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.creditNoteService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.customersOptions = success.customers;
                this.collection = success.count;
                this.company = success.company;
                this.totalAmount = success?.totalAmounts?.netCNValue ? success?.totalAmounts?.netCNValue : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = CREDIT_NOTE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(CREDIT_NOTE_REPORT_DATA(data));
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

    getById(id: string) {
        this.spinner.show();
        this.creditNoteService.getById(id).subscribe(success => {
            this.tableData = success.rows;
            this.originTableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
}
