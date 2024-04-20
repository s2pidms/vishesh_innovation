import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProformaInvoiceListComponent } from './screens/proforma-invoice-list/proforma-invoice-list.component';
import { ProformaInvoiceFormComponent } from './screens/proforma-invoice-form/proforma-invoice-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProformaInvoiceListComponent },
  {
    path: 'form',
    component: ProformaInvoiceFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [ProformaInvoiceListComponent, ProformaInvoiceFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProformaInvoiceModule {}
