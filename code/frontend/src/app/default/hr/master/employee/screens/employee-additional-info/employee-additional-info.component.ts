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
    credentialInfo: any = {};
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
