import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SKUService} from "@services/sales";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SKU_MASTER_PDF_DATA, SKU_MASTER_REPORT_DATA} from "@mocks/export-data/sales/master";
import {salesSKU} from "@mocks/models/sales/master";

export interface skuAllData {
    _id: string;
    SKUNo: string;
    SKUName: any;
    SKUDescription: string;
    hsn: string;
    primaryUnit: string;
    shelfLife: number;
    drawingArtWorkFile: string;
    drawingArtWorkFileUrl: string;
    productionLayoutFile: string;
    productionLayoutFileUrl: string;
    artWorkNo: any;
    productCategory: any;
}
@Component({
    selector: "app-sku-list",
    templateUrl: "./sku-list.component.html"
})
export class SKUListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    SKUName: any;
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "SKUNo";
    direction: number = -1;
    search: string = "";
    tableData: salesSKU[] = [];
    originTableData: skuAllData[] = [];
    imgIcon: boolean = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private SKUServices: SKUService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        if (u.isActive == "I" && action == "copy") {
            return null;
        } else {
            this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
            return;
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
        this.subscription = this.SKUServices.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    pdfDownload(data: any) {
        let outPut = SKU_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SKU_MASTER_REPORT_DATA(data));
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
