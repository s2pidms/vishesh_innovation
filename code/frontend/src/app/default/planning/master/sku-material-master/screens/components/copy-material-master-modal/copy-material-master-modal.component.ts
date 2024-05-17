import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService} from "@core/services";
import {ActivatedRoute} from "@angular/router";
import {SKUService} from "@services/sales";
@Component({
    selector: "app-copy-material-master-modal",
    templateUrl: "./copy-material-master-modal.component.html",
    styleUrls: ["./copy-material-master-modal.component.scss"]
})
export class CopyMaterialMasterModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() SKUId: any = 0;
    @Input() action: string = "create";
    collection: number = 0;
    page: number = 1;
    pageSize: number = 6;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    active: number = 1;
    isPreview = false;
    tableData: any = [];
    originTableData: any = [];
    productCategories: any = [];
    productCategoriesFilterBy: any = null;
    isConditionPreview = false;
    isESCPreview = false;
    // filterApplied: boolean = false;

    constructor(
        public activeModal: NgbActiveModal,
        private spinner: SpinnerService,
        private skuService: SKUService,
        private activatedRoute: ActivatedRoute,
        private toastService: ToastService
    ) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    dismissModel() {
        let payload: any = {
            SKU: this.SKUId,
            SKUArray: this.tableData.filter((x: any) => x.select)
        };
        this.spinner.show();
        this.skuService.createCopyForSKUMaterialsAttributes(payload).subscribe(success => {
            this.toastService.success(success.message);
            this.spinner.hide();
            this.activeModal.close();
        });
    }

    filterData() {
        this.spinner.show();
        this.tableData = this.originTableData.filter((x: any) => {
            if (x?.productCategory == this.productCategoriesFilterBy) return x;
        });
        this.spinner.hide();
    }
    // applyFilter() {
    //     this.filterApplied = true;
    // }
    reset() {
        this.productCategoriesFilterBy = null;
        this.tableData = this.tableData.map((x: any) => {
            x.select = false;
            return x;
        });
        this.tableData = this.originTableData;
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
            type: "Materials"
        };
        this.skuService.getAllForCopyAttributes(payload).subscribe(success => {
            this.tableData = success;
            this.originTableData = success;
            this.collection = this.tableData?.length;
            this.spinner.hide();
        });
    }
    setAssetData(ev: any) {
        this.tableData = this.tableData.map((x: any) => {
            x.select = ev.target.checked;
            return x;
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.tableData = this.tableData;
        } else {
            this.tableData = [...this.tableData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
