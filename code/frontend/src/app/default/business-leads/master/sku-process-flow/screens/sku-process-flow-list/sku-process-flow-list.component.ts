import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {PRODUCT_SPECIFICATIONS_REPORT_DATA, PRODUCT_SPECIFICATIONS_PDF_DATA} from "@mocks/export-data/quality/master";
import {ProductSpecification} from "@mocks/models/quality/master";
import {SKUProcessFlowService} from "@services/business-leads";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CopyProcessFlowModalComponent, StatusSummaryModalComponent} from "../components";
import {ISKUProcessFlow} from "@mocks/models/business-leads/masters";

@Component({
    selector: "app-sku-process-flow-list",
    templateUrl: "./sku-process-flow-list.component.html"
})
export class SkuProcessFlowListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    PFStatus: any = [];
    productCategory: any = [];
    statusOptions = [];
    productCategories = [];
    tableData: ISKUProcessFlow[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    totalAmounts = {};
    constructor(
        private exportExcelService: ExportExcelService,
        private skuProcessFlowService: SKUProcessFlowService,
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
        if (
            (item.PFStatus == "Inactive" && action == "processFlow") ||
            (item.PFStatus == "Active" && ["edit", "view"].includes(action))
        ) {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: item?._id, action}});
            return;
        } else {
            return null;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    reset() {
        this.statusOptions = [];
        this.productCategories = [];
        this.PFStatus = "";
        this.productCategory = "";
        this.getAll();
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
            PFStatus: this.PFStatus,
            productCategory: this.productCategory
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.skuProcessFlowService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success?.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success?.rows);
            } else {
                this.tableData = success?.rows;
                this.totalAmounts = success?.totalAmounts;
                this.statusOptions = success?.statusOptions;
                this.productCategories = success?.productCategories;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PRODUCT_SPECIFICATIONS_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = PRODUCT_SPECIFICATIONS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    openStatusSummaryModal() {
        const modalRef = this.modalService.open(StatusSummaryModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.totalAmounts = this.totalAmounts;
        modalRef.result.then(
            (success: any) => {},
            (reason: any) => {}
        );
    }

    openCopyProcessFlowModal(item: any) {
        if (item.PFStatus == "Active") {
            const modalRef = this.modalService.open(CopyProcessFlowModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.SKUId = item._id;
            modalRef.result.then(
                (success: any) => {
                    console.log("success", success);
                    this.getAll();
                },

                (reason: any) => {}
            );
        }
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
