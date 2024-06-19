import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {DispatchRequestNoteService} from "@services/sales";
import {DRNSummaryReport} from "@mocks/models/dispatch/reports/DRNsummaryReport";
import {DISPATCH_LIST_PDF_DATA, DISPATCH_LIST_REPORT_DATA} from "@mocks/export-data/sales/reports";

@Component({
    selector: "app-dispatch-list",
    templateUrl: "./dispatch-list.component.html"
})
export class DispatchListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    customersOptions: any = [];
    customer: string = "";
    totalAmount: number = 0;
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;

    constructor(
        private dispatchRequestNoteService: DispatchRequestNoteService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
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

    formatAddress(address: any) {
        if (!address) return "";
        const addressParts = [
            address.line1,
            address.line2,
            address.line3,
            address.line4,
            address.city,
            address.cityOrDistrict,
            address.pinCode,
            address.state,
            address.country
        ];
        return addressParts.filter(Boolean).join(", ");
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
            toDate: this.toDate,
            customer: this.customer
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.dispatchRequestNoteService.getAllReports(payload).subscribe(success => {
            success.rows = success?.rows?.map((x: any) => {
                x.shippingFullAddress = this.formatAddress(x?.customerShippingAddress);
                x.billingFullAddress = this.formatAddress(x?.customerBillingAddress);
                return x;
            });
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success?.rows;
                this.customersOptions = success.customerOptions;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = DISPATCH_LIST_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(DISPATCH_LIST_REPORT_DATA(data));
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
