import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-way-bills-transportation-details',
  templateUrl: './e-way-bills-transportation-details.component.html',
})
export class EWayBillsTransportationDetailsComponent implements OnInit {
  @Input() transportationDetails = {};
  submitted = false;
  form: any = new UntypedFormGroup({
    transporterId: new UntypedFormControl(null, [
      Validators.pattern('[0-9]{2}[0-9|A-Z]{13}'),
    ]),
    transporterName: new UntypedFormControl(null, [Validators.maxLength(100)]),
    transDistance: new UntypedFormControl(0, [Validators.required]),
    vehicleNo: new UntypedFormControl(null, [
      Validators.minLength(7),
      Validators.maxLength(15),
    ]),
    transDocNo: new UntypedFormControl(null, [Validators.maxLength(15)]),
    transDocDate: new UntypedFormControl(null),
    transMode: new UntypedFormControl(null),
  });

  get f() {
    return this.form.controls;
  }
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.submitted = true;
    this.form.patchValue(this.transportationDetails);
  }

  dismissModel() {
    this.activeModal.close(this.form.value);
  }
}
