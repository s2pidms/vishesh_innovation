import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentDetailsComponent } from './shipment-details.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ShipmentDetailsComponent }];

@NgModule({
  declarations: [ShipmentDetailsComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class ShipmentDetailsModule {}
