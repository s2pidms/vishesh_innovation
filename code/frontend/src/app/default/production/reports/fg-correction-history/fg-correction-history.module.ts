import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FGCorrectionHistoryReportComponent } from './fg-correction-history.component';
import { SharedModule } from '../../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: FGCorrectionHistoryReportComponent },
];

@NgModule({
  declarations: [FGCorrectionHistoryReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FGCorrectionHistoryReportModule {}
