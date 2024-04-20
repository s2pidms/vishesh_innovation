import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeaveApplicationRComponent } from './leave-application-r.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: LeaveApplicationRComponent }];

@NgModule({
  declarations: [LeaveApplicationRComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LeaveApplicationRModule {}
