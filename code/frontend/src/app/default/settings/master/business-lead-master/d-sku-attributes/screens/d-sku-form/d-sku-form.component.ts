import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services';
import { AttributesConfigurationService } from '@services/settings';
import { SpinnerService } from '@core/services';

@Component({
  selector: 'app-d-sku-form',
  templateUrl: './d-sku-form.component.html',
})
export class DSkuFormComponent implements OnInit {
  submitted = false;
  constructor(
    private spinner: SpinnerService,
    private toastService: ToastService,
    private attributesConfigurationService: AttributesConfigurationService
  ) {}
  SKUAttributes: any = {};

  ngOnInit(): void {
    this.getAllData();
  }
  reset() {
    this.SKUAttributes = {};
    this.getAllData();
  }

  submit() {
    this.spinner.show();
    this.attributesConfigurationService
      .update(this.SKUAttributes._id, this.SKUAttributes)
      .subscribe((success) => {
        this.spinner.hide();
        this.submitted = false;
        this.toastService.success(success.message);
        this.reset();
      });
  }

  getAllData() {
    this.spinner.show();
    this.attributesConfigurationService
      .getAll({ type: 'D-SKU' })
      .subscribe((success) => {
        this.SKUAttributes = success;
      });
    this.spinner.hide();
  }
}
