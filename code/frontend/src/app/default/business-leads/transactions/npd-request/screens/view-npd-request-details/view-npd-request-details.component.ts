import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService, UtilityService } from '@core/services';
import { NPDRequestService } from '@services/business-leads';

@Component({
  selector: 'app-view-npd-request-details',
  templateUrl: './view-npd-request-details.component.html',
  styles: [
    `
      .content {
        height: auto !important;
      }
    `,
  ],
})
export class ViewNpdRequestDetailsComponent implements OnInit {
  @Input() NPDId: string = '';
  action: string = 'create';
  customers: any = [];
  productCategory: any = [];
  buildStage: any = [];
  orderType: any = [];
  developmentCharges: any = [];

  constructor(
    public activeModal: NgbActiveModal,
    private npdRequestService: NPDRequestService,
    private spinner: SpinnerService,
    private utilityService: UtilityService
  ) {}

  form: any = new UntypedFormGroup({
    _id: new UntypedFormControl(null),
    NPDNo: new UntypedFormControl(''),
    NPDDate: new UntypedFormControl(
      this.utilityService.getTodayDate('YYYY-MM-DD')
    ),

    reference: new UntypedFormControl(''),
    referenceModel: new UntypedFormControl('', [Validators.required]),
    productCategory: new UntypedFormControl(null, [Validators.required]),
    projectName: new UntypedFormControl(null, [Validators.required]),
    productBrief: new UntypedFormControl('', [Validators.required]),
    buildStage: new UntypedFormControl(null, [Validators.required]),
    orderType: new UntypedFormControl(null, [Validators.required]),
    monthlyOffTakeQty: new UntypedFormControl('', [Validators.required]),
    developmentCharges: new UntypedFormControl(null, [Validators.required]),
    requestedQty: new UntypedFormControl('', [Validators.required]),
    expectedDeliveryDate: new UntypedFormControl(
      this.utilityService.getTodayDate('YYYY-MM-DD'),
      [Validators.required]
    ),
    validationRequired: new UntypedFormControl(null, [Validators.required]),
    NPDRequestedBy: new UntypedFormControl('', [Validators.required]),
    remarks: new UntypedFormControl(null),
    customerInputsChecklist: new UntypedFormControl([]),
    status: new UntypedFormControl('Awaiting Review', [Validators.required]),
  });

  ngOnInit(): void {
    this.action = 'view';
    this.getInitialData();
  }

  getInitialData() {
    this.spinner.show();
    this.npdRequestService.getAllMasterData({}).subscribe((result) => {
      this.customers = result.customers;
      this.productCategory = result.productCategory;
      this.buildStage = result.buildStage;
      this.orderType = result.orderType;
      this.developmentCharges = result.developmentCharges;
      if (this.NPDId) {
        this.action = 'view';
        this.npdRequestService.getById(this.NPDId).subscribe((success: any) => {
          this.spinner.hide();
          if (Object.keys(success).length == 0) {
            return;
          }
          if (success.NPDDate) {
            success.NPDDate = this.utilityService.getFormatDate(
              success.NPDDate,
              'YYYY-MM-DD'
            );
          }
          if (success.expectedDeliveryDate) {
            success.expectedDeliveryDate = this.utilityService.getFormatDate(
              success.expectedDeliveryDate,
              'YYYY-MM-DD'
            );
          }
          this.form.patchValue(success);
          if (this.action == 'view') {
            this.form.disable();
          }
        });
      }
    });
  }
}
