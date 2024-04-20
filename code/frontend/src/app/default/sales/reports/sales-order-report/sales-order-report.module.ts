import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesOrderReportComponent } from './sales-order-report.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: SalesOrderReportComponent }];

@NgModule({
  declarations: [SalesOrderReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SalesOrderReportModule {}
