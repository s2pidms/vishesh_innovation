import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    UPLOAD_DATA_FOR_CUSTOMER_INVENTORY,
    UPLOAD_DATA_FOR_ITEM_INVENTORY,
    UPLOAD_DATA_FOR_PPIC_INVENTORY,
    UPLOAD_DATA_FOR_SUPPLIER_INVENTORY,
    UPLOAD_DATA_FOR_VALIDATE_INVENTORY,
    UPLOAD_DATA_FOR_VALIDATE_SKU,
    UPLOAD_DATA_FOR_JOB_WORK_ITEM_MASTER,
    UPLOAD_DATA_FOR_PURCHASE_REGISTER_ENTRY,
    UPLOAD_DATA_FOR_JOB_WORKER_MASTER_ENTRY,
    UPLOAD_DATA_FOR_TRANSPORTER_MASTER_ENTRY,
    UPLOAD_DATA_FOR_SALES_SAC_MASTER,
    UPLOAD_DATA_FOR_SALES_HSN_MASTER,
    UPLOAD_DATA_FOR_PURCHASE_HSN_MASTER,
    UPLOAD_DATA_FOR_PURCHASE_SAC_MASTER,
    UPLOAD_DATA_FOR_SPECIFICATION_MASTER,
    UPLOAD_DATA_FOR_SKU_MATERIAL_MASTER,
    UPLOAD_DATA_FOR_SKU_DIMENSION_MASTER,
    UPLOAD_DATA_FOR_ASSET_MASTER,
    UPLOAD_DATA_FOR_FGIN,
    UPLOAD_DATA_FOR_EMPLOYEE_MASTER
} from "@mocks/export-data/settings/masters";
import {ExportExcelService} from "@core/services";

@Component({
    selector: "app-custom-upload-details",
    templateUrl: "./custom-upload-details.component.html"
})
export class CustomUploadDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() title: any = "";
    @Input() type: any = "";
    @Input() inValidRecords: any = [];
    @Input() tableHead: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    constructor(public activeModal: NgbActiveModal, private exportExcelService: ExportExcelService) {}

    ngOnInit(): void {
        this.collection = this.inValidRecords.length;
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                // this.excelDownload();
                const downloadFunctions: any = {
                    Supplier: this.excelDownloadForSupplier,
                    Items: this.excelDownloadForItem,
                    Customer: this.excelDownloadForCustomer,
                    InventoryCorrection: this.excelDownloadForInventory,
                    SKUMaster: this.excelDownloadForSKU,
                    PPICInventoryCorrection: this.excelDownloadForPPICInventory,
                    JobWorkItemMaster: this.excelDownloadForJobWorkItemMaster,
                    PurchaseRegisterEntry: this.excelDownloadForPurchaseRegisterEntry,
                    JobWorkerMaster: this.excelDownloadForJobWorkerMaster,
                    Transporter: this.excelDownloadForTransporterMaster,
                    SaleSAC: this.excelDownloadForSalesSAC,
                    SaleHSN: this.excelDownloadForSalesHSN,
                    HSN: this.excelDownloadForPurchaseHSN,
                    SAC: this.excelDownloadForPurchaseSAC,
                    SpecificationMaster: this.excelDownloadForSpecificationMaster,
                    SKUMaterial: this.excelDownloadForSKUMaterialMaster,
                    SKUDimensions: this.excelDownloadForSKUDimensionMaster,
                    Asset: this.excelDownloadForAssetMaster,
                    FGIN: this.excelDownloadForFGIN,
                    Employee: this.excelDownloadForEmployeeMaster
                };

                const downloadFunction = downloadFunctions[this.type];
                if (downloadFunction) {
                    downloadFunction.call(this);
                }
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    excelDownloadForInventory() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_VALIDATE_INVENTORY(this.inValidRecords));
    }
    excelDownloadForSKU() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_VALIDATE_SKU(this.inValidRecords));
    }
    excelDownloadForItem() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_ITEM_INVENTORY(this.inValidRecords));
    }
    excelDownloadForCustomer() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_CUSTOMER_INVENTORY(this.inValidRecords));
    }
    excelDownloadForSupplier() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SUPPLIER_INVENTORY(this.inValidRecords));
    }
    excelDownloadForPPICInventory() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_PPIC_INVENTORY(this.inValidRecords));
    }
    excelDownloadForJobWorkItemMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_JOB_WORK_ITEM_MASTER(this.inValidRecords));
    }
    excelDownloadForPurchaseRegisterEntry() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_PURCHASE_REGISTER_ENTRY(this.inValidRecords));
    }
    excelDownloadForJobWorkerMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_JOB_WORKER_MASTER_ENTRY(this.inValidRecords));
    }
    excelDownloadForTransporterMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_TRANSPORTER_MASTER_ENTRY(this.inValidRecords));
    }
    excelDownloadForSalesSAC() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SALES_SAC_MASTER(this.inValidRecords));
    }
    excelDownloadForSalesHSN() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SALES_HSN_MASTER(this.inValidRecords));
    }
    excelDownloadForPurchaseHSN() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_PURCHASE_HSN_MASTER(this.inValidRecords));
    }
    excelDownloadForPurchaseSAC() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_PURCHASE_SAC_MASTER(this.inValidRecords));
    }
    excelDownloadForSpecificationMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SPECIFICATION_MASTER(this.inValidRecords));
    }
    excelDownloadForSKUMaterialMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SKU_MATERIAL_MASTER(this.inValidRecords));
    }
    excelDownloadForSKUDimensionMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_SKU_DIMENSION_MASTER(this.inValidRecords));
    }
    excelDownloadForAssetMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_ASSET_MASTER(this.inValidRecords));
    }
    excelDownloadForFGIN() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_FGIN(this.inValidRecords));
    }
    excelDownloadForEmployeeMaster() {
        this.exportExcelService.exportExcel(UPLOAD_DATA_FOR_EMPLOYEE_MASTER(this.inValidRecords));
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.inValidRecords = this.inValidRecords;
        } else {
            this.inValidRecords = [...this.inValidRecords].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
