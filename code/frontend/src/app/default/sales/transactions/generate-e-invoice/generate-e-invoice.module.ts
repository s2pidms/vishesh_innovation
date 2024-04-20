import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenerateEInvoiceFormComponent } from './screens/generate-e-invoice-form/generate-e-invoice-form.component';
import { SharedModule } from '@shared/shared.module';
import { EInvoiceValueDetailsComponent } from './screens/e-invoice-value-details/e-invoice-value-details.component';
import { EInvoiceItemDetailsComponent } from './screens/e-invoice-item-details/e-invoice-item-details.component';
import { EInvoiceDispatchShipDetailsComponent } from './screens/e-invoice-dispatch-ship-details/e-invoice-dispatch-ship-details.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateEInvoiceFormComponent,
  },
];

@NgModule({
  declarations: [
    GenerateEInvoiceFormComponent,
    EInvoiceValueDetailsComponent,
    EInvoiceItemDetailsComponent,
    EInvoiceDispatchShipDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class GenerateEInvoiceModule {}
