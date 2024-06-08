import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {JobWorkerService} from "@services/purchase";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService, ExportToPDFService, SpinnerService, StorageService, ToastService} from "@core/services";
import {ConfirmDeleteComponent, ViewAddressComponent} from "@shared/modals";
import {LIST_DEFAULT_PERMISSION_ACTIONS, superAdminId} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {JOB_WORKER_MASTER_PDF_DATA, JOB_WORKER_MASTER_REPORT_DATA} from "@mocks/export-data/purchase/master";
import {IJobWorkerMaster} from "@mocks/models/purchase/masters/jobWorkerMaster";

@Component({
    selector: "app-job-worker-master-list",
    templateUrl: "./job-worker-master-list.component.html"
})
export class JobWorkerMasterListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "jobWorkerCode";
    direction: number = -1;
    search: string = "";
    tableData: IJobWorkerMaster[] = [];
    tableDataObject: any = {};
    superAdminId: any = superAdminId;
    user: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private jobWorkerService: JobWorkerService,
        private router: Router,
        private spinner: SpinnerService,
        private modalService: NgbModal,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private storageService: StorageService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser")?.roles?.find((x: any) => x == this.superAdminId);
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id, action}});
    }

    open(u: any) {
        if (u.supplierShippingAddress.length == 0) {
            u.supplierShippingAddress = [u.supplierBillingAddress];
        }
        const modalRef = this.modalService.open(ViewAddressComponent, {
            centered: true,
            size: "lg"
        });
        modalRef.componentInstance.data = {
            title: u.supplierName,
            addressA: {
                label: "Shipping Address",
                address: u.supplierShippingAddress
            },
            addressB: {
                label: "Billing Address",
                address: u.supplierBillingAddress ? [u.supplierBillingAddress] : []
            }
        };
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
        this.subscription = this.jobWorkerService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.tableDataObject = JSON.stringify(Object.assign({}, success.rows));
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    delete(id: any) {
        this.spinner.show();
        this.jobWorkerService.delete(id).subscribe(success => {
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
        modalRef.componentInstance.confirmText = `Confirm Deletion of JW Code ${code} ?`;
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
        this.exportExcelService.exportExcel(JOB_WORKER_MASTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = JOB_WORKER_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
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
