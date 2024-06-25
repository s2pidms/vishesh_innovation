import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-jw-ship-to",
    templateUrl: "./jw-ship-to.component.html"
})
export class JwShipToComponent implements OnInit {
    @Input() data: any = [];
    @Input() shipToCompany: any = {};
    @Input() billFromCompanyData: any = {};
    @Input() billFromLocationArr: any = [];
    @Input() otherCharges: any = {};
    @Input() action: string = "";
    @Output() saveData = new EventEmitter<any>();

    form = new UntypedFormGroup({
        companyName: new UntypedFormControl(null),
        GSTIN: new UntypedFormControl(null),
        billFromLocation: new UntypedFormControl(null),
        country: new UntypedFormControl(null),
        state: new UntypedFormControl(null),
        city: new UntypedFormControl(null),
        pinCode: new UntypedFormControl(null),
        line1: new UntypedFormControl(null),
        line2: new UntypedFormControl(null),
        line3: new UntypedFormControl(null),
        line4: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.shipToCompany);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "shipTo"});
        this.toastService.success("Ship To Saved");
    }
    patchAddress(ele: any) {
        this.form.patchValue(ele);
    }
}
