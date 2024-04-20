import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS, PURCHASE_REGISTER_REPORT_NAME} from "@mocks/constant";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {POScheduleModalComponent} from "src/app/default/purchase/transactions/generate-purchase-order/screens/po-schedule-modal/po-schedule-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PurchaseRegisterService} from "@services/accounts/purchaseRegister.service";
import {PurchaseRegisterEntry} from "@mocks/models/accounts/reports";
import {
    PURCHASE_REGISTER_ENTRY_PDF_DATA,
    PURCHASE_REGISTER_ENTRY_REPORT_DATA
} from "@mocks/export-data/accounts/reports";

@Component({
    selector: "app-purchase-register-report",
    templateUrl: "./purchase-register-report.component.html"
})
export class PurchaseRegisterReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: PurchaseRegisterEntry[] = [];
    originTableData: any = [];
    suppliersOptions: any = [];
    toDate: string = "";
    fromDate: string = "";
    reportNameObj: any = PURCHASE_REGISTER_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.taxInvoiceByDate;
    supplier: any = "";
    SKUId: any = "";
    totalTaxableAmt: number = 0;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    accessType: any = this.rolePermissionActions.downloadAction;
    subscription!: Subscription;

    constructor(
        private purchaseRegisterService: PurchaseRegisterService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal,
        private router: Router
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

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.getFiscalDate();
        this.reportName = this.reportNameObj.taxInvoiceByDate;
        this.supplier = "";
        this.SKUId = "";
        this.getAll();
    }

    setReportName() {
        if (this.reportName == this.reportNameObj.taxInvoiceBySupplier) {
            this.SKUId = "";
        } else {
            this.SKUId = "";
            this.supplier = "";
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
            supplier: this.supplier,
            SKUId: this.SKUId,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.purchaseRegisterService.getAllReports(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.originTableData = success.rows;
                this.suppliersOptions = success.suppliersOptions;
                this.collection = success.count;
                this.totalTaxableAmt = success?.totalAmounts?.totalTaxableAmt;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = PURCHASE_REGISTER_ENTRY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PURCHASE_REGISTER_ENTRY_REPORT_DATA(data));
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
}
