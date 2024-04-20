import { ViewAddressModal } from '@interfaces/viewAddressModal';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
})
export class ViewAddressComponent implements OnInit {
  @Input() data: ViewAddressModal = {};
  shippingLabel = '';
  shippingAddress = '';
  billingAddress = '';
  billingLabel = '';
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.data.addressA && this.data.addressA.address?.length) {
      let address = this.data.addressA.address[0];
      this.shippingAddress = `${address.line1 ? address.line1 : ''} ,${
        address.line2 ? address.line2 : ''
      },${address.line3 ? address.line3 : ''},${
        address.state ? address.state : ''
      },${address.city},${address.district ? address.district : ''},${
        address.pinCode ? address.pinCode : ''
      },${address.country ? address.country : ''}`;
      this.shippingLabel = `${this.data.addressA.label}`;
    }
    if (this.data.addressB && this.data.addressB.address?.length) {
      let address = this.data.addressB.address[0];
      this.billingAddress = `${address.line1 ? address.line1 : ''} ,${
        address.line2 ? address.line2 : ''
      },${address.line3 ? address.line3 : ''},${
        address.state ? address.state : ''
      },${address.city},${address.district ? address.district : ''},${
        address.pinCode ? address.pinCode : ''
      },${address.country ? address.country : ''}`;
      this.billingLabel = `${this.data.addressB.label}`;
    }
  }
  copyToClipboard(text: any) {
    navigator.clipboard.writeText(text);
  }
}
