import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CreditNoteService} from "@services/sales";
import {ExportExcelService, SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-credit-note-details",
    templateUrl: "./credit-note-details.component.html"
})
export class CreditNoteDetailsComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    company: any = {};
    originTableData: any = [];
    customerOptions: any = [];
    statusOptions: any = [];
    fromDate: any = "";
    toDate: any = "";
    customerId: string = "";
    status: string = "";
    subscription!: Subscription;
    constructor(
        private creditNoteService: CreditNoteService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
        this.getAll();
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.fromDate = monthDates.fromDate;
        this.toDate = monthDates.toDate;
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
            case "EXCEL":
                this.getAll(true);
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
        this.status = "";
        this.getAll();
    }
    getAll(excel = false) {
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
            toDate: this.toDate,
            CNStatus: this.status
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.creditNoteService.getAllCNDetailsReports(payload).subscribe(success => {
            if (excel) {
                this.excelDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.statusOptions = success.statusOptions;
                this.customerOptions = success.customers;
                this.collection = success.count;
                this.company = success.company;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        let style = {
            width: 24,
            style: {
                alignment: {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
            }
        };
        let reportData: any = {
            title: "Credit Note Details",
            csvData: data,
            headers: [
                {
                    header: " Credit Note #",
                    key: "CNNumber",
                    ...style
                },
                {
                    header: "Date",
                    key: "CNDateS",
                    ...style
                },
                {
                    header: "Customer",
                    key: "customerName",
                    ...style
                },
                {
                    header: "SKU Code",
                    key: "SKUCode",
                    ...style
                },
                {
                    header: " SKU Description",
                    key: "SKUDescription",
                    ...style
                },
                {
                    header: "Quantity",
                    key: "returnQty",
                    ...style
                },
                {
                    header: "Rate",
                    key: "standardRate",
                    ...style
                },
                {
                    header: "Total Amount",
                    key: "lineValue",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
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
