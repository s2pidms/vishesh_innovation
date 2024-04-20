import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-way-bills-item-details',
  templateUrl: './e-way-bills-item-details.component.html',
})
export class EWayBillsItemDetailsComponent implements OnInit {
  @Input() othersValues: any = {};
  @Input() itemDetailsArr: any = [];
  submitted = false;
  form: any = new UntypedFormGroup({
    otherValue: new UntypedFormControl(0),
    totalValue: new UntypedFormControl(0),
    cgstValue: new UntypedFormControl(0),
    sgstValue: new UntypedFormControl(0),
    igstValue: new UntypedFormControl(0),
    totInvValue: new UntypedFormControl(null, [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.submitted = true;
    
    this.form.patchValue(this.othersValues);
  }

  dismissModel() {
    let obj = {
      othersValues: this.form.value,
      itemDetailsArr: this.itemDetailsArr,
    };
    this.activeModal.close(obj);
  }
}
