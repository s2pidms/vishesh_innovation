import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PIDomestics',
  templateUrl: './imports-pi.component.html',
  styleUrls: ['../imports-pi.component.scss'],
})
export class ImportsPIComponent implements OnInit {
  @Input() tableData: any = {};

  constructor() {}

  ngOnInit(): void {}

  getAddress(address: any) {
    if (address) {
      return address.find((x: any) => x.addressType == 'Billing');
    }
  }
}
