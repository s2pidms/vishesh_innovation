import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {EMPLOYEE_FORM_ERRORS} from "@mocks/validations/hr";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
    selector: "app-joining-details",
    templateUrl: "./joining-details.component.html"
})
export class JoiningDetailsComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() joiningDetailsInfo: any = {};
    @Input() masterData: any = {};
    @Input() uploadOfferLetterFile: any = null;
    @Input() uploadAppointmentLetterFile: any = null;

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    url: any = "";
    fileChange = new EventEmitter<any>();

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private domSanitizer: DomSanitizer
    ) {}
    form = new UntypedFormGroup({
        empJoiningDate: new UntypedFormControl(null, [Validators.required]),
        empJoiningLocation: new UntypedFormControl(null),
        empCadre: new UntypedFormControl(null),
        empDesignation: new UntypedFormControl(null, [Validators.required]),
        empDepartment: new UntypedFormControl(null, [Validators.required]),
        empReportTo: new UntypedFormControl(null),
        empType: new UntypedFormControl(null),
        empGrade: new UntypedFormControl(null),
        empOTApplicability: new UntypedFormControl(null),
        uploadOfferLetter: new UntypedFormControl(null),
        uploadOfferLetterUrl: new UntypedFormControl(null),
        uploadAppointmentLetter: new UntypedFormControl(null),
        uploadAppointmentLetterUrl: new UntypedFormControl(null),
        urlFieldName: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.uploadDocPatch();
        this.form.patchValue(this.joiningDetailsInfo);
        if (this.action == "view") {
            this.form.disable();
        }
    }
    uploadDocPatch() {
        // this.uploadOfferLetterFile = this.joiningDetailsInfo?.uploadOfferLetterFile;
        // this.uploadAppointmentLetterFile = this.joiningDetailsInfo?.uploadAppointmentLetterFile;
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

        processFile(this.uploadOfferLetterFile, "uploadOfferLetterUrl");
        processFile(this.uploadAppointmentLetterFile, "uploadAppointmentLetterUrl");
    }
    get f() {
        return this.form.controls;
    }
    setFileData(file: any, fileControl: any, urlControl: any) {
        this.f[fileControl].setValue(file?.name);
        this.f[urlControl].setValue(null);
    }
    setUploadOfferLetterData() {
        this.setFileData(this.uploadOfferLetterFile, "uploadOfferLetter", "uploadOfferLetterUrl");
    }
    setUploadAppointmentLetter() {
        this.setFileData(this.uploadAppointmentLetterFile, "uploadAppointmentLetter", "uploadAppointmentLetterUrl");
    }
    reset() {
        this.form.reset();
        this.form.patchValue(this.joiningDetailsInfo);
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, EMPLOYEE_FORM_ERRORS)) {
            return;
        }
        let payload = {
            joiningDetailsInfo: this.form.value,
            uploadOfferLetterFile: this.uploadOfferLetterFile,
            uploadAppointmentLetterFile: this.uploadAppointmentLetterFile
        };

        this.activeModal.close(payload);
        this.toastService.success("Joining Details Saved");
    }
}
