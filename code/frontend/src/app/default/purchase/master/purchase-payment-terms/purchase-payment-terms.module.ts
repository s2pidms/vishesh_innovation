import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchasePaymentTermsFormComponent } from './screens/purchase-payment-terms-form/purchase-payment-terms-form.component';
import { PurchasePaymentTermsListComponent } from './screens/purchase-payment-terms-list/purchase-payment-terms-list.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PurchasePaymentTermsListComponent },
  {
    path: 'form',
    component: PurchasePaymentTermsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    PurchasePaymentTermsFormComponent,
    PurchasePaymentTermsListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PurchasePaymentTermsModule {}
