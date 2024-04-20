import { Component, Input, OnInit } from '@angular/core';
import { PURCHASE_ORDER_TYPE } from '@mocks/constant';

@Component({
  selector: 'app-PODomestics',
  templateUrl: './domestics-poprint-screen.component.html',
  styleUrls: ['../tem-poprint-screen.component.scss'],
})
export class DomesticsPOPrintScreenComponent implements OnInit {
  @Input() tableData: any = {};
  @Input() termsAndConditions: any = '';
  POTypeObj: any = PURCHASE_ORDER_TYPE;
  constructor() {}

  ngOnInit(): void {}
}
