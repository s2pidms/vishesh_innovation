import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrFulfillmentStatusComponent } from './gr-fulfillment-status.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: GrFulfillmentStatusComponent }];

@NgModule({
  declarations: [GrFulfillmentStatusComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GrFulfillmentStatusModule {}
