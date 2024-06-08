import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sku-other-info',
  templateUrl: './sku-other-info.component.html',
  styles: [
    `
      .fa-caret-right {
        font-size: 2rem !important;
      }
      .setInputMargin {
        margin-top: -0.2rem;
      }
    `,
  ],
})
export class SkuOtherInfoComponent implements OnInit {
  @Input() action: any = '';
  @Input() otherInfo: any = {};
  form: any = new UntypedFormGroup({
    machinePreference: new UntypedFormControl(null),
    positiveRemarks: new UntypedFormControl(null),
    toolIdentification: new UntypedFormControl(null),
    artworkPath: new UntypedFormControl(null),
    productionRemarks: new UntypedFormControl(null),
  });

  get f() {
    return this.form.controls;
  }
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.form.patchValue(this.otherInfo);
    if (this.action == 'view') {
      this.form.disable();
    }
  }
  dismissModel() {
    this.activeModal.close(this.form.value);
  }

  reset() {
    this.form.reset();
    this.form.patchValue(this.otherInfo);
  }
}
