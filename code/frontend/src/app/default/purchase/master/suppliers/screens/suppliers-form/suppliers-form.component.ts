import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {SuppliersService} from "@services/purchase";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BankDetails} from "@interfaces/bankDetails";
import {SupplierAddress} from "@interfaces/supplierAddress";
import {ValidationService} from "@core/components";
import {AddSuppliersAddressComponent} from "src/app/default/purchase/modals/add-suppliers-address/add-suppliers-address.component";
import {AddPurchaseDetailsComponent} from "src/app/default/purchase/master/suppliers/screens/add-purchase-details/add-purchase-details.component";
import {STATES_LIST} from "@mocks/states.constant";
import {SUPPLIER_FORM_ERRORS} from "@mocks/validations/purchase/suppliers.validation";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {Address} from "@shared/interfaces";
import {AddSuppliersContactsDetailsComponent} from "../add-suppliers-contacts-details/add-suppliers-contacts-details.component";
import {AddSuppliersBankDetailsComponent} from "src/app/default/purchase/modals/add-suppliers-bank-details/add-suppliers-bank-details.component";
import {ISupplierMasterData} from "@mocks/models/purchase/masters";

@Component({
    selector: "app-suppliers-form",
    templateUrl: "./suppliers-form.component.html"
})
export class SuppliersFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    supplierBillingAddressArray: Address[] = [];
    supplierShippingAddressArray: Address[] = [];
    supplierBankDetailsArray: BankDetails[] = [];
    supplierAddressArray: SupplierAddress[] = [];
    supplierContactMatrixArray: any = [];
    active: number = 1;
    cpaPurchaseAgreement: any = null;
    masterData: ISupplierMasterData = {
        autoIncrementNo: "",
        currenciesOptions: [],
        paymentTermsOptions: [],
        freightTermsOptions: [],
        purchaseTypesOptions: [],
        purchaseCountryOptions: []
    };

    constructor(
        private suppliersService: SuppliersService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        supplierCode: new UntypedFormControl("", [Validators.required]),
        supplierName: new UntypedFormControl("", [Validators.required]),
        supplierPurchaseType: new UntypedFormControl(null, [Validators.required]),
        supplierNickName: new UntypedFormControl(""),
        GSTClassification: new UntypedFormControl(null),
        MSMEClassification: new UntypedFormControl(null),
        isSupplierActive: new UntypedFormControl("A"),
        countryOfOrigin: new UntypedFormControl(""),
        supplierCompanyType: new UntypedFormControl("PVT LTD"),
        supplierCIN: new UntypedFormControl(""),
        supplierUdyogAadhar: new UntypedFormControl(""),
        supplierGST: new UntypedFormControl("", [Validators.required]),
        supplierURD: new UntypedFormControl(""),
        supplierPAN: new UntypedFormControl("", [Validators.required]),
        supplierMSMENo: new UntypedFormControl(""),
        supplierVendorCode: new UntypedFormControl(""),
        supplierBillingAddress: new UntypedFormControl([]),
        supplierShippingAddress: new UntypedFormControl([]),
        supplierAddress: new UntypedFormControl([]),
        supplierContactMatrix: new UntypedFormControl([]),
        supplierWebsite: new UntypedFormControl(""),
        supplierBankDetails: new UntypedFormControl([]),
        supplierCurrency: new UntypedFormControl(null),
        supplierINCOTerms: new UntypedFormControl(null),
        supplierPaymentTerms: new UntypedFormControl(null),
        cpaFile: new UntypedFormControl(null),
        cpaFileUrl: new UntypedFormControl(null),
        supplierLeadTimeInDays: new UntypedFormControl(""),
        supplierExitDate: new UntypedFormControl(""),
        supplierReasonOfLeaving: new UntypedFormControl(""),

        supplierBillingAddressForm: new UntypedFormGroup({
            _id: new UntypedFormControl(),
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
        supplierBankDetailsForm: new UntypedFormGroup({
            befName: new UntypedFormControl(""),
            bankName: new UntypedFormControl(""),
            accountNumber: new UntypedFormControl(""),
            accountType: new UntypedFormControl(""),
            bankIFSCCode: new UntypedFormControl(""),
            bankSwiftCode: new UntypedFormControl(""),
            supplierPurchaseType: new UntypedFormControl(""),
            ESPCategory: new UntypedFormControl("")
        })
    });

    get f() {
        return this.form.controls;
    }
    get supplierBillingAddress() {
        return this.form.get("supplierBillingAddressForm") as UntypedFormGroup;
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
        this.form.enable();
        if (this.validationService.checkErrors(this.form, SUPPLIER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData.supplierBillingAddressForm) {
            formData.supplierBillingAddress = [formData.supplierBillingAddressForm];
        }

        formData.supplierShippingAddress = this.supplierShippingAddressArray;
        formData.supplierContactMatrix = this.supplierContactMatrixArray;
        formData.supplierBankDetails = this.supplierBankDetailsArray;

        delete formData.supplierBankDetailsForm;
        delete formData.supplierAddress;
        delete formData.supplierBillingAddressForm;
        delete formData.supplierShippingAddressForm;
        delete formData.supplierAddressForm;

        let CPAformData = new FormData();
        CPAformData.append("key", "supplier");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    CPAformData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key] || formData[key] == false) {
                    CPAformData.append(key, formData[key]);
                }
            }
        }

        if (this.cpaPurchaseAgreement) {
            CPAformData.append("cpaFile", this.cpaPurchaseAgreement, this.cpaPurchaseAgreement.name);
        }

        if (formData._id) {
            this.update(formData._id, CPAformData);
        } else {
            delete formData._id;
            this.create(CPAformData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.suppliersService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.suppliersService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    supplierCategoryImports() {
        let SC = this.form.controls["supplierPurchaseType"].value;
        if (SC == "Domestic") {
            this.supplierBankInfo.controls["bankSwiftCode"].disable();
            this.form.controls["supplierCurrency"].setValue("INR");
            this.form.controls["supplierCurrency"].disable();
            this.form.controls["supplierPAN"].enable();
            this.form.controls["GSTClassification"].enable();
            this.form.controls["supplierGST"].enable();
            this.form.controls["supplierUdyogAadhar"].enable();
            this.form.controls["MSMEClassification"].enable();
            this.supplierBillingAddress.controls["country"].setValue("India");
            this.form.get("supplierPAN").setValidators([Validators.required]);
            this.form.get("supplierGST").setValidators([Validators.required]);
        } else if (SC == "Imports") {
            this.supplierBankInfo.controls["bankSwiftCode"].enable();
            this.form.controls["supplierCurrency"].enable();
            this.form.controls["supplierCurrency"].setValue(null);
            this.form.controls["supplierPAN"].setValue(null);
            this.form.controls["GSTClassification"].setValue(null);
            this.form.controls["supplierGST"].setValue(null);
            this.form.controls["supplierUdyogAadhar"].setValue(null);
            this.form.controls["MSMEClassification"].setValue(null);

            this.form.get("supplierPAN").clearValidators();
            this.form.get("supplierGST").clearValidators();

            this.form.get("supplierPAN").updateValueAndValidity();
            this.form.get("supplierGST").updateValueAndValidity();

            this.form.controls["supplierPAN"].disable();
            this.form.controls["GSTClassification"].disable();
            this.form.controls["supplierGST"].disable();
            this.form.controls["supplierUdyogAadhar"].disable();
            this.form.controls["MSMEClassification"].disable();
            this.supplierBillingAddress.controls["country"].setValue(null);
        }
    }

    getInitialData() {
        this.spinner.show();
        this.suppliersService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["supplierCode"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["supplierCompanyType"].setValue("PVT LTD");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.suppliersService.getById(params["id"]);
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
                    if (success.supplierBillingAddress.length == 1) {
                        success.supplierBillingAddressForm = success.supplierBillingAddress[0];
                    }
                    if (success.supplierShippingAddress.length == 1) {
                        success.supplierShippingAddressForm = success.supplierShippingAddress[0];
                    }

                    this.supplierBankDetailsArray = success.supplierBankDetails;
                    this.supplierContactMatrixArray = success.supplierContactMatrix;

                    this.supplierShippingAddressArray = success.supplierShippingAddress;
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    this.supplierCategoryImports();
                });
        });
    }

    copyAddress() {
        this.supplierShippingAddress.controls["line1"].setValue(this.supplierBillingAddress.controls["line1"].value);
        this.supplierShippingAddress.controls["line2"].setValue(this.supplierBillingAddress.controls["line2"].value);
        this.supplierShippingAddress.controls["line3"].setValue(this.supplierBillingAddress.controls["line3"].value);
        this.supplierShippingAddress.controls["state"].setValue(this.supplierBillingAddress.controls["state"].value);
        this.supplierShippingAddress.controls["city"].setValue(this.supplierBillingAddress.controls["city"].value);
        this.supplierShippingAddress.controls["pinCode"].setValue(
            this.supplierBillingAddress.controls["pinCode"].value
        );
        this.supplierShippingAddress.controls["country"].setValue(
            this.supplierBillingAddress.controls["country"].value
        );
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
        modalRef.componentInstance.purchaseType = this.form.controls["supplierPurchaseType"].value;
        modalRef.componentInstance.addressArr = this.supplierShippingAddressArray;
        modalRef.componentInstance.purchaseCountry = this.masterData?.purchaseCountryOptions;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.supplierShippingAddressArray = success;
                }
            },
            (reason: any) => {}
        );
    }

    openPurchaseDetailsModal() {
        const modalRef = this.modalService.open(AddPurchaseDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.templatesDetails = {
            cpaFile: this.form.value.cpaFile,
            cpaFileUrl: this.form.value.cpaFileUrl,
            supplierLeadTimeInDays: this.form.value.supplierLeadTimeInDays
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.cpaPurchaseAgreement = success.cpaPurchaseAgreement;
                }
            },
            (reason: any) => {}
        );
    }

    openContactDetailsModal() {
        const modalRef = this.modalService.open(AddSuppliersContactsDetailsComponent, {
            centered: true,
            size: "xl",
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
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.supplierBankDetailsArray = this.supplierBankDetailsArray;
        modalRef.componentInstance.swiftCodeForImport = {
            supplierPurchaseType: this.form.value.supplierPurchaseType,
            supplierName: this.form.value.supplierName
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
