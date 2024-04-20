import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-e-invoice-value-details",
    templateUrl: "./e-invoice-value-details.component.html"
})
export class EInvoiceValueDetailsComponent implements OnInit {
    @Input() valDetaills = {};
    submitted = false;
    form: any = new UntypedFormGroup({
        AssVal: new UntypedFormControl(null, [
            Validators.required,
            Validators.min(0),
            Validators.max(99999999999999.99)
        ]),
        CgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
        SgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
        IgstVal: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
        OthChrg: new UntypedFormControl(null, [Validators.min(0), Validators.max(99999999999999.99)]),
        RndOffAmt: new UntypedFormControl(null, [Validators.min(-99.99), Validators.max(99.99)]),
        TotInvVal: new UntypedFormControl(null, [
            Validators.required,
            Validators.min(0),
            Validators.max(99999999999999.99)
        ])
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.submitted = true;
        this.form.patchValue(this.valDetaills);
    }

    dismissModel() {
        this.activeModal.close(this.form.value);
    }
}
