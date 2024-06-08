import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-job-work-address-modal",
    templateUrl: "./job-work-address-modal.component.html"
})
export class JobWorkAddressModalComponent implements OnInit {
    @Input() shipToAddress: any = {};
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

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.shipToAddress);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
}
