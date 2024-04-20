import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {AdvanceShipmentNotice} from "@services/dispatch";
import {ExportExcelService, ExportToPDFService, SpinnerService, ToastService, UtilityService} from "@core/services";
import {
    ADVANCE_SHIPMENT_NOTICE_PDF_DATA,
    ADVANCE_SHIPMENT_NOTICE_REPORT_DATA
} from "@mocks/export-data/dispatch/transactions";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {AdvanceShipmentNote} from "@mocks/models/dispatch/transactions";

@Component({
    selector: "app-asn-report",
    templateUrl: "./asn-report.component.html"
})
export class AsnReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: AdvanceShipmentNote[] = [];
    supplierOptions: any = [];
    supplier: string = "";
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private advanceShipmentNotice: AdvanceShipmentNotice,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private exportToPDFService: ExportToPDFService,
        private router: Router,
        private toastService: ToastService
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

    navigateTo(path: string, u: any, action: string) {
        // if (
        //     (u.ASNStatus == "Created" && action == "edit") ||
        //     (u.ASNStatus == "Created" && action == "view") ||
        //     action == "create"
        // ) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});

        return;
        // } else {
        //     return null;
        // }
    }

    navigateToPrint(path: string, u: any, action: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}`, "_blank");
    }

    sendMail(id: any) {
        this.spinner.show();
        this.advanceShipmentNotice.sendMailById(id).subscribe(success => {
            this.toastService.success(success.message);
            this.spinner.hide();
        });
    }

    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.supplier = "";
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
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.advanceShipmentNotice.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.supplierOptions = success.suppliers;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = ADVANCE_SHIPMENT_NOTICE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(ADVANCE_SHIPMENT_NOTICE_REPORT_DATA(data));
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
