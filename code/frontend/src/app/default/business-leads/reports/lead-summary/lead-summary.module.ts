import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeadSummaryComponent } from './lead-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: LeadSummaryComponent }];

@NgModule({
  declarations: [LeadSummaryComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class LeadSummaryModule {}
