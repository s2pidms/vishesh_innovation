import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-so-bill-to",
    templateUrl: "./so-bill-to.component.html"
})
export class SoBillToComponent implements OnInit {
    @Input() data: any = [];
    @Input() selectedCustomerData: any = [];
    @Input() selectedCustomerBillingData: any = [];
    @Input() customerBillingAddress: any = {};
    @Input() billToAddress: any = {};
    @Input() billFromCompanyData: any = {};
    @Input() billFromLocationArr: any = [];
    @Input() otherCharges: any = {};
    @Input() action: string = "";
    @Output() saveData = new EventEmitter<any>();

    form = new UntypedFormGroup({
        contactPersonName: new UntypedFormControl(null, [Validators.required]),
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
        this.form.patchValue(this.customerBillingAddress);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "SOBillTo"});
        this.toastService.success("Bill To Saved");
    }
    patchAddress(ele: any) {
        this.form.patchValue(ele);
    }
}
