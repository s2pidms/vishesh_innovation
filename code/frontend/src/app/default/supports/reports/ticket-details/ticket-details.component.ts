import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {UtilityService, ExportExcelService, MenuTitleService, ExportToPDFService, SpinnerService} from "@core/services";
import {SupportService} from "@services/supports";
import {SUPPORT_ISSUE_STATUS} from "@mocks/constant";
import {TICKET_DETAILS_REPORT_DATA, TICKET_DETAILS_PDF_DATA} from "@mocks/export-data/accounts/reports";
import {TicketDetails} from "@mocks/models/support/reports";

@Component({
    selector: "app-ticket-details",
    templateUrl: "./ticket-details.component.html"
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: TicketDetails[] | any = [];
    issueStatus: string = "";
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    issueStatusArr: any = SUPPORT_ISSUE_STATUS;

    constructor(
        private supportService: SupportService,
        private menuTitleService: MenuTitleService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.getAll();
        this.menuTitleService.set({
            title: "Ticket Details",
            subTitle: null,
            type: null
        });
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    navigateTo(id: any, action: string) {
        window.open(`${window.location.origin}/#/print/ticket_details?id=${id}&action=${action}`, "_blank");
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
        this.issueStatus = "";
        this.getAll();
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            dummy: "1",
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            fromDate: this.fromDate,
            toDate: this.toDate,
            status: this.issueStatus
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.supportService.getAllReports(payload).subscribe(success => {
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
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(TICKET_DETAILS_REPORT_DATA(data));
    }
    pdfDownload(data: any) {
        let output = TICKET_DETAILS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
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
