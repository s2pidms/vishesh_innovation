import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOrderSKUComponent } from './back-order-sku.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: BackOrderSKUComponent }];

@NgModule({
  declarations: [BackOrderSKUComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BackOrderSKUModule {}
