import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'statutory_contribution',
        loadChildren: () =>
          import('./statutory-contribution/statutory-contribution.module').then(
            (m) => m.StatutoryContributionModule
          ),
      },
      {
        path: 'salary_components',
        loadChildren: () =>
          import('./salary-components/salary-components.module').then(
            (m) => m.SalaryComponentsModule
          ),
      },
      {
        path: 'salary_master_MS',
        loadChildren: () =>
          import('./salary-master-ms/salary-master-ms.module').then(
            (m) => m.SalaryMasterMSModule
          ),
      },
      {
        path: 'paid_holidays',
        loadChildren: () =>
          import('./paid-holidays/paid-holidays.module').then(
            (m) => m.PaidHolidaysModule
          ),
      },
      {
        path: 'paid_leaves',
        loadChildren: () =>
          import('./paid-leaves/paid-leaves.module').then(
            (m) => m.PaidLeavesModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [MasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MasterModule {}
