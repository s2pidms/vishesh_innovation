import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ToastService, SpinnerService, ExportToPDFService} from "@core/services";
import {NPDReviewService} from "@services/business-leads";
import {
    NPD_REVIEW_FOR_FEASIBILITY_PDF_DATA,
    NPD_REVIEW_FOR_FEASIBILITY_REPORT_DATA
} from "@mocks/export-data/business-leads/transactions";
import {NPDReviewForFeasibility} from "@mocks/models/business-leads/transactions";

@Component({
    selector: "app-review-feasibility-list",
    templateUrl: "./review-feasibility-list.component.html"
})
export class ReviewFeasibilityListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: NPDReviewForFeasibility[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private npdReviewService: NPDReviewService,
        private router: Router,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
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

    update(u: any, action: boolean) {
        if (
            u.customerInputs?.status &&
            u.technicalReview?.status &&
            u.economicReview?.status &&
            u.legalReview?.status &&
            u.operationalReview?.status &&
            u.schedulingReview?.status &&
            ["Not Feasible", "Feasible"].includes(u?.status)
        ) {
            this.spinner.show();
            this.npdReviewService
                .update(u._id, {
                    isReportGenerated: action
                })
                .subscribe(success => {
                    this.toastService.success(success.message);
                    this.getAll();
                    this.spinner.hide();
                });
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
        this.subscription = this.npdReviewService.getAll(payload).subscribe(success => {
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
        let outPut = NPD_REVIEW_FOR_FEASIBILITY_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        data.map((x: any) => {
            x.customerInputs = x?.customerInputs?.status ?? "-";
            x.technicalReview = x?.technicalReview?.status ?? "-";
            x.economicReview = x?.economicReview?.status ?? "-";
            x.legalReview = x?.legalReview?.status ?? "-";
            x.operationalReview = x?.operationalReview?.status ?? "-";
            x.schedulingReview = x?.schedulingReview?.status ?? "-";

            return x;
        });
        this.exportExcelService.exportExcel(NPD_REVIEW_FOR_FEASIBILITY_REPORT_DATA(data));
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
}
