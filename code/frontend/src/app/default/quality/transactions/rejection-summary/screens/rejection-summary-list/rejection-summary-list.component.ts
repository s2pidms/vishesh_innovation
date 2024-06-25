import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, ToastService, UtilityService} from "@core/services";
import {JobCardEntryService} from "@services/production";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StatusSummaryComponent} from "../components/status-summary/status-summary.component";
import {
    REJECTION_SUMMARY_PDF_DATA,
    REJECTION_SUMMARY_REPORT_DATA
} from "@mocks/export-data/quality/transactions/rejectionSummary";

@Component({
    selector: "app-rejection-summary-list",
    templateUrl: "./rejection-summary-list.component.html"
})
export class RejectionSummaryListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    // status: string = "";
    status: any = [];
    search: string = "";
    tableData: any = [];
    statusOptions = [];
    totalAmounts = {};
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private jobCardEntryService: JobCardEntryService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private toastService: ToastService,
        private router: Router,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        // this.utilityService.navigateToForm({
        //     path: path,
        //     status: u.status,
        //     action: action,
        //     id: u._id,
        //     activatedRoute: this.activatedRoute
        // });

        if (
            (u?.status == "Inactive" && ["rejectionData"].includes(action)) ||
            (u?.status == "Active" && ["view", "edit", "accept"].includes(action))
        ) {
            return null;
        } else {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
            return;
        }
    }
    reset() {
        this.status = "";
        this.getAll();
    }

    eventHeader(event: any) {
        switch (event.key) {
            // case "SEARCH":
            //     this.search = event.value;
            //     this.getAll();
            //     break;
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
    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            status: this.status
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.jobCardEntryService.getAllForRejectionData(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.totalAmounts = success?.totalAmounts;
                this.statusOptions = success?.statusOptions;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = REJECTION_SUMMARY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(REJECTION_SUMMARY_REPORT_DATA(data));
    }

    // update(item: any, action: string, id: string) {
    //     if (["Mark As Completed"].includes(item.status)) {
    //         this.spinner.show();
    //         this.jcEntryService.update(id, {status: action}).subscribe(success => {
    //             this.toastService.success(success.message);
    //             this.getAll();
    //             this.spinner.hide();
    //         });
    //     }
    // }
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
    openRejectionStatusSummaryModal() {
        const modalRef = this.modalService.open(StatusSummaryComponent, {
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
}
