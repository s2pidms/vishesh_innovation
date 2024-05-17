import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    ToastService
} from "@core/services";
import {AssetMasterService} from "@services/finance";
import {ASSET_MASTER_DATA, ASSET_MASTER_PDF_DATA} from "@mocks/export-data/finance/masters";
import {Asset} from "@mocks/models/finance/masters";
import {ConfirmDeleteComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-asset-master-list",
    templateUrl: "./asset-master-list.component.html",
    styles: [
        `
            .total-cost-color {
                font-size: 1.2rem !important;
                color: black;
            }
        `
    ]
})
export class AssetMasterListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "assetCode";
    direction: number = 1;
    search: string = "";
    tableData: Asset[] = [];
    menuItemId: string = "";
    superAdminId: any = superAdminId;
    user: any = "";
    financeMenuItemId: string = "64a6c1e33339d4dc9d8141ad";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private assetMasterService: AssetMasterService,
        private exportToPDFService: ExportToPDFService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        this.menuItemId = this.appGlobalService.menuItemId;
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
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
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.assetMasterService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success?.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success?.rows);
            } else {
                this.tableData = success?.rows;
                this.collection = success?.count;
            }
            this.spinner.hide();
        });
    }
    delete(id: any) {
        this.spinner.show();
        this.assetMasterService.delete(id).subscribe(success => {
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
        modalRef.componentInstance.confirmText = `Confirm Deletion of Asset Number ${code} ?`;
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

    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
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

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    pdfDownload(data: any) {
        let outPut = ASSET_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(ASSET_MASTER_DATA(data));
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
