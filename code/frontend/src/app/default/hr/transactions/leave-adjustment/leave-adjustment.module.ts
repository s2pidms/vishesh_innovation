import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeaveAdjustmentListComponent } from './screens/leave-adjustment-list/leave-adjustment-list.component';
import { LeaveAdjustmentFormComponent } from './screens/leave-adjustment-form/leave-adjustment-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'leave-adjustment-list', pathMatch: 'full' },
  { path: 'leave-adjustment-list', component: LeaveAdjustmentListComponent },
  {
    path: 'leave-adjustment-form',
    component: LeaveAdjustmentFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [LeaveAdjustmentFormComponent, LeaveAdjustmentListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LeaveAdjustmentModule {}
