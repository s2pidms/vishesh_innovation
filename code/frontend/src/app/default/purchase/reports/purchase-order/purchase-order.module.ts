import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PurchaseOrderComponent } from './purchase-order.component';
const routes: Routes = [{ path: '', component: PurchaseOrderComponent }];

@NgModule({
  declarations: [PurchaseOrderComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PurchaseOrderModule {}
