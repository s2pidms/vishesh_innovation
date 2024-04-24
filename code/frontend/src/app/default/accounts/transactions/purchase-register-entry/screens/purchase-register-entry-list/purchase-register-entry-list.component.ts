import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService, ToastService, UtilityService} from "@core/services";
import {PurchaseRegisterService} from "@services/accounts/purchaseRegister.service";
import {PurchaseRegisterEntry} from "@mocks/models/accounts/reports";
import {
    PURCHASE_REGISTER_PDF_DATA,
    PURCHASE_REGISTER_REPORT_DATA
} from "@mocks/export-data/accounts/transactions/purchaseRegisterEntry";

@Component({
    selector: "app-purchase-register-entry-list",
    templateUrl: "./purchase-register-entry-list.component.html"
})
export class PurchaseRegisterEntryListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: PurchaseRegisterEntry[] = [];
    dataForExcel: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private purchaseRegisterService: PurchaseRegisterService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private utilityService: UtilityService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.status,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
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
        this.subscription = this.purchaseRegisterService.getAll(payload).subscribe(success => {
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
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(PURCHASE_REGISTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = PURCHASE_REGISTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }
    update(u: any, action: string) {
        if (u?.status != "Cancelled") {
            this.spinner.show();
            this.purchaseRegisterService.update(u._id, {_id: u._id, status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
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
