import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {DRN_REVIEW_TERMS_FORM_ERRORS} from "@mocks/validations/sales";
@Component({
    selector: "app-review-wo-terms-modal",
    templateUrl: "./review-wo-terms-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 2rem !important;
                margin-left: 2rem !important;
            }
            .assetChange {
                background-color: transparent;
                // background-image: url("./../../../../../../../assets/new_icons/Asset_change.svg");
                background-size: 100% 100%;
                border: 0;
                color: white;
                height: 2.2rem;
                width: 2.2rem;
            }
        `
    ]
})
export class ReviewWoTermsModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() POTerms: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Input() otherCharges: any = {};
    clickCount = 1;
    showSelect = false;
    form: any = new UntypedFormGroup({
        paymentTerms: new UntypedFormControl(null, [Validators.required]),
        frightTerms: new UntypedFormControl("FOR - Free On Road"),
        transporter: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl(null, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private validationService: ValidationService) {}

    ngOnInit(): void {
        let condition = this.SOTermsArr?.paymentTermsArr.some(
            (x: any) => x.label == this.SOTermsData.changedPaymentTerms
        );

        if (!condition) {
            this.showSelect = true;
            this.clickCount = 0;
        }
        if (this.action == "create") {
            this.showSelect = false;
            this.clickCount = 1;
        }
        this.form.patchValue(this.SOTermsData);
        if (["approval", "rejection", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, DRN_REVIEW_TERMS_FORM_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }
    enablePaymentTerms() {
        this.clickCount++;
        this.showSelect = this.clickCount % 2 === 0;
    }
    enableFreightTerms() {
        if (["create", "edit"].includes(this.action)) {
            this.form.controls["frightTerms"].enable();
        }
    }
}
