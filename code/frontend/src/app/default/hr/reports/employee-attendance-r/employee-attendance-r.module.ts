import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeAttendanceRComponent } from './employee-attendance-r.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: EmployeeAttendanceRComponent }];

@NgModule({
  declarations: [EmployeeAttendanceRComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EmployeeAttendanceRModule {}
