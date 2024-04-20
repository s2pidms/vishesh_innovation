import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SupplierEvaluationService} from "@services/purchase";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {SupplierEvaluationMonthComponent} from "./supplier-evaluation-month/supplier-evaluation-month.component";

import {ActivatedRoute, Router} from "@angular/router";
import {SUPPLIER_EVALUATION_PDF_DATA, SUPPLIER_EVALUATION_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {SupplierEvaluationR} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-supplier-evaluation-r",
    templateUrl: "./supplier-evaluation-r.component.html"
})
export class SupplierEvaluationRComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: SupplierEvaluationR[] = [];
    subscription!: Subscription;
    constructor(
        private supplierEvaluationService: SupplierEvaluationService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
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
        this.subscription = this.supplierEvaluationService.getMonthlySupplierEvaluation(payload).subscribe(success => {
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
    navigateTo(path: any, u: any) {
        u = JSON.stringify(u);
        this.router.navigate([path], {queryParams: {u}});
    }

    pdfDownload(data: any) {
        let output = SUPPLIER_EVALUATION_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SUPPLIER_EVALUATION_REPORT_DATA(data));
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

    openEvaluationMonthModal(u: any) {
        {
            const modalRef = this.modalService.open(SupplierEvaluationMonthComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.supplierId = u?._id;
            modalRef.componentInstance.supplierName = u?.supplierName;
        }
    }
}
