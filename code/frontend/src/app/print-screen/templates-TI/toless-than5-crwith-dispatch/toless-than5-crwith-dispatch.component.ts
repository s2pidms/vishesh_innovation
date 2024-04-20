import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-TOLT5CRWithDispatch',
  templateUrl: './toless-than5-crwith-dispatch.component.html',
  styleUrls: ['../e-invoice.component.scss'],
})
export class TOLessThan5CRWithDispatchComponent implements OnInit {
  @Input() tableData: any = {};


  constructor() {}

  ngOnInit(): void {}

  getAddress(address: any) {
    if (address) {
      return address.find((x: any) => x.addressType == 'Billing');
    }
  }
}
