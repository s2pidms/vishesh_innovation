import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {SalesForecastService} from "@services/sales";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SALES_FORECAST_PDF_DATA, SALES_FORECAST_REPORT_DATA} from "@mocks/export-data/sales/transactions";
import {salesForecast} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-sales-forecast-list",
    templateUrl: "./sales-forecast-list.component.html"
})
export class SalesForecastListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: salesForecast[] = [];
    statusArray: any = ["Awaiting Approval", "Approved"];
    subscription!: Subscription;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private exportExcelService: ExportExcelService,
        private salesForecastService: SalesForecastService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.status,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.status == "Awaiting Approval" && action == "Report Generated") ||
        //     (u.status == "Approved" && action == "edit") ||
        //     (u.status == "Approved" && action == "approve") ||
        //     (u.status == "Approved" && action == "cancel")
        // ) {
        //     return null;
        // } else {
        //     this.router.navigate([path], {queryParams: {id: u?._id, action}});
        //     return;
        // }
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

    navigateToPrint(path: string, u: any, action: string, preview: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}&preview=${preview}`, "_blank");
    }

    update(u: any, action: string) {
        if (u?.status === "Approved") {
            this.spinner.show();
            this.salesForecastService.update(u._id, {_id: u._id, status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
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
            statusArray: this.statusArray
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesForecastService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_FORECAST_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_FORECAST_REPORT_DATA(data));
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
