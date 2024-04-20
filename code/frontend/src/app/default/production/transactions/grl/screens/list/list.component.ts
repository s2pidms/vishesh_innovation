import {Component, OnInit, QueryList, OnDestroy, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {GoodsRequisitionService} from "@services/production";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {GOODS_REQUISITION_PDF_DATA, GOODS_REQUISITION_REPORT_DATA} from "@mocks/export-data/production/transactions";
import {GoodsRequisition} from "@mocks/models/production/transactions";
@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: GoodsRequisition[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private spinner: SpinnerService,
        private goodReqService: GoodsRequisitionService,
        private exportExcelService: ExportExcelService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.GRStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.GRStatus == "Opened" && action == "view") ||
        //     (u.GRStatus == "Opened" && action == "edit") ||
        //     (u.GRStatus == "Opened" && action == "approve") ||
        //     (u.GRStatus == "Opened" && action == "reject") ||
        //     (u.GRStatus == "Approved" && action == "view") ||
        //     (u.GRStatus == "Rejected" && action == "view") ||
        //     action == "create"
        // ) {
        //     this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
        //     return;
        // } else {
        //     return null;
        // }
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
        this.subscription = this.goodReqService.getAll(payload).subscribe(success => {
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
        let outPut = GOODS_REQUISITION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(GOODS_REQUISITION_REPORT_DATA(data));
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
