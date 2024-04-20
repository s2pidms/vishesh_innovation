import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceInvoiceListComponent } from './screens/service-invoice-list/service-invoice-list.component';
import { ServiceInvoiceFormComponent } from './screens/service-invoice-form/service-invoice-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { ServiceInvoiceGSTDetailsComponent } from './screens/service-invoice-gst-details/service-invoice-gst-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ServiceInvoiceListComponent },
  {
    path: 'form',
    component: ServiceInvoiceFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ServiceInvoiceListComponent,
    ServiceInvoiceFormComponent,
    ServiceInvoiceGSTDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServiceInvoiceModule {}
