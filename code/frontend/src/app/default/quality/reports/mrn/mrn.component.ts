import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS, MRN_REPORT_NAME} from "@mocks/constant";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {MaterialReleaseNoteService} from "@services/quality";
import {MRN_REPORT_STATUS_WISE_PDF_DATA, MRN_REPORT_STATUS_WISE_REPORT_DATA} from "@mocks/export-data/quality/reports";
import {MRNReport} from "@mocks/models/quality/reports";

@Component({
    selector: "app-mrn",
    templateUrl: "./mrn.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class MRNComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: MRNReport[] = [];
    company: any = {};
    suppliersOptions: any = [];
    statusArr: any = [];
    toDate: string = "";
    reportNameObj: any = MRN_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.aodMRN;
    supplierId: any = "";
    status: any = "";
    SOQuantity: any = "";
    reportQMSName: any = "";
    SOValue: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    subscription!: Subscription;

    constructor(
        private materialReleaseNote: MaterialReleaseNoteService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
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

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.toDate = monthDates.toDate;
    }

    navigateTo(id: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/mrn?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.aodMRN;
        this.supplierId = "";
        this.status = "";
        this.getAll();
    }

    setReportName() {
        if (this.reportName == this.reportNameObj.aodMRNBySupplierWise) {
            this.status = "";
        } else if (this.reportName == this.reportNameObj.aodMRNStatusWise) {
            this.supplierId = "";
        } else {
            this.status = "";
            this.supplierId = "";
        }
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
            excel: excel,
            supplier: this.supplierId,
            status: this.status,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.materialReleaseNote.getAllMRNReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.suppliersOptions = success.suppliers;
                this.statusArr = success.statusOptions;
                this.collection = success.count;
                this.company = success.company;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = MRN_REPORT_STATUS_WISE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(MRN_REPORT_STATUS_WISE_REPORT_DATA(data));
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
        this.materialReleaseNote.getById(id).subscribe(success => {
            this.tableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
}
