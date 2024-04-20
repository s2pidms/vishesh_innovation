import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './screens/employee-list/employee-list.component';
import { EmployeeFormComponent } from './screens/employee-form/employee-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'emp-list', pathMatch: 'full' },
  { path: 'emp-list', component: EmployeeListComponent },
  {
    path: 'emp-form',
    component: EmployeeFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EmployeeModule {}
