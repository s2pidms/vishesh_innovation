import {Component, OnInit, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-employee-additional-info",
    templateUrl: "./employee-additional-info.component.html",
    styleUrls: ["./employee-additional-info.component.scss"]
})
export class EmployeeAdditionalInfoComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() formData: any = {};
    @Input() masterData: any = {};
    @Input() credentialInfo: any = {};
    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    saveData(value: any) {
        if (value.key == "familyInfo") {
            this.formData = {...this.formData, ...value.data};
            this.active = this.active + 1;
        }
        if (value.key == "addressInfo") {
            this.formData = {...this.formData, ...value.data};
            this.active = this.active + 1;
        }
        // if (value.key == "joiningDetailsInfo") {
        //     this.formData = {...this.formData, ...value.data};
        //     this.active = this.active + 1;
        // }
        if (value.key == "credentialInfo") {
            this.credentialInfo = value.data;
            this.formData.empPhoto = value?.data?.empPhoto;
            this.formData.empPhotoUrl = value?.data?.empPhotoUrl;
            this.formData.empResume = value?.data?.empResume;
            this.formData.empResumeUrl = value?.data?.empResumeUrl;
            this.formData.empAadharCard = value?.data?.empAadharCard;
            this.formData.empAadharCardUrl = value?.data?.empAadharCardUrl;
            this.formData.empPanCard = value?.data?.empPanCard;
            this.formData.empPanCardUrl = value?.data?.empPanCardUrl;
            this.formData.empExpCertificate = value?.data?.empExpCertificate;
            this.formData.empExpCertificateUrl = value?.data?.empExpCertificateUrl;
            this.formData.empRelievingLetter = value?.data?.empRelievingLetter;
            this.formData.empRelievingLetterUrl = value?.data?.empRelievingLetterUrl;
            this.formData.uploadBankPassBook = value?.data?.uploadBankPassBook;
            this.formData.uploadBankPassBookUrl = value?.data?.uploadBankPassBookUrl;
            this.formData.uploadBankCheckBook = value?.data?.uploadBankCheckBook;
            this.formData.uploadBankCheckBookUrl = value?.data?.uploadBankCheckBookUrl;
            this.active = this.active + 1;
        }
        if (value.key == "bankDetailInfo") {
            this.formData = {...this.formData, ...value.data};
            this.active = this.active + 1;
        }
        if (value.key == "status") {
            this.formData = {...this.formData, ...value.data};
            this.active = 1;
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.credentialInfo = this.credentialInfo;
        obj.formData = this.formData;
        this.activeModal.close(obj);
    }
}
