import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentReportComponent } from './shipment-report.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ShipmentReportComponent }];

@NgModule({
  declarations: [ShipmentReportComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class ShipmentReportModule {}
