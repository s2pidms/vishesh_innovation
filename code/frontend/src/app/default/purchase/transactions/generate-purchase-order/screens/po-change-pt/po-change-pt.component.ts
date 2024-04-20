import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-po-change-pt',
  templateUrl: './po-change-pt.component.html',
  styleUrls: ['./po-change-pt.component.scss'],
})
export class POChangePTComponent implements OnInit {
  @Input() action: any = '';
  @Input() changedPaymentTerms: any = '';
  @Input() deliveryLocation: any = '';
  @Input() POTerms: any = {};
  @Input() paymentTermsArr: any = [];
  @Input() deliveryLocationArr: any = [];
  @Input() freightTermsArr: any = [];
  @Input() transporterArr: any = [];
  clickCount = 1;
  showSelect = false;
  form: any = new UntypedFormGroup({
    deliveryLocation: new UntypedFormControl(null),
    changedPaymentTerms: new UntypedFormControl(null),
    freightTerms: new UntypedFormControl({
      value: 'FOR - Free On Road',
      disabled: true,
    }),
    transporter: new UntypedFormControl(null),
    PORemarks: new UntypedFormControl(null),
  });

  get f() {
    return this.form.controls;
  }
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    let condition = this.paymentTermsArr.some(
      (x: any) => x.label == this.POTerms.changedPaymentTerms
    );

    if (!condition) {
      this.showSelect = true;
      this.clickCount = 0;
    }
    if (this.action == 'create') {
      this.showSelect = false;
      this.clickCount = 1;
    }
    this.form.patchValue(this.POTerms);
    if (
      ['approve', 'reject', 'view', 'generate', 'cancel'].includes(this.action)
    ) {
      this.form.disable();
    }
  }
  dismissModel() {
    this.activeModal.close(this.form.value);
  }
  enablePaymentTerms() {
    this.clickCount++;
    this.showSelect = this.clickCount % 2 === 0;
  }
  enableFreightTerms() {
    if (['create', 'edit'].includes(this.action)) {
      this.form.controls['freightTerms'].enable();
    }
  }
}
