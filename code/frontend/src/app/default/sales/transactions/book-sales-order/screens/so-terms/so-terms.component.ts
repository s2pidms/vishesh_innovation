import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {POOtherChargesComponent} from "@modals/index";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SO_TERMS_FORM_ERRORS} from "@mocks/validations/sales";

@Component({
    selector: "app-so-terms",
    templateUrl: "./so-terms.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 2rem !important;
                margin-left: 2rem !important;
            }
            .assetChange {
                background-color: transparent;
                background-image: url("./../../../../../../../assets/new_icons/Asset_change.svg");
                background-size: 100% 100%;
                border: 0;
                color: white;
                height: 2.2rem;
                width: 2.2rem;
            }
        `
    ]
})
export class SoTermsComponent implements OnInit {
    @Input() action: any = "";
    @Input() POTerms: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Output() saveData = new EventEmitter<any>();
    @Input() otherCharges: any = {};
    clickCount = 1;
    showSelect = false;
    form: any = new UntypedFormGroup({
        paymentTerms: new UntypedFormControl(null),
        frightTerms: new UntypedFormControl("FOR - Free On Road", [Validators.required]),
        transporter: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl("", [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        SORemarks: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal
    ) {}

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
        if (["approve", "reject", "view", "generate", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        if (this.validationService.checkErrors(this.form, SO_TERMS_FORM_ERRORS)) {
            return;
        }

        let obj = this.form.value;
        obj.otherCharges = this.otherCharges;
        this.saveData.emit({data: obj, key: "SOTerms"});
        this.toastService.success("SO Terms Saved");
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

    openOtherChargesModal() {
        const modalRef = this.modalService.open(POOtherChargesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        this.otherCharges.action = this.action;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.otherCharges = success;
                }
            },
            (reason: any) => {}
        );
    }
}
