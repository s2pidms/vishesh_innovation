import {Component, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import * as xlsx from "xlsx";
import * as fs from "file-saver";
import {SuppliersService} from "@services/purchase";
import {CustomUploadDetailsComponent} from "../custom-upload-details/custom-upload-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import TABLE_HEADERS from "./tableHeaders";
import {CancelPoComponent} from "@shared/modals";

@Component({
    selector: "app-supplier-upload-data",
    templateUrl: "./supplier-upload-data.component.html",
    styleUrls: ["./supplier-upload-data.component.scss"]
})
export class SupplierUploadDataComponent implements OnInit {
    constructor(
        private spinner: SpinnerService,
        private suppliersService: SuppliersService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}
    file: any = null;
    date = "";
    fileName = "";
    fileSuccessUpload = false;
    dataSuccessUpload = false;
    approvedFlag = false;
    data: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    inValidRecords: any = [];
    validRecords: any = [];
    ngOnInit(): void {}
    tableHead: any = TABLE_HEADERS;
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
            formValue.append("collectionName", "Supplier");
            formValue.append("uploadFile", this.file, this.file.name);
        } else {
            this.toastService.warning(`Please Upload File`);
            return;
        }
        this.spinner.show();
        this.suppliersService.uploadAndCheckCSVFile(formValue).subscribe(success => {
            this.inValidRecords = success?.inValidRecords;
            this.validRecords = success?.validRecords;
            if (this.inValidRecords.length > 0) {
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
            collectionName: "Supplier",
            validRecords: this.validRecords
        };
        this.suppliersService.bulkInsertByCSVFile(payload).subscribe(success => {
            console.log("success", success);
            this.toastService.success(success.message);
            this.removeFile();
            this.spinner.hide();
        });
    }

    downloadCSVFormat(text: any) {
        fs.saveAs(text);
    }

    openInvalidSupplierRecordsModal() {
        const modalRef = this.modalService.open(CustomUploadDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.title = "Invalid Supplier Records";
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
        modalRef.componentInstance.cancelText = "Do You Want to Upload Supplier Records ?";
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
