import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    ToastService,
    UtilityService
} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {NPD_STATUS_PDF_DATA, NPD_STATUS_REPORT_DATA} from "@mocks/export-data/business-leads/reports";
import {NPDReviewService} from "@services/business-leads";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NPDStatus} from "@mocks/models/business-leads/reports";
import {CancelPoComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-npd-status",
    templateUrl: "./npd-status.component.html"
})
export class NpdStatusComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    customerId: string = "";
    tableData: NPDStatus[] = [];
    statusOptions: any = [];
    customerOptions: any = [];
    GRStatus: string = "All";
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    menuTitleData: any = {};
    tabType: any = "";
    constructor(
        private npdReviewService: NPDReviewService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal,
        private toastService: ToastService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService
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

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    navigateTo(id: any, action: string, pdfAction: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/npd_review/print_form?id=${id}&action=${action}&pdfAction=${pdfAction}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
    }

    navigateToPrint(id: any, action: string, pdfAction: string) {
        let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
        window.open(
            `${window.location.origin}/#/print/npd_review_feasibility_print_screen?id=${id}&action=${action}&pdfAction=${pdfAction}&buttonCondition=${buttonCondition}`,
            "_blank"
        );
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
        this.customerId = "";
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
            referenceName: this.customerId,
            excel: excel,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.npdReviewService.getAllNPDStatusReport(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.customerOptions = success.customers;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    update(id: string, reasonToConvert: string) {
        this.spinner.show();
        this.npdReviewService.update(id, {reasonToConvert: reasonToConvert}).subscribe(success => {
            this.toastService.success(success.message);
            this.getAll();
            this.spinner.hide();
        });
    }
    openCancelModal(id: string) {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = "create";
        modalRef.componentInstance.forNPDReview = "NPD Review for Feasibility";
        modalRef.componentInstance.heading = "Convert to Lost Order";
        modalRef.componentInstance.labelText = "Reason to Convert";
        modalRef.componentInstance.cancelText = "Do you want NPD to covert under Lost Order ?";
        modalRef.result.then(
            (success: any) => {
                if (success.title == "Yes") {
                    this.update(id, success.reasonToConvert);
                }
            },
            (reason: any) => {}
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = NPD_STATUS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(NPD_STATUS_REPORT_DATA(data));
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
