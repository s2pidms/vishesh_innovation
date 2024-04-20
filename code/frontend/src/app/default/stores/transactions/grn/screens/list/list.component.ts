import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {GoodsReceiptNoteService} from "@services/stores";
import {ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {GOODS_RECEIPT_NOTE_PDF_DATA} from "@mocks/export-data/stores/reports";
import {GOODS_RECEIPT_NOTE_REPORT_DATA} from "@mocks/export-data/stores/transactions";
import {StoreGRN} from "../../../../../../mocks/models/stores/transactions";

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
    tableData: StoreGRN[] = [];
    statusArray: any = ["Report Generated", "Closed", "Cancelled"];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private grnServices: GoodsReceiptNoteService,
        private toastService: ToastService,
        private spinner: SpinnerService,
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
            status: u.GRNStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if ((u?.GRNStatus == "Approved" && action == "edit") || (u?.GRNStatus == "Approved" && action == "approve")) {
        //     return null;
        // } else {
        //     this.router.navigate([path], {queryParams: {id: u?._id, action}});
        //     return;
        // }
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

    update(u: any, action: string) {
        if (u?.GRNStatus == "Approved") {
            this.spinner.show();
            this.grnServices.update(u._id, {GRNStatus: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
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
            statusArray: this.statusArray,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.grnServices.getAll(payload).subscribe(success => {
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
        let outPut = GOODS_RECEIPT_NOTE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(GOODS_RECEIPT_NOTE_REPORT_DATA(data));
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
