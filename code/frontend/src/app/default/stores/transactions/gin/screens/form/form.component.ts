import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { GINDetails } from '@interfaces/GINDetails';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  GINDetailsArray: GINDetails[] = [];
  form = new UntypedFormGroup({
    _id: new UntypedFormControl(null),
    GINDate: new UntypedFormControl('', [Validators.required]),
    MRNNumber: new UntypedFormControl('', [Validators.required]),
    purchaseCategory: new UntypedFormControl('', [Validators.required]),
    supplier: new UntypedFormControl(''),
    supplierInvoice: new UntypedFormControl(''),
    supplierInvoiceDate: new UntypedFormControl('', [Validators.required]),
    currency: new UntypedFormControl('', [Validators.required]),
    FXRateINR: new UntypedFormControl('', [Validators.required]),
    GINStatus: new UntypedFormControl('', [Validators.required]),
    GINDetails: new UntypedFormControl([]),
  });
  constructor() {}

  ngOnInit(): void {}
}
