import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-dti-other-charges-modal",
    templateUrl: "./dti-other-charges-modal.component.html",
    styleUrls: ["./dti-other-charges-modal.component.scss"]
})
export class DTIOtherChargesModalComponent implements OnInit {
    @Input() otherCharges: any = {};
    @Input() action: any = "";
    @Input() DTITotalAmount: any = 0;
    @Output() saveData = new EventEmitter<any>();

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.otherCharges.totalProductValue = this.DTITotalAmount;

        this.updateTotalAmount();
    }
    updateTotalAmount() {
        this.otherCharges.totalTaxInvoiceValue = (
            +this.otherCharges.totalProductValue +
            +this.otherCharges.packagingAndForwarding +
            +this.otherCharges.freight +
            +this.otherCharges.insurance +
            +this.otherCharges.loadingAndUnloading +
            +this.otherCharges.miscellaneous
        ).toFixed(2);
        this.otherCharges.totalAmount = (
            +this.otherCharges.packagingAndForwarding +
            +this.otherCharges.freight +
            +this.otherCharges.insurance +
            +this.otherCharges.loadingAndUnloading +
            +this.otherCharges.miscellaneous
        ).toFixed(2);
    }
    resetValues() {
        this.otherCharges = {
            totalProductValue: 0,
            packagingAndForwarding: 0,
            freight: 0,
            insurance: 0,
            loadingAndUnloading: 0,
            miscellaneous: 0,
            totalAmount: 0,
            totalTaxInvoiceValue: 0
        };
    }
    dismissModel() {
        this.activeModal.close(this.otherCharges);
    }
}
