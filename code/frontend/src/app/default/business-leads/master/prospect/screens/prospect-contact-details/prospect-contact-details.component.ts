import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "../../../../../../shared/directives";
import {ContactMatrix} from "@interfaces/contactMatrix";

@Component({
    selector: "app-prospect-contact-details",
    templateUrl: "./prospect-contact-details.component.html"
})
export class ProspectContactDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    contactDetails = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        contactPersonName: new UntypedFormControl("", [Validators.required]),
        contactPersonDepartment: new UntypedFormControl(""),
        contactPersonDesignation: new UntypedFormControl(""),
        contactPersonNumber: new UntypedFormControl("", [Validators.required]),
        contactPersonEmail: new UntypedFormControl("", [Validators.required])
    });
    @Input() contactDetailsArr: ContactMatrix[] = [];
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService
    ) {}

    findFormErrors = [
        {
            message: "Contact Persons Name is Required",
            key: "contactPersonName"
        },
        {
            message: "Contact No. is Required",
            key: "contactPersonNumber"
        },
        {
            message: "E-mail ID is Required",
            key: "contactPersonEmail"
        }
    ];

    ngOnInit(): void {
        this.collection = this.contactDetailsArr.length;
        if (this.action == "view") {
            this.contactDetails.disable();
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                this.excelDownload(this.contactDetailsArr);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    save() {
        if (this.validationService.checkErrors(this.contactDetails, this.findFormErrors)) {
            return;
        }
        let formData = this.contactDetails.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.contactDetailsArr.splice(formData.index, 1, formData);
        } else {
            // create
            this.contactDetailsArr.push(formData);
        }
        this.collection = this.contactDetailsArr.length;
        this.contactDetails.reset();
    }
    patchContact(formData: any, index: number, action: string) {
        formData.index = index;
        this.contactDetails.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.contactDetails.disable();
        } else {
            this.contactDetails.enable();
            this.btnDisable = false;
        }
    }

    deleteContact(i: number) {
        if (this.action != "view") {
            this.contactDetailsArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.contactDetailsArr.length;
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
                    header: "Contact Person",
                    key: "contactPersonName",
                    ...style
                },
                {
                    header: "Department",
                    key: "department",
                    ...style
                },
                {
                    header: "Contact No.",
                    key: "contactPersonNumber",
                    ...style
                },
                {
                    header: "E-mail ID",
                    key: "contactPersonEmail",
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
            this.contactDetailsArr = this.contactDetailsArr;
        } else {
            this.contactDetailsArr = [...this.contactDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
