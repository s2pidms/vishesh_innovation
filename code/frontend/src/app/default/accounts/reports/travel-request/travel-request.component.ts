import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService, StorageService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {TravelRequestService} from "@services/accounts/travelRequest.service";
import {TravelRequestReport} from "@mocks/models/accounts/reports";
import {TRAVEL_REQUEST_PDF_DATA, TRAVEL_REQUEST_REPORT_DATA} from "@mocks/export-data/accounts/reports";

@Component({
    selector: "app-travel-request",
    templateUrl: "./travel-request.component.html"
})
export class TravelRequestComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    customerId: string = "";
    tableData: TravelRequestReport[] = [];
    customers: any = [];
    fromDate: any = "";
    toDate: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private exportToPDFService: ExportToPDFService,
        private travelRequestService: TravelRequestService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
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

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();
        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.getFiscalDate();
        this.customerId = "";
        this.getAll();
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
            fromDate: this.fromDate,
            toDate: this.toDate,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.travelRequestService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = TRAVEL_REQUEST_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(TRAVEL_REQUEST_REPORT_DATA(data));
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
