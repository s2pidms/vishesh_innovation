import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentSummaryComponent } from './shipment-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ShipmentSummaryComponent }];

@NgModule({
  declarations: [ShipmentSummaryComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class ShipmentSummaryModule {}
