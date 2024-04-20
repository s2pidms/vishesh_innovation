import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SupplierEvaluationService} from "@services/purchase";
import {Subscription} from "rxjs";
import {ExportExcelService, SpinnerService} from "@core/services";
import {SUPPLIER_EVALUATION_MONTHS_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {supplierEvaluationMonths} from "@mocks/models/purchase/reports";

@Component({
    selector: "app-supplier-evaluation-month",
    templateUrl: "./supplier-evaluation-month.component.html"
})
export class SupplierEvaluationMonthComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;

    column: string = "_id";
    page: number = 1;
    pageSize: number = 12;
    direction: any = -1;
    tableData: supplierEvaluationMonths[] = [];
    evaluationData: any;
    data: any = [];
    supplierId = "";
    supplierName: any = "";
    subscription!: Subscription;
    constructor(
        private supplierEvaluationService: SupplierEvaluationService,
        private spinner: SpinnerService,
        public activeModal: NgbActiveModal,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private exportExcelService: ExportExcelService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.evaluationData = JSON.parse(params?.u);
            this.supplierId = this.evaluationData?._id;
            this.supplierName = this.evaluationData?.supplierName;
        });
        this.getAll();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    getAll() {
        this.spinner.show();
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.supplierEvaluationService
            .getMonthlyEvaluationBySupplierId(this.supplierId)
            .subscribe(success => {
                this.tableData = success.rows.map((x: any) => {
                    x._id = x._id.split("-")[1] + "-" + x._id.split("-")[0];
                    return x;
                });
                this.tableData = this.tableData.sort((a: any, b: any) => {
                    return +new Date(a._id) - +new Date(b._id);
                });
                this.data = success.supplierRuleList;
                this.spinner.hide();
            });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SUPPLIER_EVALUATION_MONTHS_REPORT_DATA(data));
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
