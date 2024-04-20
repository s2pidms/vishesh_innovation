import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-PIExports',
  templateUrl: './exports-pi.component.html',
  styleUrls: ['../imports-pi.component.scss'],
})
export class ExportsPIComponent implements OnInit {
  @Input() tableData: any = {};

  constructor() {}

  ngOnInit(): void {}

  getAddress(address: any) {
    if (address) {
      return address.find((x: any) => x.addressType == 'Billing');
    }
  }
}
