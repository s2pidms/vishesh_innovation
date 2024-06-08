import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {ExportExcelService} from "@core/services";

@Component({
    selector: "app-jw-bank-details-modal",
    templateUrl: "./jw-bank-details-modal.component.html"
})
export class JwBankDetailsModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "";
    @Input() jobWorkerName: any = "";
    @Input() jobWorkerBankDetails: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        befName: new UntypedFormControl("", [Validators.required]),
        bankName: new UntypedFormControl(""),
        accountNumber: new UntypedFormControl(""),
        accountType: new UntypedFormControl(""),
        bankIFSCCode: new UntypedFormControl(""),
        bankSwiftCode: new UntypedFormControl(""),
        supplierPurchaseType: new UntypedFormControl(""),
        ESPCategory: new UntypedFormControl("")
    });

    exportsArr = [
        {label: "Yes", value: "Yes"},
        {label: "No", value: "No"}
    ];

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.controls["befName"].setValue(this.jobWorkerName);
        this.collection = this.jobWorkerBankDetails?.length;
        if (this.action == "view") {
            this.form.disable();
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                this.excelDownload(this.jobWorkerBankDetails);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    findFormErrors = [
        {
            message: "Beneficiary Name is required",
            key: "befName"
        }
    ];

    save() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.jobWorkerBankDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.jobWorkerBankDetails.push(formData);
        }
        this.collection = this.jobWorkerBankDetails.length;
        this.form.reset();
        this.form.controls["befName"].setValue(this.jobWorkerName);
    }

    setSwiftCodeDisable() {
        let bankIFSCCode = this.form.controls["bankIFSCCode"].value;
        if (bankIFSCCode) {
            this.form.controls["bankSwiftCode"].setValue(null);
            this.form.controls["bankSwiftCode"].disable();
        } else {
            this.form.controls["bankSwiftCode"].enable();
        }
    }
    setIFSDisable() {
        let bankSwiftCode = this.form.controls["bankSwiftCode"].value;
        if (bankSwiftCode) {
            this.form.controls["bankIFSCCode"].setValue(null);
            this.form.controls["bankIFSCCode"].disable();
        } else {
            this.form.controls["bankIFSCCode"].enable();
        }
    }

    dismiss() {
        this.activeModal.close(this.jobWorkerBankDetails);
    }
    patchItem(formData: any, index: number, action: string) {
        if (this.action != "view") {
            this.form.reset();
            formData.index = index;
            this.form.patchValue(formData);
            if (action == "view") {
                this.btnDisable = true;
                this.form.disable();
            } else {
                this.form.enable();
                this.btnDisable = false;
            }
        }

        this.setSwiftCodeDisable();
        this.setIFSDisable();
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.jobWorkerBankDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.jobWorkerBankDetails.length;
        }
    }

    excelDownload(data: any) {
        let style = {
            width: 24,
            style: {
                alignment: {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
            }
        };
        let reportData: any = {
            title: "Customer Contact Details",
            csvData: data,
            headers: [
                {
                    header: "Beneficiary Name",
                    key: "befName",
                    ...style
                },
                {
                    header: "Bank Name",
                    key: "bankName",
                    ...style
                },
                {
                    header: "Account Type",
                    key: "accountType",
                    ...style
                },
                {
                    header: "Account No.",
                    key: "accountNumber",
                    ...style
                },
                {
                    header: "IFS/Swift Code",
                    key: "bankIFSCCode",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.jobWorkerBankDetails = this.jobWorkerBankDetails;
        } else {
            this.jobWorkerBankDetails = [...this.jobWorkerBankDetails].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
