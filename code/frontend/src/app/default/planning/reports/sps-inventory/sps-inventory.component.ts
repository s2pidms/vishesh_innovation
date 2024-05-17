import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {PurchaseOrderService} from "@services/purchase";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {PPV_PDF_DATA, PPV_REPORT_DATA} from "@mocks/export-data/purchase/reports";
import {InventoryCorrectionService} from "@services/stores";
import {AddItemUOMComponent} from "@shared/modals";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SPS_INVENTORY_PDF_DATA, SPS_INVENTORY_REPORT_DATA} from "@mocks/export-data/planning/reports";

@Component({
    selector: "app-sps-inventory",
    templateUrl: "./sps-inventory.component.html"
})
export class SpsInventoryComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    [x: string]: any;
    constructor(
        private inventoryCorrectionService: InventoryCorrectionService,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private modalService: NgbModal,
        private appGlobalService: AppGlobalService
    ) {}

    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    submitted = false;
    supplierOptions: any = [];
    itemCategoryOptions: any = [];
    UOMUintMasterOptions: any = [];
    WXLDimensionsUnit: any = [];
    itemCategory: any = [];
    supplierId: string = "";
    fromDate: any = "";
    toDate: any = "";
    closingInventory: any = 0;
    planningValue: any = 0;
    productionValue: any = 0;
    subscription!: Subscription;
    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.UOMUintMasterOptions = this.appGlobalService.UOMUintMasterOptions;
        this.getFiscalDate();
        this.getAll();
    }

    getFiscalDate() {
        let monthDates = this.utilityService.getCurrentFiscalYearDates();

        this.fromDate = this.utilityService.getFormatDate(monthDates.fromDate, "YYYY-MM-DD");
        this.toDate = this.utilityService.getFormatDate(monthDates.toDate, "YYYY-MM-DD");
    }

    navigateTo(path: string, id: any, action: any) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    setUnit(item: any) {
        let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);

        if (this.tableData[index].UOM == item.secondaryUnit) {
            this.tableData[index].UOM = item.primaryUnit;
        } else {
            this.tableData[index].UOM = item.secondaryUnit;
        }

        let Quantity =
            this.utilityService.setConversion({
                UOM: this.tableData[index].UOM,
                quantity: item.closedIRQty,
                primaryUnit: item.primaryUnit,
                secondaryUnit: item.secondaryUnit,
                primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            }) || 0;

        this.tableData[index].closedIRQty = ["SHT"].includes(this.tableData[index].UOM)
            ? +Quantity.toFixed(0)
            : +Quantity;

        this.calClosingInventory();
    }

    openUOMDetailsModal(item: any) {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = "view";
        modalRef.componentInstance.PSPInventory = true;
        modalRef.componentInstance.ModalUOMsUnit = this.UOMUintMasterOptions;
        modalRef.componentInstance.flag = true;
        modalRef.componentInstance.dimensionData = {
            width: item?.width,
            length: item?.length,
            widthUnit: item?.widthUnit,
            lengthUnit: item?.lengthUnit
        };
        modalRef.componentInstance.WXLDimensionsUnit = this.WXLDimensionsUnit;
        modalRef.componentInstance.dualUnits = {
            primaryUnit: item?.primaryUnit,
            secondaryUnit: item?.secondaryUnit,
            unitConversionFlag: item?.unitConversionFlag ?? 1,
            primaryConversion: item?.primaryConversion ?? 1,
            secondaryConversion: item?.secondaryConversion,
            primaryToSecondaryConversion: item?.primaryToSecondaryConversion,
            secondaryToPrimaryConversion: item?.secondaryToPrimaryConversion
        };
        modalRef.result.then(
            (success: any) => {},
            (reason: any) => {}
        );
    }

    reset() {
        this.getFiscalDate();
        this.itemCategory = "";
        this.supplierId = "";
        this.getAll();
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
            excel: excel,
            supplier: this.supplierId,
            fromDate: this.fromDate,
            toDate: this.toDate
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.inventoryCorrectionService
            .getStockPreparationShopReports(payload)
            .subscribe(success => {
                if (flag == "EXCEL") {
                    this.excelDownload(success.rows);
                } else if (flag == "PDF") {
                    this.pdfDownload(success.rows);
                } else {
                    this.tableData = success?.rows?.map((x: any, index: number) => {
                        x.itemLineNumber = index + 1;
                        x.closedIRQtyForSQM = x?.closedIRQty;
                        return x;
                    });
                    this.WXLDimensionsUnit = success.WXLDimensionsUnit;
                    this.collection = success.count;
                    this.calClosingInventory();
                }
                this.spinner.hide();
            });
    }

    calClosingInventory() {
        this.planningValue = this.tableData?.filter(
            (x: any) => x?.itemCode.toUpperCase() == this.search.toUpperCase() && x?.department == "Planning"
        );
        if (this.planningValue?.length > 0) {
            this.planningValue = this.planningValue
                ?.map((y: any) => y?.closedIRQtyForSQM)
                ?.reduce((a: any, c: any) => +a + +c);
        } else {
            this.planningValue = 0;
        }
        this.productionValue = this.tableData?.filter(
            (x: any) => x?.itemCode.toUpperCase() == this.search.toUpperCase() && x?.department == "Production"
        );
        if (this.productionValue?.length > 0) {
            this.productionValue = this.productionValue
                ?.map((y: any) => y?.closedIRQtyForSQM)
                ?.reduce((a: any, c: any) => +a + +c);
        } else {
            this.productionValue = 0;
        }

        this.closingInventory = +(+this.planningValue - +this.productionValue).toFixed(2);
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SPS_INVENTORY_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SPS_INVENTORY_PDF_DATA(data);
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
}
