import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CompanyService} from "@services/settings";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-company-upload-SOdocuments",
    templateUrl: "./company-upload-SOdocuments.component.html"
})
export class CompanyUploadSODocumentComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() locationId: any = "";
    @Input() companyId: any = "";
    @Input() companySOPDF: any = {};

    newSOSignatureFile: any = null;
    newSOPdfHeaderFile: any = null;
    PISignatureFile: any = null;
    TISignatureFile: any = null;
    btnDisable = false;

    form = new UntypedFormGroup({
        SOSignature: new UntypedFormControl("", [Validators.required]),
        SOSignatureUrl: new UntypedFormControl(""),
        SOPdfHeader: new UntypedFormControl("", [Validators.required]),
        SOPdfHeaderUrl: new UntypedFormControl(""),
        PISignature: new UntypedFormControl(""),
        PISignatureUrl: new UntypedFormControl(""),
        TISignature: new UntypedFormControl(""),
        TISignatureUrl: new UntypedFormControl(""),
        locationId: new UntypedFormControl("")
    });

    constructor(
        public activeModal: NgbActiveModal,
        private company: CompanyService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService
    ) {}

    ngOnInit(): void {
        this.form.controls["locationId"].setValue(this.locationId);
        this.form.patchValue(this.companySOPDF);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    uploadPDF() {
        if (this.companySOPDF.SOPdfHeader && this.locationId) {
            if (!this.form.controls["SOSignature"].value) {
                this.toastService.warning("Company SO Signature is Required");
                return;
            }
            if (!this.form.controls["SOPdfHeader"].value) {
                this.toastService.warning("Company SO PDF Header is Required");
                return;
            }
        } else {
            if (!this.newSOSignatureFile) {
                this.toastService.warning("Company SO Signature is Required");
                return;
            }
            if (!this.newSOPdfHeaderFile) {
                this.toastService.warning("Company SO PDF Header is Required");
                return;
            }
        }

        let formData = this.form.value;

        let formValue = new FormData();
        formValue.append("key", "company");

        if (formData.SOSignature) {
            formValue.append("SOSignature", formData.SOSignature);
        }
        if (formData.SOSignatureUrl) {
            formValue.append("SOSignatureUrl", formData.SOSignatureUrl);
        }
        if (formData.SOPdfHeader) {
            formValue.append("SOPdfHeader", formData.SOPdfHeader);
        }
        if (formData.SOPdfHeaderUrl) {
            formValue.append("SOPdfHeaderUrl", formData.SOPdfHeaderUrl);
        }
        if (formData.PISignature) {
            formValue.append("PISignature", formData.PISignature);
        }
        if (formData.PISignatureUrl) {
            formValue.append("PISignatureUrl", formData.PISignatureUrl);
        }
        if (formData.TISignature) {
            formValue.append("TISignature", formData.TISignature);
        }
        if (formData.TISignatureUrl) {
            formValue.append("TISignatureUrl", formData.TISignatureUrl);
        }
        if (formData.locationId) {
            formValue.append("locationId", formData.locationId);
        }

        if (this.newSOSignatureFile) {
            formValue.append("newSOSignatureFile", this.newSOSignatureFile, this.newSOSignatureFile.name);
        }

        if (this.newSOPdfHeaderFile) {
            formValue.append("newSOPdfHeaderFile", this.newSOPdfHeaderFile, this.newSOPdfHeaderFile.name);
        }
        if (this.PISignatureFile) {
            formValue.append("PISignatureFile", this.PISignatureFile, this.PISignatureFile.name);
        }
        if (this.TISignatureFile) {
            formValue.append("TISignatureFile", this.TISignatureFile, this.TISignatureFile.name);
        }
        this.spinner.show();
        this.company.SOSignPDF(this.companyId, formValue).subscribe(success => {
            this.toastService.success(success.message);
            this.spinner.hide();
            this.activeModal.close();
        });
    }
}
