import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    StorageService,
    ToastService,
    UtilityService
} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {JOB_WORK_ITEM_MASTER_PDF_DATA, JOB_WORK_ITEM_MASTER_REPORT_DATA} from "@mocks/export-data/purchase/master";
import {ConfirmDeleteComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JobWorkerItemsMasterService} from "@services/purchase/jobWorkerItemsMaster.service";

@Component({
    selector: "app-job-worker-item-master-list",
    templateUrl: "./job-worker-item-master-list.component.html"
})
export class JobWorkerItemMasterListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    search: string = "";
    column: string = "itemCode";
    direction: number = 1;
    // itemData: Items[] = [];
    itemData: any = [];
    superAdminId: any = superAdminId;
    user: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private jobWorkerItemsMasterService: JobWorkerItemsMasterService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private storageService: StorageService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);

        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        if (u.isActive == "Inactive" && action == "copy") {
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
        this.subscription = this.jobWorkerItemsMasterService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.itemData = success.rows;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }

    // else {
    //   this.tableData = success?.rows?.map((x: any, index: number) => {
    //       x.itemLineNumber = index + 1;
    //       return x;
    //   });
    delete(id: any) {
        this.spinner.show();
        this.jobWorkerItemsMasterService.delete(id).subscribe(success => {
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
        modalRef.componentInstance.confirmText = `Confirm Deletion of Job Worker Item Code ${code} ?`;
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
        this.exportExcelService.exportExcel(JOB_WORK_ITEM_MASTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = JOB_WORK_ITEM_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });

        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getAll();
    }

    setConversionOfUnit(item: any) {
        if (item.orderInfoUOM == item.secondaryUnit) {
            item.orderInfoUOM = item.primaryUnit;
        } else {
            item.orderInfoUOM = item.secondaryUnit;
        }
        return item;
    }
}
