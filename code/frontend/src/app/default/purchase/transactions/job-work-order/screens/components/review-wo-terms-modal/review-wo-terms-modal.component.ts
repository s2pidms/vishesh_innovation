import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {DRN_REVIEW_TERMS_FORM_ERRORS} from "@mocks/validations/sales";
import {WO_REVIEW_TERMS_ERRORS} from "@mocks/validations/purchase/wo-reviewTerms.validation";
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
    @Input() WOTermsArr: any = {};
    @Input() WOTermsData: any = {};
    // clickCount = 1;
    // showSelect = false;
    form: any = new UntypedFormGroup({
        paymentTerms: new UntypedFormControl(null, [Validators.required]),
        freightTerms: new UntypedFormControl(null),
        WORemarks: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private validationService: ValidationService) {}

    ngOnInit(): void {
        // let condition = this.WOTermsArr?.paymentTermsArr.some(
        //     (x: any) => x.label == this.WOTermsData.changedPaymentTerms
        // );

        // if (!condition) {
        //     this.showSelect = true;
        //     this.clickCount = 0;
        // }
        // if (this.action == "create") {
        //     this.showSelect = false;
        //     this.clickCount = 1;
        // }
        this.form.patchValue(this.WOTermsData);
        if (["approve", "reject", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, WO_REVIEW_TERMS_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }
    // enablePaymentTerms() {
    //     this.clickCount++;
    //     this.showSelect = this.clickCount % 2 === 0;
    // }
    // enableFreightTerms() {
    //     if (["create", "edit"].includes(this.action)) {
    //         this.form.controls["freightTerms"].enable();
    //     }
    // }
}
