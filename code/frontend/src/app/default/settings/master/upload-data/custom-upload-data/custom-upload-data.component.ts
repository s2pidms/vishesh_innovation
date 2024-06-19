import {Component, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {SuppliersService} from "@services/purchase";
import {CustomUploadDetailsComponent} from "../custom-upload-details/custom-upload-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent} from "@shared/modals";
import {ActivatedRoute} from "@angular/router";
import TABLE_HEADERS_FOR_SUPPLIER from "../tableHeaders/tableHeadersForSupplier";
import TABLE_HEADERS_FOR_ITEMS from "../tableHeaders/tableHeadersForItems";
import TABLE_HEADERS_FOR_CUSTOMER from "../tableHeaders/tableHeadersForCustomer";
import TABLE_HEADERS_FOR_INVENTORY from "../tableHeaders/tableHeadersForInventory";
import TABLE_HEADERS_FOR_EMPLOYEE from "../tableHeaders/tableHeadersForEmployee";
import TABLE_HEADERS_FOR_SKU_MASTER from "../tableHeaders/tableHeadersForSKUMaster";
import TABLE_HEADERS_FOR_FGIN from "../tableHeaders/tableHeadersForFGIN";
import TABLE_HEADERS_FOR_ASSET from "../tableHeaders/tableHeadersForAsset";
import TABLE_HEADERS_FOR_SKU_DIMENSIONS from "../tableHeaders/tableHeadersForSKUDimensions";
import TABLE_HEADERS_FOR_SKU_MATERIAL from "../tableHeaders/tableHeadersForSKUMaterial";
import TABLE_HEADERS_FOR_SPECIFICATION_MASTER from "../tableHeaders/tableHeadersForSpecificationMaster";
import TABLE_HEADERS_FOR_HSN_MASTER from "../tableHeaders/tableHeadersForHSNMaster";
import TABLE_HEADERS_FOR_SAC_MASTER from "../tableHeaders/tableHeadersForSACMaster";
import TABLE_HEADERS_FOR_SALES_HSN_MASTER from "../tableHeaders/tableHeadersForSalesHSNMaster";
import TABLE_HEADERS_FOR_SALES_SAC_MASTER from "../tableHeaders/tableHeadersForSalesSACMaster";
import TABLE_HEADERS_FOR_TRANSPORTER_MASTER from "../tableHeaders/tableHeadersForTransporterMaster";
import TABLE_HEADERS_FOR_PURCHASE_REGISTER_ENTRY from "../tableHeaders/tableHeadersForPurchaseRegisterEntry";
import TABLE_HEADERS_FOR_JOB_WORK_ITEM_MASTER from "../tableHeaders/tableHeadersForJobWorkItemMaster";
import TABLE_HEADERS_FOR_JOB_WORKER_MASTER from "../tableHeaders/tableHeadersForJobWorkerMaster";
import TABLE_HEADERS_FOR_PPIC_INVENTORY from "../tableHeaders/tableHeadersForPPICInventory";
import TABLE_HEADERS_FOR_RM_SPECIFICATION from "../tableHeaders/tableHeadersForRMSpecification";
import TABLE_HEADERS_FOR_PRODUCT_SPECIFICATION from "../tableHeaders/tableHeadersForProductSpecification";

@Component({
    selector: "app-custom-upload-data",
    templateUrl: "./custom-upload-data.component.html",
    styleUrls: ["./custom-upload-data.component.scss"]
})
export class CustomUploadDataComponent implements OnInit {
    constructor(
        private spinner: SpinnerService,
        private suppliersService: SuppliersService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute
    ) {}
    file: any = null;
    fileName = "";
    fileSuccessUpload = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    inValidRecords: any = [];
    validRecords: any = [];
    tableHead: any = [];
    type: any = "";
    ngOnInit(): void {
        this.type = this.activatedRoute.snapshot.paramMap.get("uploadParameter");
        const tableHeadersMapping: any = {
            Supplier: TABLE_HEADERS_FOR_SUPPLIER,
            Items: TABLE_HEADERS_FOR_ITEMS,
            Customer: TABLE_HEADERS_FOR_CUSTOMER,
            InventoryCorrection: TABLE_HEADERS_FOR_INVENTORY,
            Employee: TABLE_HEADERS_FOR_EMPLOYEE,
            SKUMaster: TABLE_HEADERS_FOR_SKU_MASTER,
            FGIN: TABLE_HEADERS_FOR_FGIN,
            Asset: TABLE_HEADERS_FOR_ASSET,
            SKUDimensions: TABLE_HEADERS_FOR_SKU_DIMENSIONS,
            SKUMaterial: TABLE_HEADERS_FOR_SKU_MATERIAL,
            SpecificationMaster: TABLE_HEADERS_FOR_SPECIFICATION_MASTER,
            HSN: TABLE_HEADERS_FOR_HSN_MASTER,
            SAC: TABLE_HEADERS_FOR_SAC_MASTER,
            SaleHSN: TABLE_HEADERS_FOR_SALES_HSN_MASTER,
            SaleSAC: TABLE_HEADERS_FOR_SALES_SAC_MASTER,
            Transporter: TABLE_HEADERS_FOR_TRANSPORTER_MASTER,
            JobWorkerMaster: TABLE_HEADERS_FOR_JOB_WORKER_MASTER,
            PurchaseRegisterEntry: TABLE_HEADERS_FOR_PURCHASE_REGISTER_ENTRY,
            JobWorkItemMaster: TABLE_HEADERS_FOR_JOB_WORK_ITEM_MASTER,
            PPICInventoryCorrection: TABLE_HEADERS_FOR_PPIC_INVENTORY,
            RMSpecification: TABLE_HEADERS_FOR_RM_SPECIFICATION,
            ProductSpecification: TABLE_HEADERS_FOR_PRODUCT_SPECIFICATION
        };
        this.tableHead = tableHeadersMapping[this.type] || null;
    }

    fileChosen(event: any) {
        if (event.target.value) {
            if (event.target.files[0].size > 500000) {
                this.toastService.warning("Unable to upload file of size more than 500KB");
                return;
            }
            this.file = <File>event.target.files[0];
            this.fileName = this.file.name;
        }
    }

    removeFile() {
        this.fileName = "";
        this.file = "";
        this.inValidRecords = [];
        this.validRecords = [];
    }

    submit() {
        let formValue = new FormData();
        if (this.file && typeof this.file == "object") {
            formValue.append("key", "excelData");
            formValue.append("collectionName", this.type);
            formValue.append("uploadFile", this.file, this.file.name);
        } else {
            this.toastService.warning(`Please Upload File`);
            return;
        }
        this.spinner.show();
        this.suppliersService.uploadAndCheckCSVFile(formValue).subscribe(success => {
            this.inValidRecords = success?.inValidRecords;
            this.validRecords = success?.validRecords;
            if (this.inValidRecords?.length > 0) {
                this.openInvalidSupplierRecordsModal();
            } else {
                this.openValidRecordsModal();
            }
            this.spinner.hide();
        });
    }
    uploadData() {
        this.spinner.show();
        let payload = {
            collectionName: this.type,
            validRecords: this.validRecords
        };
        this.suppliersService.bulkInsertByCSVFile(payload).subscribe(success => {
            console.log("success", success);
            this.toastService.success(success.message);
            this.removeFile();
            this.spinner.hide();
        });
    }

    downloadCSVFormat() {
        const typeMappings: any = {
            Supplier: {path: "./assets/upload-data-excel-csv/supplier.csv", filename: "Upload Suppliers"},
            Items: {path: "./assets/upload-data-excel-csv/item.csv", filename: "Upload Items"},
            Customer: {path: "./assets/upload-data-excel-csv/customer.csv", filename: "Upload Customer"},
            InventoryCorrection: {path: "./assets/upload-data-excel-csv/inventory.csv", filename: "Validate Inventory"},
            Employee: {path: "./assets/upload-data-excel-csv/employee.csv", filename: "Upload Employee"},
            SKUMaster: {path: "./assets/upload-data-excel-csv/SKU.csv", filename: "Upload SKU Master"},
            FGIN: {path: "./assets/upload-data-excel-csv/FGIN.csv", filename: "Upload FGIN"},
            Asset: {path: "./assets/upload-data-excel-csv/asset.csv", filename: "Upload Asset"},
            SKUDimensions: {path: "./assets/upload-data-excel-csv/SKUDimension.csv", filename: "Upload SKU Dimensions"},
            SKUMaterial: {path: "./assets/upload-data-excel-csv/SKUMaterial.csv", filename: "Upload SKU Material"},
            SpecificationMaster: {
                path: "./assets/upload-data-excel-csv/specificationMaster.csv",
                filename: "Upload Specification Master"
            },
            HSN: {path: "./assets/upload-data-excel-csv/HSN.csv", filename: "Upload HSN Master"},
            SAC: {path: "./assets/upload-data-excel-csv/SAC.csv", filename: "Upload SAC Master"},
            SaleHSN: {path: "./assets/upload-data-excel-csv/salesHSN.csv", filename: "Upload Sales HSN Master"},
            SaleSAC: {path: "./assets/upload-data-excel-csv/salesSAC.csv", filename: "Upload Sales SAC Master"},
            Transporter: {
                path: "./assets/upload-data-excel-csv/transporter.csv",
                filename: "Upload Transporter Master"
            },
            JobWorkerMaster: {
                path: "./assets/upload-data-excel-csv/jobWorker.csv",
                filename: "Upload Job Worker Master"
            },
            PurchaseRegisterEntry: {
                path: "./assets/upload-data-excel-csv/purchaseRegisterEntry.csv",
                filename: "Upload Purchase Register Entry"
            },
            JobWorkItemMaster: {
                path: "./assets/upload-data-excel-csv/jobWorkItem.csv",
                filename: "Upload Job Work Item Master"
            },
            PPICInventoryCorrection: {
                path: "./assets/upload-data-excel-csv/PPICInventory.csv",
                filename: "Upload PPIC Inventory"
            },
            RMSpecification: {
                path: "./assets/upload-data-excel-csv/RMSpecification.csv",
                filename: "Upload RM Specification Master"
            },
            ProductSpecification: {
                path: "./assets/upload-data-excel-csv/ProdSpecification.csv",
                filename: "Upload Product Specification Master"
            }
        };

        const mapping = typeMappings[this.type];

        if (mapping) {
            const link = document.createElement("a");
            link.href = mapping.path;
            link.download = `${mapping.filename}.csv`;
            link.click();
            document.body.removeChild(link);
        }
    }

    openInvalidSupplierRecordsModal() {
        const modalRef = this.modalService.open(CustomUploadDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.title = `Invalid ${
            this.type == "InventoryCorrection" ? "Validate Inventory" : this.type
        } Records`;
        modalRef.componentInstance.type = this.type;
        modalRef.componentInstance.tableHead = this.tableHead;
        modalRef.componentInstance.inValidRecords = this.inValidRecords;
    }

    openValidRecordsModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.heading = "Upload Data";
        modalRef.componentInstance.cancelText = `Do You Want to Upload ${
            this.type == "InventoryCorrection" ? "Validate Inventory" : this.type
        } Records ?`;
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.uploadData();
                }
            },
            (reason: any) => {}
        );
    }
}
