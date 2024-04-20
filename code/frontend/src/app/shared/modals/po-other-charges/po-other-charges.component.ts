import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-po-other-charges',
  templateUrl: './po-other-charges.component.html',
})
export class POOtherChargesComponent implements OnInit {
  @Input() otherCharges: any = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  updateTotalAmount() {
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
      packagingAndForwarding: 0,
      freight: 0,
      insurance: 0,
      loadingAndUnloading: 0,
      miscellaneous: 0,
      totalAmount: 0,
    };
  }
}
