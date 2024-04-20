import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { ServicePurchaseOrderComponent } from './service-purchase-order.component';
const routes: Routes = [{ path: '', component: ServicePurchaseOrderComponent }];
@NgModule({
  declarations: [ServicePurchaseOrderComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ServicePurchaseOrderModule {}
