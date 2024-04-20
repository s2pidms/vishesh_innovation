import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryReportComponent } from './inventory-report.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: InventoryReportComponent }];

@NgModule({
  declarations: [InventoryReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class InventoryReportModule {}
