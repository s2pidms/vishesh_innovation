import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StatusSummaryModalComponent} from "../components/status-summary-modal/status-summary-modal.component";
import {ItemsService} from "@services/purchase";
import {STOCK_LEVELS_PDF_DATA, STOCK_LEVELS_REPORT_DATA} from "@mocks/export-data/planning/master/stockLevels";

@Component({
    selector: "app-stock-level-list",
    templateUrl: "./stock-level-list.component.html"
})
export class StockLevelListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "itemCode";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    totalAmounts = {};
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal,
        private itemsService: ItemsService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, item: any, action: string) {
        if (
            (item.status == "Inactive" && action == "stock") ||
            (item.status == "Active" && ["edit", "view"].includes(action))
        ) {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: item?._id, action}});
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
            excel: excel,
            type: "Inks"
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.itemsService.getAllForStockLevels(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success?.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success?.rows);
            } else {
                this.tableData = success?.rows;
                this.totalAmounts = success?.totalAmounts;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(STOCK_LEVELS_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = STOCK_LEVELS_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    openStatusSummaryModal() {
        const modalRef = this.modalService.open(StatusSummaryModalComponent, {
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
