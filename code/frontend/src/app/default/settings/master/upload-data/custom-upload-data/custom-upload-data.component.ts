import {Component, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import * as fs from "file-saver";
import {SuppliersService} from "@services/purchase";
import {CustomUploadDetailsComponent} from "../custom-upload-details/custom-upload-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent} from "@shared/modals";
import {ActivatedRoute} from "@angular/router";
import TABLE_HEADERS_FOR_SUPPLIER from "./tableHeadersForSupplier";
import TABLE_HEADERS_FOR_ITEMS from "./tableHeadersForItems";
import TABLE_HEADERS_FOR_CUSTOMER from "./tableHeadersForCustomer";
import TABLE_HEADERS_FOR_INVENTORY from "./tableHeadersForInventory";
import TABLE_HEADERS_FOR_EMPLOYEE from "./tableHeadersForEmployee";
import TABLE_HEADERS_FOR_SKU_MASTER from "./tableHeadersForSKUMaster";
import TABLE_HEADERS_FOR_FGIN from "./tableHeadersForFGIN";
import TABLE_HEADERS_FOR_ASSET from "./tableHeadersForAsset";

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
    dataSuccessUpload = false;
    approvedFlag = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    inValidRecords: any = [];
    validRecords: any = [];
    tableHead: any = [];
    type: any = "";
    ngOnInit(): void {
        this.type = this.activatedRoute.snapshot.paramMap.get("uploadParameter");
        if (this.type == "Supplier") {
            this.tableHead = TABLE_HEADERS_FOR_SUPPLIER;
        } else if (this.type == "Items") {
            this.tableHead = TABLE_HEADERS_FOR_ITEMS;
        } else if (this.type == "Customer") {
            this.tableHead = TABLE_HEADERS_FOR_CUSTOMER;
        } else if (this.type == "InventoryCorrection") {
            this.tableHead = TABLE_HEADERS_FOR_INVENTORY;
        } else if (this.type == "Employee") {
            this.tableHead = TABLE_HEADERS_FOR_EMPLOYEE;
        } else if (this.type == "SKUMaster") {
            this.tableHead = TABLE_HEADERS_FOR_SKU_MASTER;
        } else if (this.type == "FGIN") {
            this.tableHead = TABLE_HEADERS_FOR_FGIN;
        } else if (this.type == "Asset") {
            this.tableHead = TABLE_HEADERS_FOR_ASSET;
        }
    }

    fileChosen(event: any) {
        if (event.target.value) {
            if (event.target.files[0].size > 2000000) {
                this.toastService.warning("Unable to upload file of size more than 2MB");
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
        let text = "";
        if (this.type == "Supplier") {
            text = "./assets/upload-data-excel-csv/supplier.csv";
        } else if (this.type == "Items") {
            text = "./assets/upload-data-excel-csv/item.csv";
        } else if (this.type == "Customer") {
            text = "./assets/upload-data-excel-csv/customer.csv";
        } else if (this.type == "InventoryCorrection") {
            text = "./assets/upload-data-excel-csv/inventory.csv";
        } else if (this.type == "Employee") {
            text = "./assets/upload-data-excel-csv/employee.csv";
        } else if (this.type == "SKUMaster") {
            text = "./assets/upload-data-excel-csv/SKU.csv";
        } else if (this.type == "FGIN") {
            text = "./assets/upload-data-excel-csv/FGIN.csv";
        } else if (this.type == "Asset") {
            text = "./assets/upload-data-excel-csv/asset.csv";
        }
        fs.saveAs(text);
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

        modalRef.result.then(
            (success: any) => {
                if (success) {
                }
            },
            (reason: any) => {}
        );
    }

    openValidRecordsModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        // modalRef.componentInstance.action = this.action;
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
