import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {InkLabModalComponent} from "src/app/default/production/master/ink-master/screens/ink-lab-modal/ink-lab-modal.component";

@Component({
    selector: "app-ink-mixing-remarks-details",
    templateUrl: "./ink-mixing-remarks-details.component.html"
})
export class InkMixingRemarksDetailsComponent implements OnInit {
    @Input() remarksDetails: any = {};
    @Input() action: any = "";
    @Input() shiftOptions: any = [];
    form: any = new UntypedFormGroup({
        remarks: new UntypedFormGroup({
            manufacturingDate: new UntypedFormControl(null),
            shift: new UntypedFormControl(null),
            logBookRef: new UntypedFormControl(null),
            preparedBy: new UntypedFormControl(null),
            checkedBy: new UntypedFormControl(null)
        }),
        labValues: new UntypedFormControl({})
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
        if (this.remarksDetails) {
            console.log("this.remarksDetails", this.remarksDetails);

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

    openLabValuesModal() {
        const modalRef = this.modalService.open(InkLabModalComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.labValues = this.form.controls["labValues"].value;

        modalRef.result.then(
            (success: any) => {
                console.log("success", success);

                this.form.controls["labValues"].patchValue(success);
            },
            (reason: any) => {}
        );
    }
}
