import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidationService } from '@core/components';

@Component({
  selector: 'app-e-invoice-dispatch-ship-details',
  templateUrl: './e-invoice-dispatch-ship-details.component.html',
})
export class EInvoiceDispatchShipDetailsComponent implements OnInit {
  @Input() data: any = [];
  @Input() dispDetails: any = {};
  @Input() shiDetails: any = {};
  @Input() action: string = '';
  freightPercentage: any = 0;
  submitted = false;

  form = new UntypedFormGroup({
    DispDtls: new UntypedFormGroup({
      Nm: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Addr1: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Addr2: new UntypedFormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Loc: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Pin: new UntypedFormControl(null, [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999),
      ]),
      Stcd: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern('^(?!0+$)([0-9]{1,2})$'),
      ]),
    }),
    ShipDtls: new UntypedFormGroup({
      Gstin: new UntypedFormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('^(([0-9]{2}[0-9A-Z]{13})|URP)$'),
      ]),
      LglNm: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      TrdNm: new UntypedFormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Addr1: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Addr2: new UntypedFormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Loc: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('^([^\\"])*$'),
      ]),
      Pin: new UntypedFormControl(null, [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999),
      ]),
      Stcd: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern('^(?!0+$)([0-9]{1,2})$'),
      ]),
    }),
  });

  get dispDtlsForm() {
    return this.form.get('DispDtls') as UntypedFormGroup;
  }
  get shipDtlsForm() {
    return this.form.get('ShipDtls') as UntypedFormGroup;
  }

  constructor(
    public activeModal: NgbActiveModal,
    private validationService: ValidationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.submitted = true;
    this.dispDtlsForm.patchValue(this.dispDetails);
    this.shipDtlsForm.patchValue(this.shiDetails);
    if (
      this.action == 'view' ||
      this.action == 'cancel' ||
      this.action == 'approve'
    ) {
      this.form.disable();
    }
  }
  get f() {
    return this.form.controls;
  }

  saveDispatchDetails() {
    let obj = this.form.value;
    this.activeModal.close(obj);
  }
}
