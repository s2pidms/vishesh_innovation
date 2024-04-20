import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-asn-disaptch-details",
    templateUrl: "./asn-disaptch-details.component.html"
})
export class AsnDisaptchDetailsComponent implements OnInit {
    @Input() data: any = [];
    @Input() dispatchDetails: any = {};
    @Input() action: string = "";
    freightPercentage: any = 0;

    form = new UntypedFormGroup({
        transporter: new UntypedFormControl(null, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        frightCharge: new UntypedFormControl("", [Validators.required]),
        frightTerms: new UntypedFormControl(null, [Validators.required]),
        deliveryType: new UntypedFormControl(null, [Validators.required]),
        docketLR: new UntypedFormControl(""),
        docketLRDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        freight: new UntypedFormControl("")
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    findFormErrors = [
        {
            message: "Transporter is Required",
            key: "transporter"
        },
        {
            message: "Mode of Transport is Required",
            key: "modeOfTransport"
        },
        {
            message: "Freight Charges is Required",
            key: "frightCharge"
        },
        {
            message: "Freight Terms is Required",
            key: "frightTerms"
        },
        {
            message: "Delivery Type is Required",
            key: "deliveryType"
        }
    ];

    setPercentage() {
        this.freightPercentage = (this.form.controls["frightCharge"].value / this.data?.invoiceValue) * 100;

        this.form.controls["freight"].setValue(this.freightPercentage.toFixed(2));
    }

    ngOnInit(): void {
        this.form.patchValue(this.dispatchDetails);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.controls["docketLRDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
    }

    saveDispatchDetails() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }

        let obj = this.form.value;
        this.activeModal.close(obj);
    }

    patchAddress(ele: any) {
        this.form.controls["customerShippingAddress"].patchValue(ele);
    }
}
