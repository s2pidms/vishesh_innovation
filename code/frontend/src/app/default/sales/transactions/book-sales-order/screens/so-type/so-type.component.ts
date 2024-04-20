import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SO_ORDER_TYPE } from '@mocks/constant';

@Component({
  selector: 'app-so-type',
  templateUrl: './so-type.component.html',
})
export class SoTypeComponent implements OnInit {
  @Input() action: any = '';
  @Input() SOType: any = null;
  SOTypeObj: any = SO_ORDER_TYPE;
  SOTypeArr: any = SO_ORDER_TYPE.getAllSOType();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  dismissModel() {
    this.activeModal.close(this.SOType);
  }
}
