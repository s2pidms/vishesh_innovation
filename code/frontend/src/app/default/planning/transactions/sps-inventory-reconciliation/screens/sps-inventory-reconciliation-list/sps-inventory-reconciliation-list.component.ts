import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    AppGlobalService,
    ExportExcelService,
    ExportToPDFService,
    SpinnerService,
    ToastService,
    UtilityService
} from "@core/services";
import {InventoryCorrectionService} from "@services/stores";
import {SPS_INVENTORY_PDF_DATA, SPS_INVENTORY_REPORT_DATA} from "@mocks/export-data/planning/reports";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpsDucModalComponent} from "../sps-duc-modal/sps-duc-modal.component";

@Component({
    selector: "app-sps-inventory-reconciliation-list",
    templateUrl: "./sps-inventory-reconciliation-list.component.html",
    styleUrls: ["./sps-inventory-reconciliation-list.component.scss"]
})
export class SpsInventoryReconciliationListComponent implements OnInit, OnDestroy {
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
        private appGlobalService: AppGlobalService,
        private toastService: ToastService
    ) {}

    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any[] = [];
    originTableData: any = [];
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
    recoQty: any = 0;
    wasteQty: any = 0;
    planningValue: any = 0;
    productionValue: any = 0;
    recoPlanningValue: any = 0;
    recoProductionValue: any = 0;
    checkStockRecoFlag: boolean = false;
    isReset: boolean = true;
    isSaved: boolean = true;
    subscription!: Subscription;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    ngOnInit(): void {
        // this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.UOMUintMasterOptions = this.appGlobalService.UOMUintMasterOptions;
        this.getAll();
    }

    navigateTo(path: string, id: any, action: any) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    update() {
        if (
            this.originTableData.some((x: any) => x?.isDeleted) == true &&
            this.tableData.every((x: any) => !x.isEdited)
        ) {
            this.toastService.warning("Pls Edit at least One the record");
            return;
        }

        this.spinner.show();
        this.inventoryCorrectionService.updateSPSInventory(this.originTableData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
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

        // this.calClosingInventory();
    }

    // openUOMDetailsModal(item: any) {
    //     // if (item.isEdited) {
    //     const modalRef = this.modalService.open(SpsDucModalComponent, {
    //         centered: true,
    //         size: "lg",
    //         backdrop: "static",
    //         keyboard: false
    //     });

    //     modalRef.componentInstance.action = action
    //     modalRef.componentInstance.PSPInventory = true;
    //     modalRef.componentInstance.ModalUOMsUnit = this.UOMUintMasterOptions;
    //     modalRef.componentInstance.flag = true;
    //     modalRef.componentInstance.dimensionData = {
    //         width: item?.width,
    //         length: item?.length,
    //         widthUnit: item?.widthUnit,
    //         lengthUnit: item?.lengthUnit
    //     };
    //     modalRef.componentInstance.WXLDimensionsUnit = this.WXLDimensionsUnit;
    //     modalRef.componentInstance.dualUnits = {
    //         primaryUnit: item?.primaryUnit,
    //         secondaryUnit: item?.secondaryUnit,
    //         unitConversionFlag: item?.unitConversionFlag ?? 1,
    //         primaryConversion: item?.primaryConversion ?? 1,
    //         secondaryConversion: item?.secondaryConversion,
    //         primaryToSecondaryConversion: item?.primaryToSecondaryConversion,
    //         secondaryToPrimaryConversion: item?.secondaryToPrimaryConversion
    //     };
    //     modalRef.result.then(
    //         (success: any) => {},
    //         (reason: any) => {}
    //     );
    //     // }
    // }

    openUOMDetailsModal(item: any) {
        const modalRef = this.modalService.open(SpsDucModalComponent, {
            centered: true,
            // windowClass: "custom-modal-sm",
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = item?.isAction;
        modalRef.componentInstance.dualUnits = {
            primaryUnit: item?.primaryUnit,
            itemCode: item?.itemCode,
            secondaryUnit: item?.secondaryUnit ?? "sqm",
            primaryConversion: item?.primaryConversion ?? 1,
            primaryToSecondaryConversion: item?.primaryToSecondaryConversion ?? null,
            secondaryToPrimaryConversion: item?.secondaryToPrimaryConversion ?? null,
            itemDescription: item?.itemDescription,
            widthUnit: item?.widthUnit ?? "mm",
            lengthUnit: item?.lengthUnit ?? item?.primaryUnit == "SHT" ? "mm" : "m",
            unitConversionFlag: item?.unitConversionFlag ?? 1,
            width: item?.width,
            length: item?.length,
            U1Qty: item?.U1Qty ?? 1,
            U2Qty: item?.U2Qty ?? item?.primaryToSecondaryConversion
            // width: item?.width ?? this.dimensionsDetails.layoutDimensions?.width,
            // length: item?.length ?? this.dimensionsDetails.layoutDimensions?.length
        };
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);

                    this.tableData[index].UOM = success?.secondaryUnit;
                    this.tableData[index].closedIRQty = success?.U2Qty;
                    this.tableData[index].closedIRQtyForSQM = success?.U2Qty;
                    this.tableData[index].primaryUnit = success?.primaryUnit;
                    this.tableData[index].secondaryUnit = success?.secondaryUnit;
                    this.tableData[index].primaryConversion = success?.primaryConversion;
                    this.tableData[index].primaryToSecondaryConversion = success?.primaryToSecondaryConversion;
                    this.tableData[index].secondaryToPrimaryConversion = success?.secondaryToPrimaryConversion;
                    this.tableData[
                        index
                    ].conversionOfUnits = `1 ${success?.primaryUnit} - ${success?.primaryToSecondaryConversion} ${success?.secondaryUnit}`;
                    // this.tableData[index].childItemDescription = success?.childItemDescription;
                    this.tableData[index].itemDescription = success?.itemDescription;
                    this.tableData[index].widthUnit = success?.widthUnit;
                    this.tableData[index].lengthUnit = success?.lengthUnit;
                    this.tableData[index].width = success?.width;
                    this.tableData[index].length = success?.length;
                    this.tableData[index].formType = "Child";

                    this.calRecoQty();
                    this.wasteQty = +(this.closingInventory - this.recoQty).toFixed(2);

                    let originIndex = this.originTableData.map((x: any) => x._id).indexOf(item._id);
                    this.originTableData[originIndex].UOM = success?.secondaryUnit;
                    this.originTableData[originIndex].closedIRQty = success?.U2Qty;
                    this.originTableData[originIndex].closedIRQtyForSQM = success?.U2Qty;
                    this.originTableData[originIndex].primaryUnit = success?.primaryUnit;
                    this.originTableData[originIndex].secondaryUnit = success?.secondaryUnit;
                    this.originTableData[originIndex].primaryConversion = success?.primaryConversion;
                    this.originTableData[originIndex].primaryToSecondaryConversion =
                        success?.primaryToSecondaryConversion;
                    this.originTableData[originIndex].secondaryToPrimaryConversion =
                        success?.secondaryToPrimaryConversion;
                    this.originTableData[
                        originIndex
                    ].conversionOfUnits = `1 ${success?.primaryUnit} - ${success?.primaryToSecondaryConversion} ${success?.secondaryUnit}`;
                    // this.originTableData[originIndex].childItemDescription = success?.childItemDescription;
                    this.originTableData[originIndex].itemDescription = success?.itemDescription;
                    this.originTableData[originIndex].widthUnit = success?.widthUnit;
                    this.originTableData[originIndex].lengthUnit = success?.lengthUnit;
                    this.originTableData[originIndex].width = success?.width;
                    this.originTableData[originIndex].length = success?.length;
                    this.originTableData[originIndex].formType = "Child";
                }
            },
            (reason: any) => {}
        );
    }

    reset() {
        this.search = "";
        this.checkStockRecoFlag = false;
        this.wasteQty = 0;
        this.closingInventory = 0;
        this.recoQty = 0;
        this.getAll();
    }

    filterData() {
        this.spinner.show();
        this.tableData = this.originTableData.filter((x: any) => {
            // if (x?.itemCode == this.search) return x;

            if (x?.itemCode.includes(this.search)) return x;
        });
        this.spinner.hide();
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                this.filterData();
                this.calClosingInventory();
                this.calRecoQty();
                this.checkStockRecoFlag = false;
                this.wasteQty = +(this.closingInventory - this.recoQty).toFixed(2);
                this.collection = this.tableData?.length;
                break;
            case "PDF":
                this.getAll(true, "PDF");
                break;
            case "EXCEL":
                this.getAll(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                // this.getAll();
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
        let payload = {};
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.inventoryCorrectionService.getAllStockPreparationShop(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success?.rows?.map((x: any, index: number) => {
                    x.itemLineNumber = index + 1;
                    x.closedIRQtyForSQM = x?.closedIRQty;
                    x.isAction = "view";
                    return x;
                });
                this.originTableData = success?.rows?.map((x: any, index: number) => {
                    x.itemLineNumber = index + 1;
                    x.closedIRQtyForSQM = x?.closedIRQty;
                    return x;
                });
                this.WXLDimensionsUnit = success.WXLDimensionsUnit;
                this.collection = this.tableData?.length;
                this.calClosingInventory();
                this.calRecoQty();
            }
            this.spinner.hide();
        });
    }

    checkStockReco() {
        this.checkStockRecoFlag = true;
        this.calRecoQty();
    }

    deleteInventoryDetails(item: any) {
        let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);
        let originIndex = this.originTableData.map((x: any) => x._id).indexOf(item._id);

        this.tableData[index].isDeleted = true;
        this.tableData[index].closedIRQty = 0;
        this.tableData = this.tableData?.filter((x: any) => !x?.isDeleted);

        this.originTableData[originIndex].isUpdated = "Deleted";
        this.originTableData[originIndex].closedIRQty = 0;

        this.isReset = false;
        this.isSaved = false;

        this.calRecoQty();

        this.wasteQty = +(this.closingInventory - this.recoQty).toFixed(2);
    }
    editInventoryDetails(item: any) {
        let index = this.tableData.map((x: any) => x.itemLineNumber).indexOf(item.itemLineNumber);
        this.tableData[index].isEdited = true;
        this.tableData[index].isAction = "edit";

        let originIndex = this.originTableData.map((x: any) => x._id).indexOf(item._id);

        this.originTableData[originIndex].isUpdated = "Edited";

        this.isReset = false;
        this.isSaved = false;
    }

    calClosingInventory() {
        this.planningValue = this.originTableData?.filter(
            (x: any) => x?.itemCode.toUpperCase() == this.search.toUpperCase() && x?.department == "Planning"
        );
        if (this.planningValue?.length > 0) {
            this.planningValue = this.planningValue
                ?.map((y: any) => y?.closedIRQtyForSQM)
                ?.reduce((a: any, c: any) => +a + +c);
        } else {
            this.planningValue = 0;
        }
        this.productionValue = this.originTableData?.filter(
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

    calRecoQty() {
        this.recoPlanningValue = this.tableData?.filter(
            (x: any) =>
                x?.itemCode.toUpperCase() == this.search.toUpperCase() && x?.department == "Planning" && !x?.isDeleted
        );
        if (this.recoPlanningValue?.length > 0) {
            this.recoPlanningValue = this.recoPlanningValue
                ?.map((y: any) => y?.closedIRQtyForSQM)
                ?.reduce((a: any, c: any) => +a + +c);
        } else {
            this.recoPlanningValue = 0;
        }
        this.recoProductionValue = this.tableData?.filter(
            (x: any) =>
                x?.itemCode.toUpperCase() == this.search.toUpperCase() && x?.department == "Production" && !x?.isDeleted
        );
        if (this.recoProductionValue?.length > 0) {
            this.recoProductionValue = this.recoProductionValue
                ?.map((y: any) => y?.closedIRQtyForSQM)
                ?.reduce((a: any, c: any) => +a + +c);
        } else {
            this.recoProductionValue = 0;
        }

        this.recoQty = +(+this.recoPlanningValue - +this.recoProductionValue).toFixed(2);
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
