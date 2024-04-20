import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, ToastService} from "@core/services";
import {JobCardOutputService} from "@services/production";
import {IJobCardOutput} from "@mocks/models/production/masters";
import {JOB_CARD_OUTPUT_PDF_DATA, JOB_CARD_OUTPUT_REPORT_DATA} from "@mocks/export-data/production/master";

@Component({
    selector: "app-job-card-output-list",
    templateUrl: "./job-card-output-list.component.html"
})
export class JobCardOutputListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "jobCardNo";
    direction: number = 1;
    search: string = "";
    tableData: IJobCardOutput[] = [];
    menuItemId: string = "";
    productionItemId: string = "64a6c1e33339d4dc9d8141a8";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private jobCardOutputService: JobCardOutputService,
        private exportToPDFService: ExportToPDFService,
        private appGlobalService: AppGlobalService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
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
        this.subscription = this.jobCardOutputService.getAll(payload).subscribe(success => {
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

    update(item: any, action: string, id: string) {
        if (item.status == "Approved" && this.productionItemId == this.menuItemId) {
            this.spinner.show();
            this.jobCardOutputService.update(id, {status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }

    navigateTo(path: string, u: any, action: string) {
        if (
            (["Approved", "Mark As Completed"].includes(u.status) && ["edit"].includes(action)) ||
            (this.productionItemId != this.menuItemId && ["edit"].includes(action)) ||
            (this.productionItemId == this.menuItemId && ["approve"].includes(action)) ||
            (["Approved"].includes(u.status) && ["approve"].includes(action))
        ) {
            return null;
        } else {
            this.router.navigate([path], {
                relativeTo: this.activatedRoute,
                queryParams: {id: u._id, action: action}
            });
            return;
        }
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
        let outPut = JOB_CARD_OUTPUT_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(JOB_CARD_OUTPUT_REPORT_DATA(data));
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
