import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ExportExcelService} from "@core/services";
import {COMPANY_ADD_CONTACTS_FORM_ERRORS} from "@mocks/validations/settings";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-company-add-contacts-details",
    templateUrl: "./company-add-contacts-details.component.html"
})
export class CompanyAddContactsDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "edit";
    @Input() departmentsOptions: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        department: new UntypedFormControl(null, [Validators.required]),
        contactPersonName: new UntypedFormControl("", [Validators.required]),
        designation: new UntypedFormControl("", [Validators.required]),
        companyContactPersonNumber: new UntypedFormControl("", [Validators.required]),
        companyContactPersonEmail: new UntypedFormControl("", [Validators.required])
    });
    @Input() companyContactInfoArray: any = [];
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService
    ) {}

    ngOnInit(): void {
        this.collection = this.companyContactInfoArray.length;
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
                this.excelDownload(this.companyContactInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    save() {
        if (this.validationService.checkErrors(this.form, COMPANY_ADD_CONTACTS_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.companyContactInfoArray.splice(formData.index + (this.page - 1) * this.pageSize, 1, formData);
        } else {
            // create
            this.companyContactInfoArray.push(formData);
        }
        this.collection = this.companyContactInfoArray.length;
        this.form.reset();
    }
    patchItem(formData: any, index: number, action: string) {
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

    deleteItem(i: number) {
        this.companyContactInfoArray.splice(i + (this.page - 1) * this.pageSize, 1);
        this.collection = this.companyContactInfoArray.length;
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
                    header: "Contact Person",
                    key: "contactPersonName",
                    ...style
                },
                {
                    header: "Designation",
                    key: "designation",
                    ...style
                },
                {
                    header: "Mobile No.",
                    key: "companyContactPersonNumber",
                    ...style
                },
                {
                    header: "E-mail ID",
                    key: "companyContactPersonEmail",
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
            this.companyContactInfoArray = this.companyContactInfoArray;
        } else {
            this.companyContactInfoArray = [...this.companyContactInfoArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
