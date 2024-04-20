import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomersService} from "@services/sales";
import {BankDetails} from "@interfaces/bankDetails";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {ValidationService} from "@core/components";
import {AddAddressComponent, ContactDetailsComponent} from "@modals/index";
import {STATES_LIST} from "@mocks/states.constant";
import {CUSTOMER_FORM_ERRORS} from "@mocks/validations/sales";
import {SpinnerService} from "@core/services";
import {Address} from "@shared/interfaces";
import {Location} from "@angular/common";
import {B2BCustomerMasterData} from "@mocks/models/sales/master";

@Component({
    selector: "app-customer-form",
    templateUrl: "./customer-form.component.html"
})
export class CustomerFormComponent implements OnInit {
    customerBillingAddressArray: Address[] = [];
    customerShippingAddressArray: Address[] = [];
    customerBankDetailsArray: BankDetails[] = [];
    customerContactInfoArray: ContactMatrix[] = [];

    tableData: any;
    active: number = 1;
    action: string = "create";
    submitted = false;
    masterData: B2BCustomerMasterData = {
        autoIncrementNo: "",
        salesCountry: [],
        currenciesOptions: [],
        salesCategoryOptions: [],
        paymentTermsOptions: [],
        zones: [],
        gstClassifications: []
    };
    constructor(
        private customerService: CustomersService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        customerCode: new UntypedFormControl("", [Validators.required]),
        customerName: new UntypedFormControl("", [Validators.required]),
        customerNickName: new UntypedFormControl(""),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        region: new UntypedFormControl(null),
        customerUdyogAadhar: new UntypedFormControl(""),
        customerPAN: new UntypedFormControl("", [Validators.required]),
        GSTIN: new UntypedFormControl("", [Validators.required]),
        GSTClassification: new UntypedFormControl(null, [Validators.required]),
        MSMEClassification: new UntypedFormControl(""),
        customerType: new UntypedFormControl(null),
        customerMSMENo: new UntypedFormControl(""),
        customerBillingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            line4: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl("India"),
            contactPersonName: new UntypedFormControl(""),
            contactPersonNumber: new UntypedFormControl("")
        }),
        customerShippingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl(""),
            contactPersonName: new UntypedFormControl(""),
            contactPersonNumber: new UntypedFormControl("")
        }),

        frightCharge: new UntypedFormControl(""),
        transporter: new UntypedFormControl(""),
        destination: new UntypedFormControl(""),
        customerCurrency: new UntypedFormControl(null, [Validators.required]),
        creditLimit: new UntypedFormControl(""),
        customerPaymentTerms: new UntypedFormControl(null, [Validators.required]),
        isCustomerActive: new UntypedFormControl("A", [Validators.required]),
        customerWebsite: new UntypedFormControl(""),
        customerBankDetails: new UntypedFormGroup({
            befName: new UntypedFormControl(""),
            bankName: new UntypedFormControl(""),
            accountNumber: new UntypedFormControl(""),
            accountType: new UntypedFormControl(""),
            bankIFSCCode: new UntypedFormControl(""),
            bankSwiftCode: new UntypedFormControl("")
        }),
        customerLeadTimeInDays: new UntypedFormControl("")
    });

    get ShippingAddress() {
        return this.form.get("customerShippingAddress") as UntypedFormGroup;
    }
    get BillingAddress() {
        return this.form.get("customerBillingAddress") as UntypedFormGroup;
    }
    get ContactInfo() {
        return this.form.get("customerContactInfo") as UntypedFormGroup;
    }

    get ContactBankInfo() {
        return this.form.get("customerBankDetails") as UntypedFormGroup;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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
        if (this.validationService.checkErrors(this.form, CUSTOMER_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (formData.customerBillingAddress) {
            formData.customerBillingAddress.contactPersonName = formData.customerName;
            formData.customerBillingAddress = [formData.customerBillingAddress];
        }
        formData.customerShippingAddress = this.customerShippingAddressArray;
        formData.customerContactInfo = this.customerContactInfoArray;
        formData.customerBankDetails = this.customerBankDetailsArray;
        delete formData.customerBankDetails;

        if (this.action == "edit" && formData?.customerShippingAddress?.length == 0) {
            formData.customerShippingAddress = formData.customerBillingAddress;
        }

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.customerService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.customerService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    customerCategoryForExports() {
        let customerCategory = this.form.controls["customerCategory"].value;
        if (customerCategory.includes("Domestic")) {
            this.form.controls["region"].enable();
            this.form.controls["customerPAN"].enable();
            this.form.controls["GSTClassification"].enable();
            this.form.controls["GSTIN"].enable();
            this.BillingAddress.controls["country"].setValue("India");
            this.form.get("customerPAN").setValidators([Validators.required]);
            this.form.get("GSTClassification").setValidators([Validators.required]);
            this.form.get("GSTIN").setValidators([Validators.required]);

            this.form.get("customerPAN").updateValueAndValidity();
            this.form.get("GSTIN").updateValueAndValidity();
            this.form.get("GSTClassification").updateValueAndValidity();
        } else if (customerCategory.includes("Exports")) {
            this.form.controls["region"].setValue(null);
            this.form.controls["customerPAN"].setValue(null);
            this.form.controls["GSTClassification"].setValue(null);
            this.form.controls["GSTIN"].setValue(null);

            this.form.get("customerPAN").clearValidators();
            this.form.get("GSTIN").clearValidators();
            this.form.get("GSTClassification").clearValidators();

            this.form.get("customerPAN").updateValueAndValidity();
            this.form.get("GSTIN").updateValueAndValidity();
            this.form.get("GSTClassification").updateValueAndValidity();

            this.form.controls["region"].disable();
            this.form.controls["customerPAN"].disable();
            this.form.controls["GSTClassification"].disable();
            this.form.controls["GSTIN"].disable();
        }
    }

    open() {
        const modalRef = this.modalService.open(AddAddressComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerCategory = this.form.controls["customerCategory"].value;
        modalRef.componentInstance.addressArr = this.customerShippingAddressArray;
        modalRef.componentInstance.salesCountry = this.masterData?.salesCountry;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.customerShippingAddressArray = success;
                }
            },
            (reason: any) => {}
        );
    }

    openContactDetailsModal() {
        const modalRef = this.modalService.open(ContactDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerContactInfoArray = this.customerContactInfoArray;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.customerContactInfoArray = success;
                }
            },
            (reason: any) => {}
        );
    }
    getInitialData() {
        this.spinner.show();
        this.customerService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["customerCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.customerService.getById(params["id"]);
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
                    if (success.customerBillingAddress.length == 1) {
                        success.customerBillingAddress = success.customerBillingAddress[0];
                    }
                    this.customerShippingAddressArray = success.customerShippingAddress;
                    this.customerBankDetailsArray = success.customerBankDetails;
                    this.customerContactInfoArray = success.customerContactInfo;
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    this.customerCategoryForExports();
                });
        });
    }
}
