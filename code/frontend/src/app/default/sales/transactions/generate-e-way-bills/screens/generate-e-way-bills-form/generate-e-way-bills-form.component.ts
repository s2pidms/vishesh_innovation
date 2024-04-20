import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SalesInvoiceService} from "@services/dispatch";
import {E_WAY_BILL_FORM_ERRORS} from "@mocks/validations/sales";

import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {EWayBillsTransportationDetailsComponent} from "../e-way-bills-transportation-details/e-way-bills-transportation-details.component";
import {EWayBillsItemDetailsComponent} from "../e-way-bills-item-details/e-way-bills-item-details.component";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-generate-e-way-bills-form",
    templateUrl: "./generate-e-way-bills-form.component.html"
})
export class GenerateEWayBillsFormComponent implements OnInit {
    action: string = "create";
    submitted: boolean = false;
    customerName: string = "";
    salesInvoiceId: string = "";
    salesInvoiceArr: any = [];
    shipmentNameOptions: any = [];
    itemDetailsArr: any = [];
    customerBillingAddressObj: any = {};
    // transactionTypeOptions: any = [
    //     {key: "Regular", value: 1},
    //     {key: "BillTo-ShipTo", value: 2}
    // ];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        supplyType: new UntypedFormControl("O", [Validators.required]), //By Default ["O", "I"]
        subSupplyType: new UntypedFormControl("1", [Validators.required]), //By Default
        subSupplyDesc: new UntypedFormControl(null, [Validators.maxLength(20)]), //By Default
        docType: new UntypedFormControl("INV", [Validators.required]), //By Default ["INV", "CHL", "BIL", "BOE", "OTH"],
        docNo: new UntypedFormControl(null, [Validators.required, Validators.maxLength(16)]), //(Alphanumeric with / and - are allowed)
        docDate: new UntypedFormControl(this.utilityService.getTodayDate("DD/MM/YYYY"), [
            Validators.required,
            Validators.pattern("[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]")
        ]),
        fromGstin: new UntypedFormControl(null, [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(15),
            Validators.pattern("[0-9]{2}[0-9|A-Z]{13}")
        ]),
        fromTrdName: new UntypedFormControl(null, [Validators.maxLength(100)]),
        fromAddr1: new UntypedFormControl(null, [Validators.maxLength(120)]),
        fromAddr2: new UntypedFormControl(null, [Validators.maxLength(120)]),
        fromPlace: new UntypedFormControl(null, [Validators.maxLength(50)]),
        fromPincode: new UntypedFormControl(null, [
            Validators.required,
            Validators.max(999999),
            Validators.min(100000)
        ]),
        actFromStateCode: new UntypedFormControl(null, [Validators.required, Validators.max(99)]),
        fromStateCode: new UntypedFormControl(null, [Validators.required, Validators.max(99)]),

        toGstin: new UntypedFormControl(null, [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(15),
            Validators.pattern("[0-9]{2}[0-9|A-Z]{13}")
        ]),
        toTrdName: new UntypedFormControl(null, [Validators.maxLength(100)]),
        toAddr1: new UntypedFormControl(null, [Validators.maxLength(120)]), //(Valid Special Chars #,-,/)
        toAddr2: new UntypedFormControl(null, [Validators.maxLength(120)]), // (Valid Special Chars #,-,/)
        toPlace: new UntypedFormControl(null, [Validators.maxLength(50)]),
        toPincode: new UntypedFormControl(null, [Validators.required]),

        actToStateCode: new UntypedFormControl(null, [Validators.required, Validators.max(99)]),
        toStateCode: new UntypedFormControl(null, [Validators.required, Validators.max(99)]),

        transactionType: new UntypedFormControl(1, [Validators.required, Validators.max(4)]), //By Default
        otherValue: new UntypedFormControl(0),
        totalValue: new UntypedFormControl(0),
        cgstValue: new UntypedFormControl(0),
        sgstValue: new UntypedFormControl(0),
        igstValue: new UntypedFormControl(0),
        totInvValue: new UntypedFormControl(null, [Validators.required]),
        transporterId: new UntypedFormControl(null, [Validators.pattern("[0-9]{2}[0-9|A-Z]{13}")]),
        transporterName: new UntypedFormControl(null, [Validators.maxLength(100)]),
        transDocNo: new UntypedFormControl(null, [Validators.maxLength(15)]),
        transDistance: new UntypedFormControl(0, [Validators.required]),
        transMode: new UntypedFormControl(null), //By Default
        transDocDate: new UntypedFormControl(null),
        vehicleNo: new UntypedFormControl(null, [Validators.minLength(7), Validators.maxLength(15)]),
        vehicleType: new UntypedFormControl(null), //By Default
        itemList: new UntypedFormControl([])
    });
    get f() {
        return this.form.controls;
    }

    constructor(
        private salesInvoiceService: SalesInvoiceService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, E_WAY_BILL_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        formData.salesInvoiceId = this.salesInvoiceId;
        formData.transDocDate = null;
        formData.itemList = this.itemDetailsArr;
        delete formData._id;
        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        formData.transactionType = this.matchAddresses(formData);
        this.salesInvoiceService.eWayBillGenerate(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.getInitialData();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.salesInvoiceService.getAllEwayBillList({category: "Domestic", type: "EwayBill"}).subscribe(success => {
            this.form.controls["docDate"].setValue(this.utilityService.getTodayDate("DD/MM/YYYY"));
            this.f["supplyType"].setValue("O");
            this.f["transDistance"].setValue(0);
            this.f["subSupplyDesc"].setValue("");
            this.f["subSupplyType"].setValue("1");
            this.f["docType"].setValue("INV");
            this.f["transactionType"].setValue(1);
            this.salesInvoiceArr = success;
        });
        this.spinner.hide();
    }

    setSalesInvoice(eve: any) {
        this.submitted = true;
        this.spinner.show();
        this.salesInvoiceService.getById(eve._id).subscribe(success => {
            let obj = {
                docNo: success?.salesInvoiceNumber,
                docDate: this.utilityService.getFormatDate(success?.salesInvoiceDate, "DD/MM/YYYY"),
                fromGstin: success?.company?.GSTIN,
                fromTrdName: success?.company?.companyName,
                fromAddr1: `${success?.company?.companyBillingAddress?.addressLine1} ${success?.company?.companyBillingAddress?.addressLine2}`,
                fromAddr2: success?.company?.companyBillingAddress?.addressLine3,
                fromPlace: success?.company?.companyBillingAddress?.city,
                fromPincode: success?.company?.companyBillingAddress?.pinCode,
                fromStateCode: success?.company?.GSTIN.slice(0, 2),
                actFromStateCode: success?.company?.GSTIN.slice(0, 2),
                toGstin: success?.customer?.GSTIN,
                toTrdName: success?.customer?.customerName,
                toAddr1: `${success?.customerShippingAddress?.line1} ${success?.customerShippingAddress?.line2}`,
                toAddr2: success?.customerShippingAddress?.line3,
                toPlace: success?.customerShippingAddress?.city,
                toPincode: success?.customerShippingAddress?.pinCode,
                actToStateCode: success?.customer.GSTIN.slice(0, 2),
                toStateCode: success?.customer.GSTIN.slice(0, 2),
                transactionType: 1,
                otherValue: 0,
                totalValue: +(success?.salesInvoiceTotalTaxAmount).toFixed(2),
                cgstValue: +(success?.salesInvoiceTotalCGSTAmount).toFixed(2),
                sgstValue: +(success?.salesInvoiceTotalSGSTAmount).toFixed(2),
                igstValue: +(success?.salesInvoiceTotalIGSTAmount).toFixed(2),
                totInvValue: +(success?.salesInvoiceTotalAmountWithTax).toFixed(2),
                transporterName: success?.transporter,
                transporterId: success?.transporterId
            };
            this.customerBillingAddressObj = success.customerBillingAddress;
            // if (success.customerBillingAddress && success.customerShippingAddress) {
            //     obj.transactionType = this.matchAddresses(
            //         success.customerBillingAddress,
            //         success.customerShippingAddress
            //     );
            // }
            let condition = success?.salesInvoiceTotalIGSTAmount > 0;
            this.itemDetailsArr = success?.salesInvoiceDetails.map((x: any) => {
                return {
                    productName: x?.SKU?.SKUName,
                    productDesc: x?.SKU?.SKUName + ", " + x?.SKU?.SKUDescription,
                    hsnCode: x?.HSNCode,
                    quantity: x?.dispatchQty,
                    qtyUnit: x?.unit,
                    taxableAmount: +(x?.salesInvoiceLineValue).toFixed(2),
                    cgstRate: condition ? 0 : +(x?.cgst).toFixed(2),
                    sgstRate: condition ? 0 : +(x?.sgst).toFixed(2),
                    igstRate: condition ? +(x?.igst).toFixed(2) : 0
                };
            });
            const otherCharges = +(success?.otherCharges?.totalAmount).toFixed(2);
            if (otherCharges) {
                this.itemDetailsArr.push({
                    productName: "Other Charges",
                    productDesc: "Freight & Forwarding Charges",
                    hsnCode: "996511",
                    quantity: 1,
                    qtyUnit: "NOS",
                    taxableAmount: otherCharges,
                    cgstRate: condition ? 0 : 9,
                    sgstRate: condition ? 0 : 9,
                    igstRate: condition ? 18 : 0
                });
            }
            this.form.patchValue(obj);
        });
        this.spinner.hide();
    }
    matchAddresses(formData: any) {
        if (
            formData.toAddr1 != `${this.customerBillingAddressObj?.line1} ${this.customerBillingAddressObj?.line2}` ||
            formData.toAddr2 != this.customerBillingAddressObj?.line3 ||
            formData.toPlace != this.customerBillingAddressObj?.city ||
            formData.toPincode != this.customerBillingAddressObj?.pinCode
        ) {
            return 2;
        } else {
            return 1;
        }
    }

    reset() {
        this.salesInvoiceId = "";
        this.itemDetailsArr = [];
        this.form.reset();
        this.getInitialData();
    }

    openTransportationDetailsModal() {
        const modalRef = this.modalService.open(EWayBillsTransportationDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.transportationDetails = {
            transporterId: this.form.value.transporterId,
            transporterName: this.form.value.transporterName,
            transDistance: this.form.value.transDistance,
            vehicleNo: this.form.value.vehicleNo,
            transDocNo: this.form.value.transDocNo,
            transDocDate: this.form.value.transDocDate,
            transMode: this.form.value.transMode
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openItemDetailsModal() {
        const modalRef = this.modalService.open(EWayBillsItemDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.itemDetailsArr = this.itemDetailsArr;
        modalRef.componentInstance.othersValues = {
            otherValue: this.form.value.otherValue,
            totalValue: this.form.value.totalValue,
            cgstValue: this.form.value.cgstValue,
            sgstValue: this.form.value.sgstValue,
            igstValue: this.form.value.igstValue,
            totInvValue: this.form.value.totInvValue
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success?.othersValues);

                    this.itemDetailsArr = success?.itemDetailsArr;
                }
            },
            (reason: any) => {}
        );
    }
}
