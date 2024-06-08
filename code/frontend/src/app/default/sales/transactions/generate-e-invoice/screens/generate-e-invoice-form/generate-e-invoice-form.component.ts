import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SalesInvoiceService} from "@services/dispatch";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {EInvoiceValueDetailsComponent} from "../e-invoice-value-details/e-invoice-value-details.component";
import {EInvoiceItemDetailsComponent} from "../e-invoice-item-details/e-invoice-item-details.component";
import {EInvoiceDispatchShipDetailsComponent} from "../e-invoice-dispatch-ship-details/e-invoice-dispatch-ship-details.component";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {GENERATE_E_iNVOICE_SUP_TYPE} from "@mocks/options.constant";

@Component({
    selector: "app-generate-e-invoice-form",
    templateUrl: "./generate-e-invoice-form.component.html"
})
export class GenerateEInvoiceFormComponent implements OnInit {
    action: string = "create";
    customerName: string = "";
    salesInvoiceId: string = "";
    salesInvoiceArr: any = [];
    shipmentNameOptions: any = [];
    itemDetailsArr: any = [];
    submitted = false;
    supplyTypeArr: any = GENERATE_E_iNVOICE_SUP_TYPE;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    form: any = new UntypedFormGroup({
        DocDtls: new UntypedFormGroup({
            Typ: new UntypedFormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
            No: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(16),
                Validators.pattern("^([a-zA-Z1-9]{1}[a-zA-Z0-9/-]{0,15})$")
            ]),
            Dt: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern("^[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]$")
            ])
        }),

        SellerDtls: new UntypedFormGroup({
            Gstin: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(15),
                Validators.maxLength(15),
                Validators.pattern("([0-9]{2}[0-9A-Z]{13})")
            ]),
            LglNm: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            TrdNm: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr1: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr2: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Loc: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
                Validators.pattern('^([^\\"])*$')
            ]),
            Pin: new UntypedFormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
            Stcd: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("^(?!0+$)([0-9]{1,2})$")
            ]),
            Ph: new UntypedFormControl(null, [
                Validators.minLength(6),
                Validators.maxLength(12),
                Validators.pattern("^([0-9]{6,12})$")
            ]),
            Em: new UntypedFormControl(null, [
                Validators.minLength(6),
                Validators.maxLength(100),
                Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
            ])
        }),
        BuyerDtls: new UntypedFormGroup({
            Gstin: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
                Validators.pattern("^(([0-9]{2}[0-9A-Z]{13})|URP)$")
            ]),
            LglNm: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            TrdNm: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Pos: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("^(?!0+$)([0-9]{1,2})$")
            ]),
            Addr1: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr2: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Loc: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Pin: new UntypedFormControl(null, [Validators.min(100000), Validators.max(999999)]),
            Stcd: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("^(?!0+$)([0-9]{1,2})$")
            ])
        }),

        ItemList: new UntypedFormControl([]),

        ValDtls: new UntypedFormGroup({
            AssVal: new UntypedFormControl(null, [
                Validators.required,
                Validators.min(0),
                Validators.max(99999999999999.99)
            ]),
            CgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
            SgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
            IgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
            OthChrg: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
            RndOffAmt: new UntypedFormControl(null, [Validators.min(-99.99), Validators.max(99.99)]),
            TotInvVal: new UntypedFormControl(null, [
                Validators.required,
                Validators.min(0),
                Validators.max(99999999999999.99)
            ])
        }),

        DispDtls: new UntypedFormGroup({
            Nm: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr1: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr2: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Loc: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Pin: new UntypedFormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
            Stcd: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("^(?!0+$)([0-9]{1,2})$")
            ])
        }),
        ShipDtls: new UntypedFormGroup({
            Gstin: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(15),
                Validators.pattern("^(([0-9]{2}[0-9A-Z]{13})|URP)$")
            ]),
            LglNm: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            TrdNm: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr1: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Addr2: new UntypedFormControl(null, [
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Loc: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100),
                Validators.pattern('^([^\\"])*$')
            ]),
            Pin: new UntypedFormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
            Stcd: new UntypedFormControl(null, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("^(?!0+$)([0-9]{1,2})$")
            ])
        }),
        TranDtls: new UntypedFormGroup({
            TaxSch: new UntypedFormControl("GST"),
            SupTyp: new UntypedFormControl("B2B"),
            RegRev: new UntypedFormControl("N"),
            EcmGstin: new UntypedFormControl(null),
            IgstOnIntra: new UntypedFormControl("N")
        })
    });

    get f() {
        return this.form.controls;
    }

    get docDtlsForm() {
        return this.form.get("DocDtls") as UntypedFormGroup;
    }
    get sellerDtlsForm() {
        return this.form.get("SellerDtls") as UntypedFormGroup;
    }
    get buyerDtlsForm() {
        return this.form.get("BuyerDtls") as UntypedFormGroup;
    }
    get dispDtlsForm() {
        return this.form.get("DispDtls") as UntypedFormGroup;
    }
    get shipDtlsForm() {
        return this.form.get("ShipDtls") as UntypedFormGroup;
    }
    get valDtlsForm() {
        return this.form.get("ValDtls") as UntypedFormGroup;
    }
    get tranDetails() {
        return this.form.get("TranDtls") as UntypedFormGroup;
    }

    constructor(
        private salesInvoiceService: SalesInvoiceService,
        private spinner: SpinnerService,
        private modalService: NgbModal,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        this.form.enable();
        let formData: any = {
            ...this.form.value,
            salesInvoiceId: this.salesInvoiceId,

            ...{
                Version: "1.1"
                // TranDtls: {
                //     TaxSch: "GST",
                //     SupTyp: "B2B", // SEZWOP
                //     RegRev: "N",
                //     EcmGstin: null,
                //     IgstOnIntra: "N"
                // }
            }
        };
        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.salesInvoiceService.eInvoiceGenerate(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.getInitialData();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.salesInvoiceService.getAllEwayBillList({category: "Domestic", type: "EInvoice"}).subscribe(success => {
            this.salesInvoiceArr = success;
        });
        this.spinner.hide();
    }

    setSalesInvoice(eve: any) {
        this.submitted = true;
        this.spinner.show();
        this.salesInvoiceService.getById(eve._id).subscribe(success => {
            let condition = success?.salesInvoiceTotalIGSTAmount > 0;
            let contactInfo = success?.company?.contactInfo.find((l: any) => l.department == "Sales");
            this.itemDetailsArr = success?.salesInvoiceDetails.map((x: any, index: any) => {
                condition = success?.salesInvoiceTotalIGSTAmount > 0;
                let TotItemVal = +(x?.salesInvoiceLineValue).toFixed(2);
                if (condition) {
                    TotItemVal += (x?.salesInvoiceLineValue * +x?.igst) / 100;
                } else {
                    TotItemVal +=
                        (x?.salesInvoiceLineValue * +x?.cgst) / 100 + (x?.salesInvoiceLineValue * +x?.sgst) / 100;
                }
                return {
                    SlNo: index + 1,
                    IsServc: "N",
                    HsnCd: x?.SKU?.hsn,
                    UnitPrice: x?.purchaseRate,
                    TotAmt: +(x?.dispatchQty).toFixed(2) * +(x?.purchaseRate).toFixed(2),
                    AssAmt: +(x?.salesInvoiceLineValue).toFixed(2),
                    GstRt: condition ? +x?.igst : +x?.cgst + +x?.sgst,
                    TotItemVal: +TotItemVal.toFixed(2),
                    PrdDesc: x?.SKU?.SKUDescription,
                    Qty: x?.dispatchQty,
                    Unit: x?.unit,
                    FreeQty: 0,
                    Discount: +((+x?.dispatchQty * +x?.purchaseRate * +x?.discount) / 100).toFixed(2),
                    ItemNo: 0,
                    PreTaxVal: 0,
                    IgstAmt: +x.IgstAmt.toFixed(2),
                    CgstAmt: +x.CgstAmt.toFixed(2),
                    SgstAmt: +x.SgstAmt.toFixed(2),
                    CesRt: 0,
                    CesAmt: 0,
                    CesNonAdvlAmt: 0,
                    StateCesRt: 0,
                    StateCesAmt: 0,
                    StateCesNonAdvlAmt: 0,
                    OthChrg: 0
                };
            });
            let otherCharges = +(success?.otherCharges.totalAmount).toFixed(2);
            let TotItemVal = otherCharges;
            if (condition) {
                TotItemVal += (TotItemVal * 18) / 100;
            } else {
                TotItemVal += (TotItemVal * 9) / 100 + (TotItemVal * 9) / 100;
            }
            if (otherCharges) {
                this.itemDetailsArr.push({
                    SlNo: +this.itemDetailsArr.length + 1,
                    IsServc: "N",
                    HsnCd: "996511",
                    UnitPrice: otherCharges,
                    TotAmt: otherCharges,
                    AssAmt: otherCharges,
                    GstRt: condition ? 18 : 9 + 9,
                    TotItemVal: +TotItemVal.toFixed(2),
                    PrdDesc: "Freight & Forwarding Charges",
                    Qty: 1,
                    Unit: "NOS",
                    FreeQty: 0,
                    Discount: 0,
                    ItemNo: 0,
                    PreTaxVal: 0,
                    IgstAmt: condition ? +((18 * +otherCharges) / 100).toFixed(2) : 0,
                    CgstAmt: condition ? 0 : +((9 * +otherCharges) / 100).toFixed(2),
                    SgstAmt: condition ? 0 : +((9 * +otherCharges) / 100).toFixed(2),
                    CesRt: 0,
                    CesAmt: 0,
                    CesNonAdvlAmt: 0,
                    StateCesRt: 0,
                    StateCesAmt: 0,
                    StateCesNonAdvlAmt: 0,
                    OthChrg: 0
                });
            }
            let obj = {
                DocDtls: {
                    Typ: "INV",
                    No: success?.salesInvoiceNumber,
                    Dt: this.utilityService.getFormatDate(success?.salesInvoiceDate, "DD/MM/YYYY")
                },
                SellerDtls: {
                    Gstin: success?.company?.GSTIN,
                    LglNm: success?.company?.companyName,
                    TrdNm: success?.company?.companyName,
                    Addr1: `${success?.company?.companyBillingAddress?.addressLine1} ${success?.company?.companyBillingAddress?.addressLine2}`,
                    Addr2: success?.company?.companyBillingAddress?.addressLine3,
                    Loc: success?.company?.companyBillingAddress?.city,
                    Pin: +success?.company?.companyBillingAddress?.pinCode,
                    Stcd: success?.company?.GSTIN.slice(0, 2),
                    Ph: contactInfo?.companyContactPersonNumber ?? null,
                    Em: contactInfo?.companyContactPersonEmail ?? null
                },
                BuyerDtls: {
                    Gstin: success?.customer?.GSTIN,
                    LglNm: success?.customer?.customerName,
                    TrdNm: success?.customer?.customerName,
                    Addr1: `${success?.customerBillingAddress?.line1} ${success?.customerBillingAddress?.line2}`,
                    Addr2: success?.customerBillingAddress?.line3,
                    Loc: success?.customerBillingAddress?.city,
                    Pin: +success?.customerBillingAddress?.pinCode,
                    Stcd: success?.customer?.GSTIN.slice(0, 2),
                    Pos: success?.customer?.GSTIN.slice(0, 2)
                },
                ItemList: this.itemDetailsArr,
                ValDtls: {
                    AssVal: +(success?.salesInvoiceTotalAmount).toFixed(2),
                    CgstVal: +(success?.salesInvoiceTotalCGSTAmount).toFixed(2),
                    SgstVal: +(success?.salesInvoiceTotalSGSTAmount).toFixed(2),
                    IgstVal: +(success?.salesInvoiceTotalIGSTAmount).toFixed(2),
                    OthChrg: 0,
                    RndOffAmt: +(success?.roundedOff).toFixed(2),
                    TotInvVal: +(success?.salesInvoiceTotalAmountWithTax).toFixed(2)
                },
                DispDtls: {
                    Nm: success?.company?.companyName,
                    Addr1: `${success?.company?.companyBillingAddress?.addressLine1} ${success?.company?.companyBillingAddress?.addressLine2}`,
                    Addr2: success?.company?.companyBillingAddress?.addressLine3,
                    Loc: success?.company?.companyBillingAddress?.city,
                    Pin: +success?.company?.companyBillingAddress?.pinCode,
                    Stcd: success?.company?.GSTIN.slice(0, 2)
                },
                ShipDtls: {
                    Gstin: success?.customer?.GSTIN,
                    LglNm: success?.customerShippingAddress?.contactPersonName,
                    TrdNm: success?.customerShippingAddress?.contactPersonName,
                    Addr1: `${success?.customerShippingAddress?.line1} ${success?.customerShippingAddress?.line2}`,
                    Addr2: success?.customerShippingAddress?.line3,
                    Loc: success?.customerShippingAddress?.city,
                    Pin: +success?.customerShippingAddress?.pinCode,
                    Stcd: success?.customer?.GSTIN.slice(0, 2)
                }
            };
            this.form.patchValue(obj);
            if (success?.customer?.GSTClassification == "SEZ") {
                this.tranDetails.controls["SupTyp"].setValue("SEZWOP");
            }
            this.spinner.hide();
        });
    }

    reset() {
        this.salesInvoiceId = "";
        this.itemDetailsArr = [];
        this.form.reset();
        let obj = {
            TaxSch: "GST",
            SupTyp: "B2B",
            RegRev: "N",
            EcmGstin: null,
            IgstOnIntra: "N"
        };
        this.tranDetails.patchValue(obj);
        this.getInitialData();
    }

    openValueDetailsModal() {
        const modalRef = this.modalService.open(EInvoiceValueDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.valDetaills = this.valDtlsForm.value;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.valDtlsForm.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openItemDetailsModal() {
        const modalRef = this.modalService.open(EInvoiceItemDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.itemDetailsArr = this.itemDetailsArr;

        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success?.othersValues);

                    this.itemDetailsArr = success;
                }
            },
            (reason: any) => {}
        );
    }

    openDispatchShipDetailsModal() {
        const modalRef = this.modalService.open(EInvoiceDispatchShipDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.dispDetails = this.dispDtlsForm.value;
        modalRef.componentInstance.shiDetails = this.shipDtlsForm.value;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.dispDtlsForm.patchValue(success?.DispDtls);
                    this.shipDtlsForm.patchValue(success?.ShipDtls);
                }
            },
            (reason: any) => {}
        );
    }
}
