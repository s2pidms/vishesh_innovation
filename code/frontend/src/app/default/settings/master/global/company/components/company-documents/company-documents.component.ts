import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-company-documents",
    templateUrl: "./company-documents.component.html"
})
export class CompanyDocumentsComponent implements OnInit {
    companyPdfHeaderFile: any = null;
    companySignatureFile: any = null;
    logoFile: any = null;
    landingPageHeaderFile: any = null;
    welcomeInfoFile: any = null;
    SOSignatureFile: any = null;
    SOPdfHeaderFile: any = null;
    registerOfficePOHeaderFile: any = null;
    registerOfficeSOHeaderFile: any = null;
    factoryPOHeaderFile: any = null;
    factorySOHeaderFile: any = null;

    @Input() templatesDetails = {};
    form: any = new UntypedFormGroup({
        logo: new UntypedFormControl(""),
        logoUrl: new UntypedFormControl(""),
        landingPageHeader: new UntypedFormControl(""),
        landingPageHeaderUrl: new UntypedFormControl(""),
        companyPdfHeader: new UntypedFormControl(""),
        companyPdfHeaderUrl: new UntypedFormControl(""),
        welcomeInfo: new UntypedFormControl(""),
        welcomeInfoUrl: new UntypedFormControl(""),
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
        factorySOHeader: new UntypedFormControl("")
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.templatesDetails);
    }

    dismissModel() {
        let obj = this.form.value;
        obj.logoFile = this.logoFile;
        obj.landingPageHeaderFile = this.landingPageHeaderFile;
        obj.companyPdfHeaderFile = this.companyPdfHeaderFile;
        obj.companySignatureFile = this.companySignatureFile;
        obj.welcomeInfoFile = this.welcomeInfoFile;
        obj.SOSignatureFile = this.SOSignatureFile;
        obj.SOPdfHeaderFile = this.SOPdfHeaderFile;
        obj.registerOfficePOHeaderFile = this.registerOfficePOHeaderFile;
        obj.registerOfficeSOHeaderFile = this.registerOfficeSOHeaderFile;
        obj.factoryPOHeaderFile = this.factoryPOHeaderFile;
        obj.factorySOHeaderFile = this.factorySOHeaderFile;

        this.activeModal.close(obj);
    }
}
