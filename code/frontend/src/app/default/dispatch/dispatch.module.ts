import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchComponent } from './dispatch.component';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TaxInvoiceComponent } from './transactions/tax-invoice/tax-invoice.component';

@NgModule({
  declarations: [DispatchComponent, TaxInvoiceComponent],
  imports: [CommonModule, DispatchRoutingModule, SharedModule],
})
export class DispatchModule {}
