import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {RMSpecificationMasterService} from "@services/quality";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService, StorageService, ToastService} from "@core/services";
import {RM_SPECIFICATIONS_REPORT_DATA, RM_SPECIFICATIONS_PDF_DATA} from "@mocks/export-data/quality/master";
import {RMSpecificationMaster} from "@mocks/models/quality/master";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDeleteComponent} from "@shared/modals";
import {SpecificationsStatusSummaryComponent} from "../specifications-status-summary/specifications-status-summary.component";

@Component({
    selector: "app-rm-specifications-list",
    templateUrl: "./rm-specifications-list.component.html"
})
export class RmSpecificationsListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    column: string = "status";
    direction: number = 1;
    search: string = "";
    tableData: RMSpecificationMaster[] = [];
    superAdminId: any = superAdminId;
    user: any = "";
    supplier: any = "";
    totalAmounts: any = {};
    supplierOptions: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private rmSpecificationMasterService: RMSpecificationMasterService,
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
    // navigateTo(path: string, id: any, action: string) {
    //     this.router.navigate([path], {queryParams: {id, action}});
    // }

    // navigateTo(path: string, u: any, action: string) {
    //     if (
    //         (["Red", "Inactive"].includes(u.status) && action == "copy"
    //     ) {
    //         return null;
    //     } else {
    //         this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
    //         return;
    //     }
    // }

    navigateTo(path: string, u: any, action: string) {
        if (
            (["Red"].includes(u.status) && action == "specification") ||
            (["Inactive"].includes(u.status) && ["edit", "view"].includes(action)) ||
            (u.status == "Active" && ["edit", "view", "copy"].includes(action))
        ) {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
            return;
        } else {
            return null;
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
            supplier: this.supplier,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.rmSpecificationMasterService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.supplierOptions = success?.supplierOptions;
                if (success?.totalAmounts?.length > 0) {
                    this.totalAmounts = success.totalAmounts[0];
                }
            }
            this.spinner.hide();
        });
    }

    reset() {
        this.supplier = "";
        this.getAll();
    }
    delete(id: any) {
        this.spinner.show();
        this.rmSpecificationMasterService.delete(id).subscribe(success => {
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
        modalRef.componentInstance.confirmText = `Confirm Deletion of Item Code ${code} ?`;
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
        this.exportExcelService.exportExcel(RM_SPECIFICATIONS_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = RM_SPECIFICATIONS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    openStatusSummaryModal() {
        const modalRef = this.modalService.open(SpecificationsStatusSummaryComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.heading = "RM Specification Status Summary";
        modalRef.componentInstance.activeCount = "Active Items Count";
        modalRef.componentInstance.specificationCreatedForCount = "RM Specification created for Items Count";
        modalRef.componentInstance.specificationPendingForCount = "RM Specification pending for Items Count";
        modalRef.componentInstance.totalActive = this.totalAmounts?.totalActiveItems;
        modalRef.componentInstance.totalCreated = this.totalAmounts?.totalCreatedItems;
        modalRef.componentInstance.totalPending = this.totalAmounts?.totalPendingItems;
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
