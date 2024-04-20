import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-add-purchase-details",
    templateUrl: "./add-purchase-details.component.html"
})
export class AddPurchaseDetailsComponent implements OnInit {
    cpaPurchaseAgreement: any = null;

    @Input() templatesDetails = {};
    @Input() action = "";
    form: any = new UntypedFormGroup({
        cpaFile: new UntypedFormControl(""),
        cpaFileUrl: new UntypedFormControl(""),
        supplierLeadTimeInDays: new UntypedFormControl("")
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.templatesDetails);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    dismissModel() {
        let obj = this.form.value;
        obj.cpaPurchaseAgreement = this.cpaPurchaseAgreement;
        this.activeModal.close(obj);
    }
}
