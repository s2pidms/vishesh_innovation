import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DirectTaxInvoiceListComponent } from './screens/direct-tax-invoice-list/direct-tax-invoice-list.component';
import { DirectTaxInvoiceFormComponent } from './screens/direct-tax-invoice-form/direct-tax-invoice-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DirectTaxInvoiceListComponent },
  {
    path: 'form',
    component: DirectTaxInvoiceFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [DirectTaxInvoiceListComponent, DirectTaxInvoiceFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DirectTaxInvoiceModule {}
