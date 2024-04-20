import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './screens/department-list/department-list.component';
import { DepartmentFormComponent } from './screens/department-form/department-form.component';
import { AddSubDeptComponent } from './screens/add-sub-dept/add-sub-dept.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DepartmentListComponent },
  {
    path: 'form',
    component: DepartmentFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentFormComponent,
    AddSubDeptComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DepartmentMasterModule {}
