import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from '@core/services';
import { MenuTitleService, SpinnerService } from '@core/services';
import { NgbdSortableHeader } from '@directives/sortable.directive';

export interface itemSubCategories {
  _id: string;
  employeeId: {
    empCode?: string;
    empFullName?: string;
  };
  applicationDate: string;
  fromDate: string;
  toDate: string;
  resumptionDate: string;
  halfDay: Number;
  reason: string;
  ODDays: number;
  monthDays: string;
  onDutyApplicationNumber: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | any;
  page: number = 1;
  pageSize: number = 5;
  collection: number = 0;
  column: string = 'createdAt';
  direction: number = -1;
  search: string = '';
  tableData: itemSubCategories[] = [];
  originTableData: itemSubCategories[] = [];
  user: any = {};
  fromDate: string = '';
  toDate: string = '';

  constructor() {}

  form = new UntypedFormGroup({
    _id: new UntypedFormControl(null),
    ICDate: new UntypedFormControl('', [Validators.required]),
    GINDate: new UntypedFormControl('', [Validators.required]),
    GIN: new UntypedFormControl('', [Validators.required]),
    MRN: new UntypedFormControl('', [Validators.required]),
    ICStatus: new UntypedFormControl('', [Validators.required]),
    GINLineNumber: new UntypedFormControl(''),
    UOM: new UntypedFormControl('', [Validators.required]),
    item: new UntypedFormControl(''),
    itemType: new UntypedFormControl(''),
    itemSubCategory: new UntypedFormControl(''),
    openIRQty: new UntypedFormControl(''),
    updatedQty: new UntypedFormControl(''),
    closedIRQty: new UntypedFormControl(''),
    standardRate: new UntypedFormControl(''),
    purchaseRate: new UntypedFormControl(''),
    purchaseRateUSD: new UntypedFormControl(''),
    purchaseRatINR: new UntypedFormControl(''),
    lineValueINR: new UntypedFormControl(''),
    releasedQty: new UntypedFormControl(''),
    rejectedQty: new UntypedFormControl(''),
    batchDate: new UntypedFormControl(''),
  });
  ngOnInit(): void {}
}
