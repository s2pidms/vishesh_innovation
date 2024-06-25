import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-jw-bill-to",
    templateUrl: "./jw-bill-to.component.html"
})
export class JwBillToComponent implements OnInit {
    @Input() data: any = []; 
    @Input() billToCompany: any = {};
    @Input() billFromCompanyData: any = []
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
        this.form.patchValue(this.billToCompany);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "billTo"});
        this.toastService.success("Bill To Saved");
    }
    patchAddress(ele: any) {
        this.form.patchValue(ele);
    }
}
