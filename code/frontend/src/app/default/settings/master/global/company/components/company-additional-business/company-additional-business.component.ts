import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ExportExcelService} from "@core/services";
import {STATES_LIST} from "@mocks/states.constant";
import {CompanyUploadSODocumentComponent} from "../company-upload-SOdocuments/company-upload-SOdocuments";
import {COMPANY_ADDITIONAL_BUSINESS_FORM_ERRORS} from "@mocks/validations/settings";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";

@Component({
    selector: "app-company-additional-business",
    templateUrl: "./company-additional-business.component.html"
})
export class CompanyAdditionalBusinessComponent implements OnInit {
    @Input() companyPlacesOfBusinessArr: any = [];
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() companyId: string = "";
    @Input() locationOptions: any = [];

    statesOfIndia = STATES_LIST;

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    customerShippingAddress = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        locationID: new UntypedFormControl(null, [Validators.required]),
        stateForAdditionalPlaceOfBusiness: new UntypedFormControl(null),
        GSTINForAdditionalPlace: new UntypedFormControl(""),
        TAN: new UntypedFormControl(""),
        SOSignature: new UntypedFormControl(""),
        SOSignatureUrl: new UntypedFormControl(""),
        SOPdfHeader: new UntypedFormControl(""),
        SOPdfHeaderUrl: new UntypedFormControl(""),
        PISignature: new UntypedFormControl(""),
        PISignatureUrl: new UntypedFormControl(""),
        TISignature: new UntypedFormControl(""),
        TISignatureUrl: new UntypedFormControl(""),
        addressLine1: new UntypedFormControl(""),
        addressLine2: new UntypedFormControl(""),
        addressLine3: new UntypedFormControl(""),
        addressLine4: new UntypedFormControl(""),
        country: new UntypedFormControl(""),
        state: new UntypedFormControl(""),
        city: new UntypedFormControl(""),
        pinCode: new UntypedFormControl(""),
        district: new UntypedFormControl("")
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService,
        private modalService: NgbModal
    ) {}

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                this.excelDownload(this.companyPlacesOfBusinessArr);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
    ngOnInit(): void {
        this.collection = this.companyPlacesOfBusinessArr.length;
        if (this.action == "view") {
            this.customerShippingAddress.disable();
        }
    }

    saveAddress() {
        if (this.validationService.checkErrors(this.customerShippingAddress, COMPANY_ADDITIONAL_BUSINESS_FORM_ERRORS)) {
            return;
        }
        let address = this.customerShippingAddress.value;
        if ((address.index || address.index == 0) && address.index >= 0) {
            // edit
            this.companyPlacesOfBusinessArr.splice(address.index + (this.page - 1) * this.pageSize, 1, address);
        } else {
            // create
            this.companyPlacesOfBusinessArr.push(address);
        }
        this.collection = this.companyPlacesOfBusinessArr.length;
        this.customerShippingAddress.reset();
    }
    patchAddress(address: any, index: number, btnStatus: string) {
        if (btnStatus == "view") {
            this.btnDisable = true;
            this.customerShippingAddress.disable();
        }
        if (btnStatus == "edit") {
            this.btnDisable = false;
            this.customerShippingAddress.enable();
        }

        address.index = index;
        this.customerShippingAddress.patchValue(address);
    }

    deleteShippingAddress(i: number) {
        if (this.action != "view") {
            this.companyPlacesOfBusinessArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.companyPlacesOfBusinessArr.length;
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
            title: "Additional Places of Business",
            csvData: data,
            headers: [
                {
                    header: "location ID",
                    key: "locationID",
                    ...style
                },
                {
                    header: "GSTIN",
                    key: "GSTINForAdditionalPlace",
                    ...style
                },
                {
                    header: "TAN",
                    key: "TAN",
                    ...style
                },
                {
                    header: "Country",
                    key: "country",
                    ...style
                },

                {
                    header: "State/Province",
                    key: "state",
                    ...style
                },
                {
                    header: "City/District",
                    key: "city",
                    ...style
                },
                {
                    header: "Pin Code",
                    key: "pinCode",
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
            this.companyPlacesOfBusinessArr = this.companyPlacesOfBusinessArr;
        } else {
            this.companyPlacesOfBusinessArr = [...this.companyPlacesOfBusinessArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    uploadheadersignModal(a: any) {
        const modalRef = this.modalService.open(CompanyUploadSODocumentComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.locationId = a?._id;
        modalRef.componentInstance.companyId = this.companyId;
        modalRef.componentInstance.companySOPDF = {
            SOSignature: a?.SOSignature,
            SOSignatureUrl: a?.SOSignatureUrl,
            SOPdfHeader: a?.SOPdfHeader,
            SOPdfHeaderUrl: a?.SOPdfHeaderUrl,
            PISignature: a?.PISignature,
            PISignatureUrl: a?.PISignatureUrl,
            TISignature: a?.TISignature,
            TISignatureUrl: a?.TISignatureUrl,
            locationId: a?._id
        };
    }
}
