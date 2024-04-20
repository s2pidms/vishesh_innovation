import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-gi-ppic-to-production-remarks",
    templateUrl: "./gi-ppic-to-production-remarks.component.html",
})
export class GIPPICToProductionRemarksComponent implements OnInit {
    @Input() remarksDetails: any = {};
    @Input() action: any = "";
    form: any = new UntypedFormGroup({
        PPICRemarksDetail: new UntypedFormGroup({
            PPICRemarks: new UntypedFormControl(null),
            issueBy: new UntypedFormControl(null),
            approvedBy: new UntypedFormControl(null),
            approvedDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"))
        }),
        QARemarksDetail: new UntypedFormGroup({
            QARemark: new UntypedFormControl(null),
            checkedBy: new UntypedFormControl(null),
            approvedBy: new UntypedFormControl(null),
            approvedDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"))
        })
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        if (this.remarksDetails) {
            this.form.patchValue(this.remarksDetails);
        }
        if (["view", "approve", "reject"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        // if (this.validationService.checkErrors(this.form, BOM_OF_DOCUMENTS_DETAILS_FORM_ERRORS)) {
        //     return;
        // }
        let formData = this.form.value;
        this.activeModal.close(formData);
    }
}
