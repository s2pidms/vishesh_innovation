import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomersService} from "@services/sales";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {ValidationService} from "@core/components";
import {AddAddressComponent, ContactDetailsComponent} from "@modals/index";
import {STATES_LIST} from "@mocks/states.constant";
import {CUSTOMER_FORM_ERRORS} from "@mocks/validations/sales";
import {AppGlobalService, SpinnerService, StorageService, ToastService, UtilityService} from "@core/services";
import {ProspectService} from "@services/business-leads";
import {Address} from "@shared/interfaces";

@Component({
    selector: "app-convert-to-customer",
    templateUrl: "./convert-to-customer.component.html"
})
export class ConvertToCustomerComponent implements OnInit {
    customerShippingAddressArray: Address[] = [];
    customerContactInfoArray: ContactMatrix[] = [];

    tableData: any;
    active: number = 1;
    action: string = "create";
    prospectId: any = "";
    submitted = false;
    currency: any = [];
    incoTerms: any = [];
    paymentTerm: any = [];
    transport: any = [];
    region: any = [];
    cardData: any = {};
    salesCategory: any = [];
    gstClassificationsOptions: any = [];
    constructor(
        private customerService: CustomersService,
        private prospectService: ProspectService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
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
        let data = this.appGlobalService.rolesPermission.find(
            (x: any) => x.menuItemId == "64a6c1e33339d4dc9d8141a3"
        )?.masters;
        this.cardData = data.find((x: any) => x.subModuleName == "B2B Customer");
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
            formData.customerBillingAddress = [formData.customerBillingAddress];
        }
        formData.customerShippingAddress = this.customerShippingAddressArray;
        formData.customerContactInfo = this.customerContactInfoArray;
        formData.isConvertedToCustomer = "Converted to Customer";
        formData.prospectId = this.prospectId;
        delete formData.customerBankDetails;
        delete formData._id;

        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.customerService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);

            let obj = {
                title: this.cardData?.subModuleName ?? "B2B Customer",
                subTitle: null,
                type: null,
                subModuleId: this.cardData?.subModuleId
            };
            this.storageService.set("menuTitle", obj);
            this.router.navigate(["/default/sales/master/customer/list"]);
        });
    }

    open() {
        const modalRef = this.modalService.open(AddAddressComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.addressArr = this.customerShippingAddressArray;
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
        this.customerService.getAllMasterData({}).subscribe(success => {
            this.form.controls["customerCode"].setValue(success.autoIncrementNo);
            this.currency = success.currenciesOptions;
            this.incoTerms = success.incoTerms;
            this.paymentTerm = success.paymentTermsOptions;
            this.transport = success.transporters;
            this.region = success.zones;
            this.salesCategory = success.salesCategory;
            this.gstClassificationsOptions = success.gstClassifications;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.prospectService.getById(params["id"]);
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

                    if (success.correspondenceAddress) {
                        success.customerBillingAddress = success.correspondenceAddress;
                    }

                    this.customerShippingAddressArray = success.customerShippingAddress;
                    this.customerContactInfoArray = success.contactDetails;
                    this.prospectId = success?._id;
                    this.form.patchValue(success);
                    this.form.controls["customerName"].setValue(success?.prospectName);
                    this.form.controls["customerCurrency"].setValue(success?.currency);
                    if (success.status == "Active") {
                        success.status = "A";
                    } else if (success.status == "Inactive") {
                        success.status = "I";
                    }
                    this.form.controls["isCustomerActive"].setValue(success?.status);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    if (this.action == "Converted to Customer") {
                        this.form.enable();
                    }
                });
        });
    }
}
