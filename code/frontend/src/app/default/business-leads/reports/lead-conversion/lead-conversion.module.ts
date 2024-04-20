import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeadConversionComponent } from './lead-conversion.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: LeadConversionComponent }];

@NgModule({
  declarations: [LeadConversionComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class LeadConversionModule {}
