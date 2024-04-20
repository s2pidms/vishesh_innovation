import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-so-bill-form",
    templateUrl: "./so-bill-form.component.html"
})
export class SoBillFormComponent implements OnInit {
    @Input() data: any = [];
    @Input() billFromAddress: any = {};
    @Input() billFromLocation: any = "";
    @Input() billFromCompanyData: any = {};
    @Input() billFromLocationArr: any = [];
    @Input() otherCharges: any = {};
    @Input() action: string = "";
    @Output() saveData = new EventEmitter<any>();

    form = new UntypedFormGroup({
        billFromLocation: new UntypedFormControl(null),
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

    findFormErrors = [
        {
            message: "Party Name is Required",
            key: "customerShippingAddress"
        },
        {
            message: "Mode Of Transport is Required",
            key: "modeOfTransport"
        },
        {
            message: "Fright Terms is Required",
            key: "frightTerms"
        },
        {
            message: "Transporter is Required",
            key: "transporter"
        },
        {
            message: "Destination [Terminal or Port] is Required",
            key: "destination"
        }
    ];

    ngOnInit(): void {
        this.form.patchValue(this.billFromAddress);
        this.form.controls["billFromLocation"].setValue(this.billFromLocation);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "SOBillFrom"});
        this.toastService.success("Bill From Saved");
    }
    patchAddress(ele: any) {
        let data = this.billFromCompanyData.placesOfBusiness.find((x: any) => x.locationID == ele.value);
        let obj = {
            line1: data?.addressLine1,
            line2: data?.addressLine2,
            line3: data?.addressLine3,
            line4: data?.addressLine4,
            pinCode: data?.pinCode,
            city: data?.city,
            state: data?.state,
            country: data?.country
        };
        this.form.patchValue(obj);
    }
}
