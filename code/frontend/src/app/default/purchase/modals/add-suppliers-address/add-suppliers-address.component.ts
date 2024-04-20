import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {STATES_LIST} from "@mocks/states.constant";
import {ValidationService} from "@core/components";
import {ExportExcelService} from "@core/services";

@Component({
    selector: "app-add-suppliers-address",
    templateUrl: "./add-suppliers-address.component.html"
})
export class AddSuppliersAddressComponent implements OnInit {
    @Input() addressArr: any = [];
    @Input() purchaseCountry: any = [];
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() purchaseType: string = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    supplierShippingAddressForm = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        country: new UntypedFormControl(null, [Validators.required]),
        state: new UntypedFormControl(null, [Validators.required]),
        city: new UntypedFormControl(null, [Validators.required]),
        pinCode: new UntypedFormControl(null, [Validators.required]),
        line1: new UntypedFormControl(null, [Validators.required]),
        line2: new UntypedFormControl(null, [Validators.required]),
        line3: new UntypedFormControl(null, [Validators.required]),
        district: new UntypedFormControl(null),
        contactPersonNumber: new UntypedFormControl(null)
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private exportExcelService: ExportExcelService
    ) {}

    findFormErrors = [
        {
            message: "Country is Required",
            key: "country"
        },
        {
            message: "State/Province is Required",
            key: "state"
        },
        {
            message: "City/District is Required",
            key: "city"
        },
        {
            message: "Pin Code is Required",
            key: "pinCode"
        },
        {
            message: "Address Line 1 is Required",
            key: "line1"
        },
        {
            message: "Address Line 2 is Required",
            key: "line2"
        },
        {
            message: "Address Line 3 is Required",
            key: "line3"
        }
    ];

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                this.excelDownload(this.addressArr);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.collection = this.addressArr.length;
        if (this.action == "view") {
            this.supplierShippingAddressForm.disable();
        }
    }

    saveAddress() {
        if (this.validationService.checkErrors(this.supplierShippingAddressForm, this.findFormErrors)) {
            return;
        }
        let address = this.supplierShippingAddressForm.value;
        if ((address.index || address.index == 0) && address.index >= 0) {
            // edit
            this.addressArr.splice(address.index, 1, address);
        } else {
            // create
            this.addressArr.push(address);
        }
        this.collection = this.addressArr.length;
        this.supplierShippingAddressForm.reset();
    }
    patchAddress(address: any, index: number, btnStatus: string) {
        if (btnStatus == "view") {
            this.btnDisable = true;
            this.supplierShippingAddressForm.disable();
        }
        if (btnStatus == "edit") {
            this.btnDisable = false;
            this.supplierShippingAddressForm.enable();
        }

        address.index = index;
        this.supplierShippingAddressForm.patchValue(address);
    }

    deleteShippingAddress(i: number) {
        if (this.action != "view") {
            this.addressArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.addressArr.length;
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
            title: "Ship To Address",
            csvData: data,
            headers: [
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
            this.addressArr = this.addressArr;
        } else {
            this.addressArr = [...this.addressArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
