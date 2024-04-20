import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeadResponseTimeComponent } from './lead-response-time.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: LeadResponseTimeComponent }];

@NgModule({
  declarations: [LeadResponseTimeComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class LeadResponseTimeModule {}
