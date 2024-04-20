import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesPaymentTermsFormComponent } from './screens/sales-payment-terms-form/sales-payment-terms-form.component';
import { SalesPaymentTermsListComponent } from './screens/sales-payment-terms-list/sales-payment-terms-list.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SalesPaymentTermsListComponent },
  {
    path: 'form',
    component: SalesPaymentTermsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    SalesPaymentTermsFormComponent,
    SalesPaymentTermsListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SalesPaymentTermsModule {}
