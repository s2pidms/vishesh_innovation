import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FgInwardEntrySummaryComponent } from './fg-inward-entry-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: FgInwardEntrySummaryComponent }];

@NgModule({
  declarations: [FgInwardEntrySummaryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FgInwardEntrySummaryModule {}
