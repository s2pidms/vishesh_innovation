import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BankDetails} from "@interfaces/bankDetails";
import {SupplierAddress} from "@interfaces/supplierAddress";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {SUPPLIER_GST_ClASSIFICATION, SUPPLIER_MSME_ClASSIFICATION} from "@mocks/constant";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {Address} from "@shared/interfaces";
import {AddSuppliersBankDetailsComponent} from "src/app/default/purchase/modals/add-suppliers-bank-details/add-suppliers-bank-details.component";
import {AddSuppliersAddressComponent} from "src/app/default/purchase/modals/add-suppliers-address/add-suppliers-address.component";
import {IChannelPartnerMasterData} from "@mocks/models/purchase/masters";
import {ProviderContactDetailsComponent} from "../../external-service-provider/provider-contact-details/provider-contact-details.component";
import {CHANNEL_PARTNER_FORM_ERRORS} from "@mocks/validations/purchase/channel-partner.validation";
import {ChannelPartnerService} from "@services/purchase/channelPartner.service";

@Component({
    selector: "app-channel-partner-form",
    templateUrl: "./channel-partner-form.component.html"
})
export class ChannelPartnerFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    supplierBillingAddressArray: Address[] = [];
    supplierShippingAddressArray: Address[] = [];
    supplierBankDetailsArray: BankDetails[] = [];
    supplierAddressArray: SupplierAddress[] = [];
    supplierContactMatrixArray: any = [];
    active: number = 1;

    autoIncValues: any = [];
    cpaPurchaseAgreement: any = null;

    GSTClassification: any = SUPPLIER_GST_ClASSIFICATION;
    MSMEClassification: any = SUPPLIER_MSME_ClASSIFICATION;

    masterData: IChannelPartnerMasterData = {
        autoIncrementNo: "",
        currenciesOptions: [],
        paymentTermsOptions: [],
        purchaseTypesOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private channelPartnerService: ChannelPartnerService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        channelPartnerCategory: new UntypedFormControl(null, [Validators.required]),
        CPCode: new UntypedFormControl("", [Validators.required]),
        channelPartnerName: new UntypedFormControl(null, [Validators.required]),
        channelPartnerNickName: new UntypedFormControl(""),
        PANNo: new UntypedFormControl("", [Validators.required]),
        GSTClassification: new UntypedFormControl(null, [Validators.required]),
        GSTIN: new UntypedFormControl("", [Validators.required]),
        udyamAadhaarNo: new UntypedFormControl("", [Validators.required]),
        MSMEClassification: new UntypedFormControl(null, [Validators.required]),
        currency: new UntypedFormControl(null, [Validators.required]),
        paymentTerms: new UntypedFormControl(null, [Validators.required]),
        isCPActive: new UntypedFormControl("Active"),
        bankSwiftCode: new UntypedFormControl(""),

        billingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            line4: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl("India")
        }),

        shippingAddress: new UntypedFormControl([]),
        contactMatrix: new UntypedFormControl([]),
        bankDetails: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }
    get supplierBillingAddress() {
        return this.form.get("billingAddress") as UntypedFormGroup;
    }
    get supplierShippingAddress() {
        return this.form.get("supplierShippingAddressForm") as UntypedFormGroup;
    }
    get supplierContactInfo() {
        return this.form.get("supplierContactMatrixForm") as UntypedFormGroup;
    }
    get supplierBankInfo() {
        return this.form.get("supplierBankDetailsForm") as UntypedFormGroup;
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, CHANNEL_PARTNER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;

        formData.shippingAddress = this.supplierShippingAddressArray;
        formData.contactMatrix = this.supplierContactMatrixArray;
        formData.bankDetails = this.supplierBankDetailsArray;

        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo() {
        this.location.back();
    }

    create(formData: any) {
        this.spinner.show();
        this.channelPartnerService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.channelPartnerService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    supplierCategoryImports(ev: any) {
        // this.form.controls["CPCode"].setValue(this.autoIncValues[ev.target.value]);
        let ESP = this.form.controls["channelPartnerCategory"].value;
        if (ESP == "Domestic") {
            this.form.controls["bankSwiftCode"].disable();
        } else {
            if (ESP == "Imports") {
                this.form.controls["bankSwiftCode"].enable();
            }
        }
    }

    getInitialData() {
        this.spinner.show();
        this.channelPartnerService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["CPCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.channelPartnerService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }
                    if (success.billingAddress.length == 1) {
                        success.billingAddress = success.billingAddress[0];
                    }
                    this.supplierBankDetailsArray = success.bankDetails;
                    this.supplierContactMatrixArray = success.contactMatrix;
                    this.supplierShippingAddressArray = success.shippingAddress;
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    addSupplierContactInfo() {
        this.supplierContactMatrixArray.push(JSON.parse(JSON.stringify(this.supplierContactInfo.value)));
        this.supplierContactInfo.reset();
    }
    addSupplierBankInfo() {
        this.supplierBankDetailsArray.push(JSON.parse(JSON.stringify(this.supplierBankInfo.value)));
        this.supplierBankInfo.reset();
    }
    deleteContactDetails(i: number) {
        this.supplierContactMatrixArray.splice(i, 1);
    }
    deleteBankDetails(i: number) {
        this.supplierBankDetailsArray.splice(i, 1);
    }

    addShippingAddressModel() {
        const modalRef = this.modalService.open(AddSuppliersAddressComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.addressArr = this.supplierShippingAddressArray;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.supplierShippingAddressArray = success;
                }
            },
            (reason: any) => {}
        );
    }

    openContactDetailsModal() {
        const modalRef = this.modalService.open(ProviderContactDetailsComponent, {
            centered: true,
            windowClass: "custom-modal",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.supplierContactMatrixArray = this.supplierContactMatrixArray;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.supplierContactMatrixArray = success;
                }
            },
            (reason: any) => {}
        );
    }

    openBankDetailsModal() {
        const modalRef = this.modalService.open(AddSuppliersBankDetailsComponent, {
            centered: true,
            windowClass: "custom-modal",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.channelPartnerHeading = "Channel Partner Bank Details";
        modalRef.componentInstance.providerMaster = "providerMaster";
        modalRef.componentInstance.supplierBankDetailsArray = this.supplierBankDetailsArray;
        modalRef.componentInstance.swiftCodeForImport = {
            channelPartnerCategory: this.form.value.channelPartnerCategory,
            channelPartnerName: this.form.value.channelPartnerName
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.supplierBankDetailsArray = success;
                }
            },
            (reason: any) => {}
        );
    }
}
