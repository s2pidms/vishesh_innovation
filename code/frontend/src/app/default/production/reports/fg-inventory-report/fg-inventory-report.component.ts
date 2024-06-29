import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    UtilityService
} from "@core/services";
import {FinishedGoodsInwardEntryService} from "@services/stores";

import {IFinishGoodsFC} from "@mocks/models/production/reports";
import {FINISH_GOODS_REPORT_NAME, SKU_STAGE_OPTIONS, superAdminId} from "@mocks/constant";
import {FINISHED_GOODS_PDF_DATA, FINISHED_GOODS_REPORT_DATA} from "@mocks/export-data/planning/reports/finishedGoodsFG";

@Component({
    selector: "app-fg-inventory-report",
    templateUrl: "./fg-inventory-report.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class FgInventoryReportComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 13;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    tableData: IFinishGoodsFC[] = [];
    location: any = "";
    SKUStage: any = "";
    SKUOptions: any = [];
    customerOptions: any = [];
    productCategoryOptions: any = [];
    subscription!: Subscription;
    fromDate = this.utilityService.getCurrentMonthDates().fromDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    reportNameObj: any = FINISH_GOODS_REPORT_NAME;
    reportNameArr: any = this.reportNameObj.getAllReportName();
    reportName: any = this.reportNameObj.aodInventory;
    locationOptions: any = [];
    customerId: any = "";
    reportQMSName: any = "";
    totalAmounts: number = 0;
    menuItemId: string = "";
    category: string = "";
    superAdminId: any = superAdminId;
    user: any = "";
    financeMenuItemId: string = "64a6c1e33339d4dc9d8141ad";
    planningMenuItemId: string = "64a6c1e33339d4dc9d8141a4";
    SKUStageObj: any = SKU_STAGE_OPTIONS;
    SKUStageArr: any = this.SKUStageObj.getAllSKUStage();

    constructor(
        private finishedGoodsInwardEntryService: FinishedGoodsInwardEntryService,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        this.menuItemId = this.appGlobalService.menuItemId;
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getFiscalDate();
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
    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentMonthDates();
        this.toDate = monthDates.toDate;
    }
    reset() {
        this.getFiscalDate();
        this.locationOptions = [];
        this.SKUOptions = [];
        this.customerOptions = [];
        this.reportName = this.reportNameObj.aodInventory;
        this.SKUStage = "";
        this.customerId = "";
        this.location = "";
        this.category = "";
        this.getAll();
    }

    setReportName() {
        if (this.reportName == this.reportNameObj.aodInventoryByCustomer) {
            this.SKUStage = "";
            this.location = "";
            this.category = "";
        } else if (this.reportName == this.reportNameObj.aodInventoryBySKUStage) {
            this.customerId = "";
            this.location = "";
            this.category = "";
        } else if (this.reportName == this.reportNameObj.aodInventoryByProductCategory) {
            this.customerId = "";
            this.location = "";
            this.SKUStage = "";
        } else if (this.reportName == this.reportNameObj.aodInventoryByLocation) {
            this.customerId = "";
            this.category = "";
            this.SKUStage = "";
        } else {
            this.SKUStage = "";
            this.customerId = "";
            this.location = "";
            this.category = "";
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
            toDate: this.toDate,
            location: this.location,
            SKUStage: this.SKUStage,
            customerId: this.customerId,
            category: this.category
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.finishedGoodsInwardEntryService
            .getAllFGInventoryReports(payload)
            .subscribe(success => {
                if (flag == "EXCEL") {
                    this.excelDownload(success.rows);
                } else if (flag == "PDF") {
                    this.pdfDownload(success.rows);
                } else {
                    this.tableData = success.rows;
                    this.locationOptions = success?.locations;
                    this.SKUOptions = success?.SKUOptions;
                    this.customerOptions = success?.customerOptions;
                    this.productCategoryOptions = success?.productCategoryOptions;
                    this.totalAmounts = success?.totalAmounts?.totalFGINQuantity;
                    this.reportQMSName = success?.display?.displayText;
                    this.collection = success.count;
                }
                this.spinner.hide();
            });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let output = FINISHED_GOODS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(FINISHED_GOODS_REPORT_DATA(data));
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
