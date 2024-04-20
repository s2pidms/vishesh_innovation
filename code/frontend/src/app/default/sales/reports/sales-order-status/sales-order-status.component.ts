import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SalesOrderService} from "@services/sales";
import {LIST_DEFAULT_PERMISSION_ACTIONS, SALES_ORDER_STATUS_REPORT_NAME} from "@mocks/constant";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {SalesOrder, SalesOrderStatus} from "@mocks/models/sales/reports";
import {
    SALES_ORDER_STATUS_PDF_DATA,
    SALES_ORDER_STATUS_REPORT_DATA
} from "@mocks/export-data/sales/reports/salesOrderStatusReport";
import {POScheduleModalComponent} from "src/app/default/purchase/transactions/generate-purchase-order/screens/po-schedule-modal/po-schedule-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-sales-order-status",
    templateUrl: "./sales-order-status.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class SalesOrderStatusComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: SalesOrderStatus[] = [];
    company: any = {};
    originTableData: any = [];
    customerOptions: any = [];
    toDate: string = "";
    reportNameObj: any = SALES_ORDER_STATUS_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.aodSalesOrderStatusReport;
    customerId: any = "";
    SKUId: any = "";
    reportQMSName: any = "";
    SOValue: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    menuTitleData: any = {};
    tabType: any = "";
    subscription!: Subscription;

    constructor(
        private salesOrderService: SalesOrderService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal
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

    navigateTo(u: any, action: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/so_confirmation?id=${u?._id}&action=${action}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.aodSalesOrderStatusReport;
        this.customerId = "";
        this.SKUId = "";
        this.getAll();
    }

    setReportName() {
        if (this.reportName == this.reportNameObj.aodSOSRByCustomer) {
            this.SKUId = "";
        } else {
            this.SKUId = "";
            this.customerId = "";
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
            customerId: this.customerId,
            SKUId: this.SKUId,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.salesOrderService.getAllSalesOrderStatusReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.customerOptions = success.customerList;
                this.collection = success.count;
                this.company = success.company;
                this.SOValue = success?.totalAmounts?.SOValue;
                this.reportQMSName = success?.displayText?.displayText;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SALES_ORDER_STATUS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SALES_ORDER_STATUS_REPORT_DATA(data));
    }

    openSOScheduleModal(item: any) {
        const modalRef = this.modalService.open(POScheduleModalComponent, {
            centered: true,
            windowClass: "custom-modal-sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.bookSalesOrder = "Book Sales Order";
        modalRef.componentInstance.action = "view";
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.POQty = item.SOQty;
        modalRef.componentInstance.deliveryCount = item.dispatchCount;
        modalRef.componentInstance.deliveryScheduleArr = item?.dispatchSchedule;
        // if (item.dispatchSchedule) {
        //     modalRef.componentInstance.deliveryScheduleArr = item?.dispatchSchedule.map((x: any) => {
        //         x.dispatchDate = this.utilityService.getFormatDate(x.dispatchDate, "YYYY-MM-DD");
        //         return x;
        //     });
        // }
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
        this.salesOrderService.getById(id).subscribe(success => {
            this.tableData = success.rows;
            this.originTableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
}
