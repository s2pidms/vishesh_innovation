import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ProductSpecificationMasterService} from "@services/quality";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService, StorageService, ToastService} from "@core/services";
import {PRODUCT_SPECIFICATIONS_REPORT_DATA, PRODUCT_SPECIFICATIONS_PDF_DATA} from "@mocks/export-data/quality/master";
import {ProductSpecification} from "@mocks/models/quality/master";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDeleteComponent} from "@shared/modals";
import {SpecificationsStatusSummaryComponent} from "../../../rm-specifications/screens/specifications-status-summary/specifications-status-summary.component";

@Component({
    selector: "app-product-specifications-list",
    templateUrl: "./product-specifications-list.component.html"
})
export class ProductSpecificationsListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "status";
    direction: number = 1;
    search: string = "";
    tableData: ProductSpecification[] = [];
    superAdminId: any = superAdminId;
    user: any = "";
    totalAmounts: any = {};
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private productSpecificationMasterService: ProductSpecificationMasterService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private storageService: StorageService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        if (["Red", "Inactive"].includes(u.status) && action == "copy") {
            return null;
        } else {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
            return;
        }
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
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.productSpecificationMasterService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                if (success?.totalAmounts?.length > 0) {
                    this.totalAmounts = success.totalAmounts[0];
                }
            }
            this.spinner.hide();
        });
    }
    delete(id: any) {
        this.spinner.show();
        this.productSpecificationMasterService.delete(id).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.getAll();
        });
    }
    openConfirmModal(id: any, code: any) {
        const modalRef = this.modalService.open(ConfirmDeleteComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.heading = "Confirm Deletion";
        modalRef.componentInstance.confirmText = `Confirm Deletion of SKU No. ${code} ?`;
        modalRef.result.then(
            (success: any) => {
                if (success.title == "Yes") {
                    this.delete(id);
                }
            },
            (reason: any) => {}
        );
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
        const modalRef = this.modalService.open(SpecificationsStatusSummaryComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.heading = "Product Specification Status Summary";
        modalRef.componentInstance.activeCount = "Active SKU Count";
        modalRef.componentInstance.specificationCreatedForCount = "Product Specification created for SKU Count";
        modalRef.componentInstance.specificationPendingForCount = "Product Specification pending for SKU Count";
        modalRef.componentInstance.totalActive = this.totalAmounts?.totalActiveSKU;
        modalRef.componentInstance.totalCreated = this.totalAmounts?.totalCreatedSKU;
        modalRef.componentInstance.totalPending = this.totalAmounts?.totalPendingSKU;
        modalRef.result.then(
            (success: any) => {
                if (success) {
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
