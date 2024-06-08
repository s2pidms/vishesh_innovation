import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ValidationService} from "@core/components";
import {JOB_CHALLAN_FREIGHT_TERMS_FORM_ERRORS} from "@mocks/validations/purchase";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-freight-terms-modal",
    templateUrl: "./freight-terms-modal.component.html",
    styleUrls: ["./freight-terms-modal.component.scss"]
})
export class FreightTermsModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() freightTermsInfo: any = {};
    @Input() modeOfTransport: any = [];
    @Input() freightTermsArr: any = [];
    @Input() transporterArr: any = [];
    form: any = new UntypedFormGroup({
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        transporterName: new UntypedFormControl(null, [Validators.required]),
        vehicleNo: new UntypedFormControl(null, [Validators.required]),
        freightTerms: new UntypedFormControl("FOR - Free On Road", [Validators.required]),
        destination: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private validationService: ValidationService) {}

    ngOnInit(): void {
        console.log("this.freightTermsInfo", this.freightTermsInfo);

        this.form.patchValue(this.freightTermsInfo);
        if (["approve", "reject", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        if (this.validationService.checkErrors(this.form, JOB_CHALLAN_FREIGHT_TERMS_FORM_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }
}
