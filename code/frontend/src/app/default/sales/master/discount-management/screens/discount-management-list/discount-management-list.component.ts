import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService, StorageService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {DiscountManagementService} from "@services/sales/discountManagement.service";
import {DISCOUNT_MANAGEMENT_PDF_DATA, DISCOUNT_MANAGEMENT_REPORT_DATA} from "@mocks/export-data/sales/master";
import {ConfirmDeleteComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-discount-management-list",
    templateUrl: "./discount-management-list.component.html"
})
export class DiscountManagementListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    subscription!: Subscription;
    superAdminId: any = superAdminId;
    user: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private exportExcelService: ExportExcelService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private discountManagementService: DiscountManagementService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private router: Router,
        private storageService: StorageService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
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

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id, action}});
    }
    delete(id: any) {
        this.spinner.show();
        this.discountManagementService.delete(id).subscribe(success => {
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
        modalRef.componentInstance.confirmText = `Confirm Deletion of Discount No. ${code} ?`;
        modalRef.result.then(
            (success: any) => {
                if (success.title == "Yes") {
                    this.delete(id);
                }
            },
            (reason: any) => {}
        );
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
        this.subscription = this.discountManagementService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = DISCOUNT_MANAGEMENT_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(DISCOUNT_MANAGEMENT_REPORT_DATA(data));
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
