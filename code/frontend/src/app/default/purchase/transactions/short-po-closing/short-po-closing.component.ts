import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {PurchaseOrderService} from "@services/purchase";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoLineComponent} from "./cancel-po-line/cancel-po-line.component";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {SHORT_PO_CLOSING_REPORT_DATA, SHORT_PO_CLOSING_PDF_DATA} from "@mocks/export-data/purchase/transactions";
import {ShortPOClosing} from "@mocks/models/purchase/transactions";

@Component({
    selector: "app-short-po-closing",
    templateUrl: "./short-po-closing.component.html"
})
export class ShortPoClosingComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: ShortPOClosing[] = [];
    statusArray: any = ["Rejected", "GRN Partial Created", "GRN Created", "Closed", "Cancelled"];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private purchaseService: PurchaseOrderService,
        private router: Router,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        public activeModal: NgbActiveModal,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {queryParams: {id: u?._id, action}});
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
            statusArray: this.statusArray,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.purchaseService.getAllShortPOForClosing(payload).subscribe(success => {
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    update(u: any, action: string) {
        if (u?.POStatus === "Approved") {
            u.POStatus = action;

            this.spinner.show();
            this.purchaseService.update(u._id, u).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SHORT_PO_CLOSING_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SHORT_PO_CLOSING_PDF_DATA(data);
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

    openCancelPoModal(u: any) {
        const modalRef = this.modalService.open(CancelPoLineComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.tableData = u;
        modalRef.result.then(
            (success: any) => {
                this.getAll();
            },
            (reason: any) => {}
        );
    }
}
