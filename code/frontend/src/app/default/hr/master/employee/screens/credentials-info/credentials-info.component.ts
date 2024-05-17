import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
@Component({
    selector: "app-credentials-info",
    templateUrl: "./credentials-info.component.html"
})
export class CredentialsInfoComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() formData: any = {};
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

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
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
        empRelievingLetterUrl: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.form.patchValue(this.formData);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.formData);
    }

    dismissModel() {
        let obj = this.form.value;
        obj.empPhotoFile = this.empPhotoFile;
        obj.empAadharCardFile = this.empAadharCardFile;
        obj.empResumeFile = this.empResumeFile;
        obj.empPanCardFile = this.empPanCardFile;
        obj.empExpCertificateFile = this.empExpCertificateFile;
        obj.empRelievingLetterFile = this.empRelievingLetterFile;
        this.saveData.emit({data: obj, key: "credentialInfo"});
        this.toastService.success("credential Details Saved");
    }
}
