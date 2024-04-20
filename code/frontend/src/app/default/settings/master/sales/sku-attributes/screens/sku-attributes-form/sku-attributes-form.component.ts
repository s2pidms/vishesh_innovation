import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services';
import { AttributesConfigurationService } from '@services/settings';
import { SpinnerService } from '@core/services';

@Component({
  selector: 'app-sku-attributes-form',
  templateUrl: './sku-attributes-form.component.html',
})
export class SkuAttributesFormComponent implements OnInit {
  submitted = false;
  constructor(
    private attributesConfigurationService: AttributesConfigurationService,
    private spinner: SpinnerService,
    private toastService: ToastService
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
    let payload = {
      type: 'SKU',
    };
    this.attributesConfigurationService.getAll(payload).subscribe((success) => {
      this.SKUAttributes = success;
    });
    this.spinner.hide();
  }
}
