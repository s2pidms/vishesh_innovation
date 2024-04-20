import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDepartmentStructureComponent } from './employee-department-structure.component';

const routes: Routes = [{ path: '', component: EmployeeDepartmentStructureComponent }];

@NgModule({
  declarations: [
    EmployeeDepartmentStructureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeDepartmentStructureModule { }
