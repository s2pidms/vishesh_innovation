import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-po-add-service-charges",
    templateUrl: "./po-add-service-charges.component.html"
})
export class POAddServiceChargesComponent implements OnInit {
    @Input() serviceChargesList: any = [];
    @Input() totalServiceCharges: any = "";
    @Input() action: any = "";

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
    updateTotalAmount() {
        this.totalServiceCharges = this.serviceChargesList
            ?.map((x: any) => x?.serviceCharges)
            ?.filter((y: any) => y > 0)
            ?.reduce((a: any, c: any) => +a + +c, 0);
    }

    disMissModal() {
        this.activeModal.close({
            serviceChargesList: this.serviceChargesList,
            totalServiceCharges: this.totalServiceCharges
        });
    }
}
