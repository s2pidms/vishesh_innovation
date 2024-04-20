import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ServicePurchaseOrderService} from "@services/purchase";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SERVICE_PURCHASE_ORDER_PDF_DATA, SERVICE_PURCHASE_ORDER_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {ServicePurchaseOrder} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-service-purchase-order",
    templateUrl: "./service-purchase-order.component.html"
})
export class ServicePurchaseOrderComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "SPONumber";
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    direction: number = -1;
    search: string = "";
    tableData: ServicePurchaseOrder[] = [];
    submitted = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    totalAmount: number = 0;
    totalGSTAmount: number = 0;
    totalSPOAmount: number = 0;
    supplierOptions: any = [];
    supplierId: string = "";
    subscription!: Subscription;
    constructor(
        private servPurchaseService: ServicePurchaseOrderService,
        private exportExcelService: ExportExcelService,
        private appGlobalService: AppGlobalService,
        private spinner: SpinnerService,
        private storageService: StorageService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
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
    getInitialData() {}

    navigateTo(id: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/spo?id=${id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
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
    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            supplier: this.supplierId,
            direction: this.direction,
            toDate: this.toDate,
            fromDate: this.fromDate,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.servPurchaseService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.supplierOptions = success.suppliers;
                this.collection = success.count;
                this.totalAmount = success?.totalAmounts?.netSPOValue
                    ? (success?.totalAmounts?.netSPOValue).toFixed(2)
                    : 0;
                this.totalGSTAmount = success?.totalAmounts?.GSTAmount
                    ? (success?.totalAmounts?.GSTAmount).toFixed(2)
                    : 0;
                this.totalSPOAmount = success?.totalAmounts?.totalAmountWithTax
                    ? (success?.totalAmounts?.totalAmountWithTax).toFixed(2)
                    : 0;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.supplierId = "";
        this.getAll();
    }
    pdfDownload(data: any) {
        let output = SERVICE_PURCHASE_ORDER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SERVICE_PURCHASE_ORDER_REPORT_DATA(data));
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
