import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-drn-ship-to",
    templateUrl: "./drn-ship-to.component.html"
})
export class DrnShipToComponent implements OnInit {
    @Input() data: any = [];
    @Input() selectedCustomerData: any = [];
    @Input() customerShippingAddress: any = {};
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

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.customerShippingAddress);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "SOShipTo"});
        this.toastService.success("Ship To Saved");
    }
    patchAddress(ele: any) {
        this.form.patchValue(ele);
    }
}
