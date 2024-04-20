import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';
const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'leave_applicationR',
        loadChildren: () =>
          import('./leave-application-r/leave-application-r.module').then(
            (m) => m.LeaveApplicationRModule
          ),
      },
      {
        path: 'employee_attendanceR',
        loadChildren: () =>
          import('./employee-attendance-r/employee-attendance-r.module').then(
            (m) => m.EmployeeAttendanceRModule
          ),
      },
      {
        path: 'payrollR',
        loadChildren: () =>
          import('./payroll-r/payroll-r.module').then((m) => m.PayrollRModule),
      },

      {
        path: 'od_applicationR',
        loadChildren: () =>
          import('./od-application-r/od-application-r.module').then(
            (m) => m.OdApplicationRModule
          ),
      },

      {
        path: 'employee_grade_structure',
        loadChildren: () =>
          import(
            './employee-grade-structure/employee-grade-structure.module'
          ).then((m) => m.EmployeeGradeStructureModule),
      },
      {
        path: 'employee_department_structure',
        loadChildren: () =>
          import(
            './employee-department-structure/employee-department-structure.module'
          ).then((m) => m.EmployeeDepartmentStructureModule),
      },
      {
        path: 'employee_exit_report',
        loadChildren: () =>
          import('./employee-exit-r/employee-exit-r.module').then(
            (m) => m.EmployeeExitRModule
          ),
      },
      {
        path: 'exitR',
        loadChildren: () =>
          import('./employee-exit-r/employee-exit-r.module').then(
            (m) => m.EmployeeExitRModule
          ),
      },
      {
        path: 'gr_fulfillment_status',
        loadChildren: () =>
          import('./gr-fulfillment-status/gr-fulfillment-status.module').then(
            (m) => m.GrFulfillmentStatusModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportsModule {}
