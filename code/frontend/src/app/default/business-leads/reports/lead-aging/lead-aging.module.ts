import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeadAgingComponent } from './lead-aging.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: LeadAgingComponent }];

@NgModule({
  declarations: [LeadAgingComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class LeadAgingModule {}
