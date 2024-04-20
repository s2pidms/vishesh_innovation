import {Component, OnInit} from "@angular/core";
import {iBASModalComponent} from "@modals/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeAttendanceService} from "@services/hr";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ToastService, SpinnerService} from "@core/services";
import * as xlsx from "xlsx";
@Component({
    selector: "app-iBAS-upload-attendance",
    templateUrl: "./iBAS-upload-attendance.component.html",
    styleUrls: ["./iBAS-upload-attendance.component.scss"]
})
export class IBASUploadAttendanceComponent implements OnInit {
    constructor(
        private spinner: SpinnerService,
        private attendanceService: EmployeeAttendanceService,
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
        if (event.target.value) {
            if (event.target.files[0].size > 2000000) {
                this.toastService.warning("Unable to upload file of size more than 2MB");
                return;
            }
            this.file = <File>event.target.files[0];
            this.fileName = this.file.name;
            const reader = new FileReader();
            reader.onload = () => {
                const data = reader.result;
                const workbook = xlsx.read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                this.data = json;
            };
            reader.readAsArrayBuffer(this.file);
            reader.onerror = error => {
                console.error(error);
            };
        }
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
        this.data = [];
    }
    submit(flag = false) {
        this.spinner.show();
        let payload = {
            data: this.data,
            date: this.date,
            flag: flag
        };
        this.attendanceService.uploadEmployeeAttendance(payload).subscribe(success => {
            this.spinner.hide();
            if (success.message == "Already exist") {
                this.openModal();
            } else if (success.message == "Approved Already exist") {
                this.toastService.success(`# This month Attendance already had been Approved!`);
            } else {
                this.dataSuccessUpload = true;
            }
        });
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
}
