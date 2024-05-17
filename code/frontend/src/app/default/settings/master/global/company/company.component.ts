import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CompanyService} from "@services/settings";
import {COMPANY_FORM_ERRORS} from "@mocks/validations/settings";
import {ToastService} from "@core/services";
import {STATES_LIST} from "@mocks/states.constant";
import {ValidationService} from "@core/components";
import {SpinnerService, StorageService, UtilityService} from "@core/services";
import {
    AccountsModalComponent,
    AddCompanyTemplateComponent,
    CompanyAddContactsDetailsComponent,
    CompanyAdditionalBusinessComponent,
    CompanyBankDetailsComponent,
    CompanyDocumentsComponent,
    ExportsModalComponent
} from "./components";
import {ICompanyMasterData} from "@mocks/models/settings/masters";
@Component({
    selector: "app-company",
    templateUrl: "./company.component.html"
})
export class CompanyComponent implements OnInit {
    active: number = 1;
    action: string = "edit";
    companyId: string = "";
    companyAddress: any = [];
    user: any = {};
    departmentsOptions: any = [];
    constitutionOfBusinessOptions: any = [];
    locationOptions: any = [];
    PODomesticOptions: any = [];
    POImportOptions: any = [];
    PIDomesticOptions: any = [];
    PIExportsOptions: any = [];
    TIDomesticOptions: any = [];
    TIExportsOptions: any = [];
    GSTClassificationsOptions: any = [];
    companyTypeArr: any = [];
    companyPdfHeaderFile: any = null;
    companySignatureFile: any = null;
    logoFile: any = null;
    landingPageHeaderFile: any = null;
    LUTDocumentFile: any = null;
    welcomeInfoFile: any = null;
    SOSignatureFile: any = null;
    SOPdfHeaderFile: any = null;
    registerOfficePOHeaderFile: any = null;
    registerOfficeSOHeaderFile: any = null;
    factoryPOHeaderFile: any = null;
    factorySOHeaderFile: any = null;
    currencies: any = [];
    id: any = [];
    templates = [
        {label: "Turnover less than 5 CR", value: "Turnover less than 5 CR"},
        {
            label: "Turnover less than 5 CR with Dispatch",
            value: "Turnover less than 5 CR with Dispatch"
        },
        {label: "E-Invoice", value: "E-Invoice"}
    ];
    masterData: ICompanyMasterData = {
        GSTClassificationsOptions: [],
        constitutionOfBusinessOptions: [],
        compDepartmentsOptions: [],
        locationOptions: [],
        PODomesticOptions: [],
        POImportOptions: [],
        PIDomesticOptions: [],
        PIExportsOptions: [],
        TIDomesticOptions: [],
        TIExportsOptions: [],
        companyTypeOptions: [],
        currenciesOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        companyNickName: new UntypedFormControl(""),
        companyCode: new UntypedFormControl(""),
        companyName: new UntypedFormControl("", [Validators.required]),
        constitutionOfBusiness: new UntypedFormControl(null),
        companyCIN: new UntypedFormControl(""),
        dateOfIncorporation: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        companyPAN: new UntypedFormControl("", [Validators.required]),
        GSTClassification: new UntypedFormControl(""),
        GSTIN: new UntypedFormControl("", [Validators.required]),
        companyMSMENo: new UntypedFormControl(""),
        udyamRegistrationNo: new UntypedFormControl(""),
        importExportIECode: new UntypedFormControl(""),
        TANForTDSTCS: new UntypedFormControl(""),

        companyBillingAddress: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            addressType: new UntypedFormControl("Billing"),
            addressLine1: new UntypedFormControl(""),
            addressLine2: new UntypedFormControl(""),
            addressLine3: new UntypedFormControl(""),
            addressLine4: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            district: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl("")
        }),
        exportsDetails: new UntypedFormGroup({
            LUTNo: new UntypedFormControl(null),
            LUTDate: new UntypedFormControl(null),
            LUTDocument: new UntypedFormControl(null),
            LUTDocumentUrl: new UntypedFormControl(null)
        }),

        companyBefName: new UntypedFormControl(""),
        companyBankName: new UntypedFormControl(""),
        companyBankAddress: new UntypedFormControl(""),
        companyAccountNumber: new UntypedFormControl(""),
        companyAccType: new UntypedFormControl(""),
        companyBankIFSCCode: new UntypedFormControl(""),
        companyBankBranch: new UntypedFormControl(""),
        companyBankMICRCode: new UntypedFormControl(""),
        exports: new UntypedFormControl("No"),
        swiftCode: new UntypedFormControl(""),
        intermediaryBank: new UntypedFormControl(""),
        intermediaryBankSwiftCode: new UntypedFormControl(""),

        placesOfBusiness: new UntypedFormControl([]),
        contactInfo: new UntypedFormControl([]),
        accountsDetails: new UntypedFormControl({}),

        logo: new UntypedFormControl(""),
        logoUrl: new UntypedFormControl(""),
        landingPageHeader: new UntypedFormControl(""),
        landingPageHeaderUrl: new UntypedFormControl(""),
        welcomeInfo: new UntypedFormControl(""),
        welcomeInfoUrl: new UntypedFormControl(""),
        companyPdfHeader: new UntypedFormControl(""),
        companyPdfHeaderUrl: new UntypedFormControl(""),
        companySignature: new UntypedFormControl(""),
        companySignatureUrl: new UntypedFormControl(""),
        SOSignature: new UntypedFormControl(""),
        SOSignatureUrl: new UntypedFormControl(""),
        SOPdfHeader: new UntypedFormControl(""),
        SOPdfHeaderUrl: new UntypedFormControl(""),
        registerOfficePOHeaderUrl: new UntypedFormControl(""),
        registerOfficePOHeader: new UntypedFormControl(""),
        registerOfficeSOHeaderUrl: new UntypedFormControl(""),
        registerOfficeSOHeader: new UntypedFormControl(""),
        factoryPOHeaderUrl: new UntypedFormControl(""),
        factoryPOHeader: new UntypedFormControl(""),
        factorySOHeaderUrl: new UntypedFormControl(""),
        factorySOHeader: new UntypedFormControl(""),

        PODomesticTemplates: new UntypedFormControl(null),
        POImportsTemplates: new UntypedFormControl(null),
        PIDomesticTemplates: new UntypedFormControl(null),
        PIExportsTemplates: new UntypedFormControl(null),
        TIDomesticTemplates: new UntypedFormControl(null),
        TIExportsTemplates: new UntypedFormControl(null),

        companyType: new UntypedFormControl("")
    });

    statesOfIndia = STATES_LIST;

    get address() {
        return this.form.get("companyAddress") as UntypedFormGroup;
    }
    get exportsDetails() {
        return this.form.get("exportsDetails") as UntypedFormGroup;
    }

    constructor(
        private company: CompanyService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private storageService: StorageService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser");
        this.getAll();
    }

    submit() {
        if (this.validationService.checkErrors(this.form, COMPANY_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;

        let formValue = new FormData();
        formValue.append("key", "company");
        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    formValue.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    formValue.append(key, formData[key]);
                }
            }
        }

        if (this.companyPdfHeaderFile) {
            formValue.append("companyPdfHeaderFile", this.companyPdfHeaderFile, this.companyPdfHeaderFile.name);
        }

        if (this.companySignatureFile) {
            formValue.append("companySignatureFile", this.companySignatureFile, this.companySignatureFile.name);
        }
        if (this.welcomeInfoFile) {
            formValue.append("welcomeInfoFile", this.welcomeInfoFile, this.welcomeInfoFile.name);
        }
        if (this.logoFile) {
            formValue.append("logoFile", this.logoFile, this.logoFile.name);
        }
        if (this.landingPageHeaderFile) {
            formValue.append("landingPageHeaderFile", this.landingPageHeaderFile, this.landingPageHeaderFile.name);
        }
        if (this.SOSignatureFile) {
            formValue.append("SOSignatureFile", this.SOSignatureFile, this.SOSignatureFile.name);
        }
        if (this.SOPdfHeaderFile) {
            formValue.append("SOPdfHeaderFile", this.SOPdfHeaderFile, this.SOPdfHeaderFile.name);
        }
        if (this.registerOfficePOHeaderFile) {
            formValue.append(
                "registerOfficePOHeaderFile",
                this.registerOfficePOHeaderFile,
                this.registerOfficePOHeaderFile.name
            );
        }
        if (this.registerOfficeSOHeaderFile) {
            formValue.append(
                "registerOfficeSOHeaderFile",
                this.registerOfficeSOHeaderFile,
                this.registerOfficeSOHeaderFile.name
            );
        }
        if (this.factoryPOHeaderFile) {
            formValue.append("factoryPOHeaderFile", this.factoryPOHeaderFile, this.factoryPOHeaderFile.name);
        }
        if (this.factorySOHeaderFile) {
            formValue.append("factorySOHeaderFile", this.factorySOHeaderFile, this.factorySOHeaderFile.name);
        }
        if (this.LUTDocumentFile) {
            formValue.append("LUTDocumentFile", this.LUTDocumentFile, this.LUTDocumentFile.name);
        }

        if (formData._id) {
            this.update(formData._id, formValue);
        }
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.company.update(_id, formData).subscribe(success => {
            this.toastService.success(success.message);
            this.spinner.hide();
        });
    }

    getAll() {
        this.spinner.show();
        this.company.getAll({}).subscribe(success => {
            if (success.rows.length) {
                let obj = success.rows[0];
                this.GSTClassificationsOptions = success.GSTClassifications;
                this.constitutionOfBusinessOptions = success.constitutionOfBusiness;
                this.departmentsOptions = success.compDepartments;
                this.locationOptions = success.location;
                this.PODomesticOptions = success.PODomestic;
                this.POImportOptions = success.POImport;
                this.PIDomesticOptions = success.PIDomestic;
                this.PIExportsOptions = success.PIExports;
                this.TIDomesticOptions = success.TIDomestic;
                this.TIExportsOptions = success.TIExports;
                this.companyTypeArr = success.companyType;
                this.currencies = success.currencies;
                this.companyId = obj?._id;

                if (obj.dateOfIncorporation) {
                    obj.dateOfIncorporation = obj.dateOfIncorporation.split("T")[0];
                }
                if (obj.exportsDetails && obj.exportsDetails.LUTDate) {
                    obj.exportsDetails.LUTDate = obj.exportsDetails.LUTDate.split("T")[0];
                }

                this.form.patchValue(obj);
            }
            this.spinner.hide();
        });
    }

    openContactDetailsModal() {
        const modalRef = this.modalService.open(CompanyAddContactsDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.departmentsOptions = this.departmentsOptions;
        modalRef.componentInstance.companyContactInfoArray = this.form.value.contactInfo;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.controls["contactInfo"].patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openAdditionalPlacesOfBusinessModal() {
        const modalRef = this.modalService.open(CompanyAdditionalBusinessComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.locationOptions = this.locationOptions;
        modalRef.componentInstance.companyId = this.companyId;
        modalRef.componentInstance.companyPlacesOfBusinessArr = this.form.value.placesOfBusiness;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.controls["placesOfBusiness"].setValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openBankDetailsModal() {
        const modalRef = this.modalService.open(CompanyBankDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.bankDetails = {
            companyBefName: this.form.value.companyBefName,
            companyBankName: this.form.value.companyBankName,
            companyAccountNumber: this.form.value.companyAccountNumber,
            companyAccType: this.form.value.companyAccType,
            companyBankIFSCCode: this.form.value.companyBankIFSCCode,
            companyBankBranch: this.form.value.companyBankBranch,
            companyBankAddress: this.form.value.companyBankAddress,
            companyBankMICRCode: this.form.value.companyBankMICRCode,
            exports: this.form.value.exports,
            swiftCode: this.form.value.swiftCode,
            intermediaryBank: this.form.value.intermediaryBank,
            intermediaryBankSwiftCode: this.form.value.intermediaryBankSwiftCode
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
    openPdfTemplatesModal() {
        const modalRef = this.modalService.open(AddCompanyTemplateComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.PODomesticOptions = this.PODomesticOptions;
        modalRef.componentInstance.POImportOptions = this.POImportOptions;
        modalRef.componentInstance.PIDomesticOptions = this.PIDomesticOptions;
        modalRef.componentInstance.PIExportsOptions = this.PIExportsOptions;
        modalRef.componentInstance.TIExportsOptions = this.TIExportsOptions;
        modalRef.componentInstance.TIDomesticOptions = this.TIDomesticOptions;
        modalRef.componentInstance.templatesDetails = {
            PODomesticTemplates: this.form.value.PODomesticTemplates,
            POImportsTemplates: this.form.value.POImportsTemplates,
            PIDomesticTemplates: this.form.value.PIDomesticTemplates,
            PIExportsTemplates: this.form.value.PIExportsTemplates,
            TIDomesticTemplates: this.form.value.TIDomesticTemplates,
            TIExportsTemplates: this.form.value.TIExportsTemplates
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.logoFile = success.logoFile;
                    this.companyPdfHeaderFile = success.companyPdfHeaderFile;
                    this.companySignatureFile = success.companySignatureFile;
                    this.welcomeInfoFile = success.welcomeInfoFile;
                }
            },
            (reason: any) => {}
        );
    }

    openDocumentsModal() {
        const modalRef = this.modalService.open(CompanyDocumentsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.logoFile = this.logoFile;
        //  Make For other 7 images

        modalRef.componentInstance.templatesDetails = {
            logo: this.form.value.logo,
            logoUrl: this.form.value.logoUrl,
            landingPageHeader: this.form.value.landingPageHeader,
            landingPageHeaderUrl: this.form.value.landingPageHeaderUrl,
            companyPdfHeader: this.form.value.companyPdfHeader,
            companyPdfHeaderUrl: this.form.value.companyPdfHeaderUrl,
            welcomeInfo: this.form.value.welcomeInfo,
            welcomeInfoUrl: this.form.value.welcomeInfoUrl,
            companySignature: this.form.value.companySignature,
            companySignatureUrl: this.form.value.companySignatureUrl,
            SOSignature: this.form.value.SOSignature,
            SOSignatureUrl: this.form.value.SOSignatureUrl,
            SOPdfHeader: this.form.value.SOPdfHeader,
            SOPdfHeaderUrl: this.form.value.SOPdfHeaderUrl,
            registerOfficePOHeaderUrl: this.form.value.registerOfficePOHeaderUrl,
            registerOfficePOHeader: this.form.value.registerOfficePOHeader,
            registerOfficeSOHeaderUrl: this.form.value.registerOfficeSOHeaderUrl,
            registerOfficeSOHeader: this.form.value.registerOfficeSOHeader,
            factoryPOHeaderUrl: this.form.value.factoryPOHeaderUrl,
            factoryPOHeader: this.form.value.factoryPOHeader,
            factorySOHeaderUrl: this.form.value.factorySOHeaderUrl,
            factorySOHeader: this.form.value.factorySOHeader
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.logoFile = success.logoFile;
                    this.landingPageHeaderFile = success.landingPageHeaderFile;
                    this.companyPdfHeaderFile = success.companyPdfHeaderFile;
                    this.companySignatureFile = success.companySignatureFile;
                    this.welcomeInfoFile = success.welcomeInfoFile;
                    this.SOSignatureFile = success.SOSignatureFile;
                    this.SOPdfHeaderFile = success.SOPdfHeaderFile;
                    this.registerOfficePOHeaderFile = success.registerOfficePOHeaderFile;
                    this.registerOfficeSOHeaderFile = success.registerOfficeSOHeaderFile;
                    this.factoryPOHeaderFile = success.factoryPOHeaderFile;
                    this.factorySOHeaderFile = success.factorySOHeaderFile;
                }
            },
            (reason: any) => {}
        );
    }
    openAccountsModal() {
        const modalRef = this.modalService.open(AccountsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.currencies = this.currencies;
        modalRef.componentInstance.accountsDetails = this.form.controls["accountsDetails"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["accountsDetails"].patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openExportsModal() {
        const modalRef = this.modalService.open(ExportsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.exportsDetails = this.exportsDetails.value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["exportsDetails"].patchValue(success?.formData);
                    this.LUTDocumentFile = success.LUTDocumentFile;
                }
            },
            (reason: any) => {}
        );
    }
}
