import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SKUService} from "@services/sales";
import {ISKUInkMaster} from "@mocks/models/planning/masters/SKUInkMaster";
import {StatusSummaryModalComponent} from "../components/status-summary-modal/status-summary-modal.component";
import {
    SKU_ATTRIBUTES_TRACKING_MASTER_PDF_DATA,
    SKU_ATTRIBUTES_TRACKING_MASTER_REPORT_DATA
} from "@mocks/export-data/planning/master/SKUAttributesTrackingMaster";

@Component({
    selector: "app-sku-attribute-tracking-list",
    templateUrl: "./sku-attribute-tracking-list.component.html"
})
export class SkuAttributeTrackingListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    totalAmounts = {};
    constructor(
        private exportExcelService: ExportExcelService,
        private skuService: SKUService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, item: any, action: string) {
        this.router.navigate([path], {queryParams: {id: item?._id, action}});
        return;
    }

    SKUAttributesTracking(flag: string, item: any) {
        let index = this.tableData.map((x: any) => x._id).indexOf(item._id);
        this.tableData[index].showAttributesData = flag;
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    getAllSKUDimExcel(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.skuService.getAllSKUDimExcel(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success);
            } else if (flag == "PDF") {
                this.pdfDownload(success);
            }
            this.spinner.hide();
        });
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
            type: null
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.skuService.getAllForAttributes(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success?.rows?.map((x: any) => {
                    x.showAttributesData = "status";
                    return x;
                });
                this.totalAmounts = success?.totalAmounts;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SKU_ATTRIBUTES_TRACKING_MASTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SKU_ATTRIBUTES_TRACKING_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    openStatusSummaryModal() {
        const modalRef = this.modalService.open(StatusSummaryModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.totalAmounts = this.totalAmounts;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    // this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
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
