import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators, FormBuilder} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {POOtherChargesComponent} from "../po-other-charges/po-other-charges.component";

@Component({
    selector: "app-sales-dispatch-details",
    templateUrl: "./sales-dispatch-details.component.html",
    styleUrls: ["./sales-dispatch-details.component.scss"]
})
export class SalesDispatchDetailsComponent implements OnInit {
    @Input() data: any = [];
    @Input() dispatchDetails: any = {};
    @Input() otherCharges: any = {};
    @Input() action: string = "";

    form = new UntypedFormGroup({
        customerShippingAddress: new UntypedFormGroup({
            contactPersonName: new UntypedFormControl("", [Validators.required]),
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            country: new UntypedFormControl("")
        }),
        frightTerms: new UntypedFormControl(null, [Validators.required]),
        transporter: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl("", [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required])
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private modalService: NgbModal
    ) {}

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
        this.form.patchValue(this.dispatchDetails);
        if (this.action == "view" || this.action == "cancel" || this.action == "approve") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    openOtherChargesModal() {
        const modalRef = this.modalService.open(POOtherChargesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        this.otherCharges.action = this.action;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.otherCharges = success;
                }
            },
            (reason: any) => {}
        );
    }

    saveDispatchDetails() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }

        let obj = this.form.value;
        obj.otherCharges = this.otherCharges;
        this.activeModal.close(obj);
    }

    patchAddress(ele: any) {
        this.form.controls["customerShippingAddress"].patchValue(ele);
    }
}
