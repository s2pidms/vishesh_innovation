import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {AdvanceShipmentNotice} from "@services/dispatch";
import {Subscription} from "rxjs";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ToastService, SpinnerService, ExportToPDFService} from "@core/services";
import {
    ADVANCE_SHIPMENT_NOTICE_PDF_DATA,
    ADVANCE_SHIPMENT_NOTICE_REPORT_DATA
} from "@mocks/export-data/dispatch/transactions";
import {AdvanceShipmentNote} from "@mocks/models/dispatch/transactions";

@Component({
    selector: "app-asn-list",
    templateUrl: "./asn-list.component.html"
})
export class AsnListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: AdvanceShipmentNote[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private advanceShipmentNotice: AdvanceShipmentNotice,
        private router: Router,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    update(id: string, action: string) {
        this.spinner.show();
        this.advanceShipmentNotice.update(id, {ASNStatus: action}).subscribe(success => {
            this.toastService.success(success.message);
            this.getAll();
            this.spinner.hide();
        });
    }

    navigateToPrint(path: string, u: any, action: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}`, "_blank");
    }

    navigateTo(path: string, u: any, action: string) {
        if (
            (u.ASNStatus == "Created" && action == "edit") ||
            (u.ASNStatus == "Created" && action == "view") ||
            action == "create"
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
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.advanceShipmentNotice.getAll(payload).subscribe(success => {
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
    sendMail(id: any) {
        this.spinner.show();
        this.advanceShipmentNotice.sendMailById(id).subscribe(success => {
            this.toastService.success(success.message);
            this.spinner.hide();
        });
    }
    pdfDownload(data: any) {
        let outPut = ADVANCE_SHIPMENT_NOTICE_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(ADVANCE_SHIPMENT_NOTICE_REPORT_DATA(data));
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
