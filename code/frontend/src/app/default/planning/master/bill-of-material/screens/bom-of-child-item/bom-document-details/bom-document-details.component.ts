import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BOM_OF_DOCUMENTS_DETAILS_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";
import {ValidationService} from "@core/components";
import {BomDocumentRevisionHistoryComponent} from "../../bom-document-revision-history/bom-document-revision-history.component";

@Component({
    selector: "app-bom-document-details",
    templateUrl: "./bom-document-details.component.html"
})
export class BomDocumentDetailsComponent implements OnInit {
    documentDetails: any = [];
    @Input() oldDocumentDetails: any = [];
    @Input() documentDetailsObj: any = {};
    @Input() action: any = "";
    @Input() BOMNo: any = "";
    form: any = new UntypedFormGroup({
        documentNo: new UntypedFormControl(null, [Validators.required]),
        documentDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        revisionNo: new UntypedFormControl(null, [Validators.required]),
        revisionDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        docCreatedBy: new UntypedFormControl(null, [Validators.required]),
        docApprovedBy: new UntypedFormControl(null, [Validators.required]),
        QMSDocumentNo: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.documentDetails = [...this.oldDocumentDetails];
        if (this.documentDetailsObj) {
            this.form.patchValue(this.documentDetailsObj);
        }
        if (this.action == "view") {
            this.form.disable();
        }
        this.form.controls["documentNo"].setValue(this.BOMNo);
    }
    dismissModel() {
        if (this.validationService.checkErrors(this.form, BOM_OF_DOCUMENTS_DETAILS_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if (formData) {
            this.documentDetails.push(formData);
            this.activeModal.close({
                documentDetails: this.documentDetails,
                documentDetailsObj: formData
            });
        }
    }

    openRevisionReview() {
        if (this.oldDocumentDetails.length > 0) {
            const modalRef = this.modalService.open(BomDocumentRevisionHistoryComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.oldDocumentDetails = this.oldDocumentDetails;
        }
    }
}
