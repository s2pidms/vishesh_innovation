import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-off-take-qty-modal',
  templateUrl: './off-take-qty-modal.component.html',
  styles: [
    `
      .fa-caret-right {
        font-size: 2rem !important;
        margin-right: 4rem !important;
      }
    `,
  ],
})
export class OffTakeQtyModalComponent implements OnInit {
  @Input() action: any = '';
  @Input() monthlyOffTakeQty: any = null;
  @Input() annualOffTakeQty: any = null;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  dismissModel() {
    let obj = {
      monthlyOffTakeQty: this.monthlyOffTakeQty,
      annualOffTakeQty: this.annualOffTakeQty,
    };
    this.activeModal.close(obj);
  }
}
