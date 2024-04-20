import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaxInvoiceSummaryComponent } from './tax-invoice-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: TaxInvoiceSummaryComponent }];

@NgModule({
  declarations: [TaxInvoiceSummaryComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class TaxInvoiceSummaryModule {}
