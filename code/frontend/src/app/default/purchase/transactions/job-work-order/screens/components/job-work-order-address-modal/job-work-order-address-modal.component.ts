import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-job-work-order-address-modal",
    templateUrl: "./job-work-order-address-modal.component.html"
})
export class JobWorkOrderAddressModalComponent implements OnInit {
    @Input() primaryAddress: any = {};
    @Input() action: string = "";

    form = new UntypedFormGroup({
        country: new UntypedFormControl(null),
        state: new UntypedFormControl(null),
        cityOrDistrict: new UntypedFormControl(null),
        pinCode: new UntypedFormControl(null),
        line1: new UntypedFormControl(null),
        line2: new UntypedFormControl(null),
        line3: new UntypedFormControl(null),
        line4: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.primaryAddress);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
}
