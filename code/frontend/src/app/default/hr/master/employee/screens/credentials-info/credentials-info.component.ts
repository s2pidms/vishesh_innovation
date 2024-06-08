import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
    selector: "app-credentials-info",
    templateUrl: "./credentials-info.component.html"
})
export class CredentialsInfoComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() formData: any = {};
    @Input() credentialInfo: any = {};
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    empPhotoFile: any = null;
    empAadharCardFile: any = null;
    empResumeFile: any = null;
    empPanCardFile: any = null;
    empExpCertificateFile: any = null;
    empRelievingLetterFile: any = null;
    uploadBankPassBookFile: any = null;
    uploadBankCheckBookFile: any = null;
    url: any = "";
    fileChange = new EventEmitter<any>();

    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private domSanitizer: DomSanitizer
    ) {}

    form = new UntypedFormGroup({
        empPhoto: new UntypedFormControl(null),
        empPhotoUrl: new UntypedFormControl(null),
        empResume: new UntypedFormControl(null),
        empResumeUrl: new UntypedFormControl(null),
        empAadharCard: new UntypedFormControl(null),
        empAadharCardUrl: new UntypedFormControl(null),
        empPanCard: new UntypedFormControl(null),
        empPanCardUrl: new UntypedFormControl(null),
        empExpCertificate: new UntypedFormControl(null),
        empExpCertificateUrl: new UntypedFormControl(null),
        empRelievingLetter: new UntypedFormControl(null),
        empRelievingLetterUrl: new UntypedFormControl(null),
        uploadBankPassBook: new UntypedFormControl(null),
        uploadBankPassBookUrl: new UntypedFormControl(null),
        uploadBankCheckBook: new UntypedFormControl(null),
        uploadBankCheckBookUrl: new UntypedFormControl(null),
        urlFieldName: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.uploadDocPatch();
        this.form.patchValue(this.formData);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    uploadDocPatch() {
        this.empPhotoFile = this.credentialInfo?.empPhotoFile;
        this.empResumeFile = this.credentialInfo?.empResumeFile;
        this.empAadharCardFile = this.credentialInfo?.empAadharCardFile;
        this.empPanCardFile = this.credentialInfo?.empPanCardFile;
        this.empExpCertificateFile = this.credentialInfo?.empExpCertificateFile;
        this.empRelievingLetterFile = this.credentialInfo?.empRelievingLetterFile;
        this.uploadBankPassBookFile = this.credentialInfo?.uploadBankPassBookFile;
        this.uploadBankCheckBookFile = this.credentialInfo?.uploadBankCheckBookFile;

        const processFile = (file: File, urlFieldName: string) => {
            if (file) {
                this.fileChange.emit(file);
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    const base64: any = reader.result;
                    this.url = this.domSanitizer.bypassSecurityTrustUrl(base64);
                    this.f[urlFieldName].setValue(this.url);
                };
            }
        };

        processFile(this.empPhotoFile, "empPhotoUrl");
        processFile(this.empResumeFile, "empResumeUrl");
        processFile(this.empAadharCardFile, "empAadharCardUrl");
        processFile(this.empPanCardFile, "empPanCardUrl");
        processFile(this.empExpCertificateFile, "empExpCertificateUrl");
        processFile(this.empRelievingLetterFile, "empRelievingLetterUrl");
        processFile(this.uploadBankPassBookFile, "uploadBankPassBookUrl");
        processFile(this.uploadBankCheckBookFile, "uploadBankCheckBookUrl");
    }

    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.formData);
    }
    setFileData(file: any, fileControl: any, urlControl: any) {
        this.f[fileControl].setValue(file?.name);
        this.f[urlControl].setValue(null);
    }

    setEmpPhotoData() {
        this.setFileData(this.empPhotoFile, "empPhoto", "empPhotoUrl");
    }

    setResumeData() {
        this.setFileData(this.empResumeFile, "empResume", "empResumeUrl");
    }
    setAadharCardData() {
        this.setFileData(this.empAadharCardFile, "empAadharCard", "empAadharCardUrl");
    }
    setPanCardData() {
        this.setFileData(this.empPanCardFile, "empPanCard", "empPanCardUrl");
    }
    setExpCertificateData() {
        this.setFileData(this.empExpCertificateFile, "empExpCertificate", "empExpCertificateUrl");
    }
    setRelievingLetterData() {
        this.setFileData(this.empRelievingLetterFile, "empRelievingLetter", "empRelievingLetterUrl");
    }
    setUploadBankPassBookData() {
        this.setFileData(this.uploadBankPassBookFile, "uploadBankPassBook", "uploadBankPassBookUrl");
    }
    setUploadBankCheckBookData() {
        this.setFileData(this.uploadBankCheckBookFile, "uploadBankCheckBook", "uploadBankCheckBookUrl");
    }

    dismissModel() {
        let obj = this.form.value;
        obj.empPhotoFile = this.empPhotoFile;
        obj.empAadharCardFile = this.empAadharCardFile;
        obj.empResumeFile = this.empResumeFile;
        obj.empPanCardFile = this.empPanCardFile;
        obj.empExpCertificateFile = this.empExpCertificateFile;
        obj.empRelievingLetterFile = this.empRelievingLetterFile;
        obj.uploadBankPassBookFile = this.uploadBankPassBookFile;
        obj.uploadBankCheckBookFile = this.uploadBankCheckBookFile;
        this.saveData.emit({data: obj, key: "credentialInfo"});
        this.toastService.success("credential Details Saved");
    }
}
