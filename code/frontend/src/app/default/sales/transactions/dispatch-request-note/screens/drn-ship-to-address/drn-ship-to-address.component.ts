import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-drn-ship-to-address",
    templateUrl: "./drn-ship-to-address.component.html"
})
export class DrnShipToAddressComponent implements OnInit {
    @Input() customerShippingAddress: any = {};
    @Input() action: string = "";

    form = new UntypedFormGroup({
        line1: new UntypedFormControl(null),
        line2: new UntypedFormControl(null),
        line3: new UntypedFormControl(null),
        line4: new UntypedFormControl(null),
        pinCode: new UntypedFormControl(null),
        city: new UntypedFormControl(null),
        state: new UntypedFormControl(null),
        country: new UntypedFormControl(null)
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.customerShippingAddress);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
}
