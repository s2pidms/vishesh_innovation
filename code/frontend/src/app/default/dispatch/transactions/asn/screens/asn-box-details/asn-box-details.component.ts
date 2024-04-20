import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {ExportExcelService} from "@core/services";

@Component({
    selector: "app-asn-box-details",
    templateUrl: "./asn-box-details.component.html"
})
export class AsnBoxDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() dispatchQty: any = "";
    @Input() boxDetails: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    balanceQty = 0;

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        boxNo: new UntypedFormControl(null, [Validators.required]),
        qty: new UntypedFormControl(0, [Validators.required]),
        weight: new UntypedFormControl(0, [Validators.required])
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
        if (this.action == "view") {
            this.form.disable();
        }
        this.collection = this.boxDetails.length;
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                this.excelDownload(this.boxDetails);
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
            message: "Box No. is required",
            key: "boxNo"
        },
        {
            message: "Qty is required",
            key: "qty"
        },
        {
            message: "Weight is required",
            key: "weight"
        }
    ];

    setQuantity(ev: any) {
        let qty = this.boxDetails
            .filter((ele: any, index: number) => index != this.form.value.index)
            .map((x: any) => +x.qty)
            .reduce((a: number, c: number) => +a + +c, 0);
        qty += +this.form.value.qty;
        if (qty > this.dispatchQty) {
            this.toastService.warning("Qty should not greater than total dispatch Qty !!");
            this.form.controls["qty"].setValue(0);
            return;
        }
    }

    save() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }

        let formData = this.form.value;

        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.boxDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.boxDetails.push(formData);
        }
        this.collection = this.boxDetails.length;
        this.form.reset();
    }
    patchItem(formData: any, index: number, action: string) {
        if (this.action != "view") {
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
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.boxDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.boxDetails.length;
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
            this.boxDetails = this.boxDetails;
        } else {
            this.boxDetails = [...this.boxDetails].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
