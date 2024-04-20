import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-ink-lab-modal',
  templateUrl: './ink-lab-modal.component.html',
  styleUrls: ['./ink-lab-modal.component.scss'],
})
export class InkLabModalComponent implements OnInit {
  @Input() action: any = '';
  @Input() labValues: any = {};
  form: any = new UntypedFormGroup({
    L: new UntypedFormControl(null),
    a: new UntypedFormControl(null),
    b: new UntypedFormControl(null),
  });

  get f() {
    return this.form.controls;
  }
  constructor(
    public activeModal: NgbActiveModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.labValues);
    if (this.action == 'view') {
      this.form.disable();
    }
  }
  dismissModel() {
    this.activeModal.close(this.form.value);
  }

  setLValues() {
    let L = this.form.controls['L'].value;
    if (L > 100 || L < 0) {
      this.toastService.warning('L Value should be in range 0 to 100 !!!');
      this.form.controls['L'].setValue(null);
    }
  }
  setAValues() {
    let a = this.form.controls['a'].value;
    if (a > 127 || a < -128) {
      this.toastService.warning('A Value should be in range  -128 to 127 !!!');
      this.form.controls['a'].setValue(null);
    }
  }
  setBValues() {
    let b = this.form.controls['b'].value;
    if (b > 127 || b < -128) {
      this.toastService.warning('B Value should be in range -128 to 127 !!!');
      this.form.controls['b'].setValue(null);
    }
  }
}
