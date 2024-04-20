import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FGIEReportLocationWiseComponent } from './fgie-report-location-wise.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: FGIEReportLocationWiseComponent },
];

@NgModule({
  declarations: [FGIEReportLocationWiseComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FGIEReportLocationWiseModule {}
