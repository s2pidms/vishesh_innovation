import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {iBASModalComponent} from "@modals/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeAttendanceService} from "@services/hr";
import {InventoryCorrectionService} from "@services/stores";

import {ToastService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {MenuTitleService, SpinnerService} from "@core/services";
import * as xlsx from "xlsx";
import * as fs from "file-saver";
@Component({
    selector: "app-upload-direct-inventory",
    templateUrl: "./upload-direct-inventory.component.html",
    styleUrls: ["./upload-direct-inventory.component.scss"]
})
export class UploadDirectInventoryComponent implements OnInit {
    constructor(
        private spinner: SpinnerService,
        private inventoryCorrectionService: InventoryCorrectionService,
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

    ngOnInit(): void {}

    fileChosen(event: any) {
        // if (event.target.value) {
        //     if (event.target.files[0].size > 2000000) {
        //         this.toastService.warning("Unable to upload file of size more than 2MB");
        //         return;
        //     }
        //     this.file = <File>event.target.files[0];
        //     this.fileName = this.file.name;
        // }
    }

    validateData() {
        if (this.data.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
                const element = this.data[i];
                let compareKeys = [
                    "YEAR_MONTH",
                    "empno",
                    "EMP_NAME",
                    "PRESENT",
                    "LATE_HRS",
                    "EARLYHRS",
                    "OT_HRS",
                    "HRS_WRKD"
                ];
                if (i == 0) {
                    let keys = Object.keys(element);
                    if (JSON.stringify(keys) != JSON.stringify(compareKeys)) {
                        this.toastService.error(`Excel uploaded header is not right !`);
                        return;
                    }
                    if (String(element.YEAR_MONTH).length != 6) {
                        this.toastService.error(`Date is invalid !`);
                        return;
                    }
                    this.date =
                        String(element.YEAR_MONTH).substring(0, 4) + "-" + String(element.YEAR_MONTH).substring(4, 6);
                }
                for (let j = 0; j < compareKeys.length; j++) {
                    const value = element[compareKeys[j]];
                    if (value == "" && value != 0) {
                        this.toastService.error(`There is empty cell data !`);
                        return;
                    }
                    if (["PRESENT", "LATE_HRS", "EARLYHRS", "OT_HRS", "HRS_WRKD"].includes(compareKeys[j])) {
                        if (typeof element[compareKeys[j]] != "number") {
                            this.toastService.error(`Invalid data. Please check the excel!`);
                            return;
                        }
                    }
                }
            }
        } else {
            this.toastService.error(`Atleast one entry required !! Please check the excel!`);
            return;
        }
        this.fileSuccessUpload = true;
    }
    removeFile() {
        this.fileName = "";
        this.file = "";
    }
    submit(flag = false) {
        // this.spinner.show();
        // let formValue = new FormData();
        // if (this.file && typeof this.file == "object") {
        //     formValue.append("key", "excelData");
        //     formValue.append("inventory", this.file, this.file.name);
        // } else {
        //     this.toastService.warning(`Please Upload File`);
        // }
        // this.inventoryCorrectionService.uploadInventoryFile(formValue).subscribe(success => {
        //     this.spinner.hide();
        // });
    }

    openModal() {
        const modalRef = this.modalService.open(iBASModalComponent, {
            centered: true,
            size: "md"
        });
        modalRef.result.then(
            (success: any) => {
                this.submit(true);
            },
            (reason: any) => {}
        );
    }

    downloadCSVFormat(text: any) {
        fs.saveAs(text);
    }
}
