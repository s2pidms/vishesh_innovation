import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-addtional-info-modal",
    templateUrl: "./addtional-info-modal.component.html",
    styleUrls: ["./addtional-info-modal.component.scss"]
})
export class AddtionalInfoModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() receivedDocuments: any = {};
    @Input() transporterArr: any = [];
    form: any = new UntypedFormGroup({
        goodsDeliveryDate: new UntypedFormControl(null),
        transporterName: new UntypedFormControl(null),
        AWB_LR_BR: new UntypedFormControl(null),
        freightChargesPaid: new UntypedFormControl(null),
        otherChargesPaid: new UntypedFormControl(null),
        isTaxInvoice: new UntypedFormControl(null),
        isEWayBill: new UntypedFormControl(null),
        isDeliveryChallan: new UntypedFormControl(null),
        isPackingList: new UntypedFormControl(null),
        isCOATC: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.receivedDocuments);
        if (["view", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        this.activeModal.close(this.form.value);
    }
}
