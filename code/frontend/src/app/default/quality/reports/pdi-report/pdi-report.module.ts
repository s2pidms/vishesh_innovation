import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PDIReportReportComponent } from './pdi-report.component';
import { SharedModule } from '../../../../shared/shared.module';

const routes: Routes = [{ path: '', component: PDIReportReportComponent }];

@NgModule({
  declarations: [PDIReportReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PDIReportReportModule {}
