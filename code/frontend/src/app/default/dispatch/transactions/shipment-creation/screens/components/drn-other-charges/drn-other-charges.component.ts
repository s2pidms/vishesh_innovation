import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-drn-other-charges",
    templateUrl: "./drn-other-charges.component.html",
    styleUrls: ["./drn-other-charges.component.scss"]
})
export class DrnOtherChargesComponent implements OnInit {
    @Input() otherCharges: any = {};
    @Input() action: any = "";
    @Input() SPTotalAmount: any = 0;
    @Output() saveData = new EventEmitter<any>();

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.otherCharges.totalProductValue = this.SPTotalAmount;

        this.updateTotalAmount();
    }
    updateTotalAmount() {
        this.otherCharges.totalShipmentValue = (
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
            totalShipmentValue: 0
        };
    }
    dismissModel() {
        this.saveData.emit({data: this.otherCharges, key: "otherCharges"});
        this.toastService.success("Other Charges Saved");
    }
}
