import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-E-Invoice',
  templateUrl: './e-invoice.component.html',
  styleUrls: ['../e-invoice.component.scss'],
})
export class EInvoiceComponent implements OnInit {
  @Input() tableData: any = {};

  constructor() {}

  ngOnInit(): void {}

  getAddress(address: any) {
    if (address) {
      return address.find((x: any) => x.addressType == 'Billing');
    }
  }
}
