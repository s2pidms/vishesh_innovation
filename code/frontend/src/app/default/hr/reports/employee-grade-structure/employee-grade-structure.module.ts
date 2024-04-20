import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeGradeStructureComponent } from './employee-grade-structure.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: EmployeeGradeStructureComponent },
];

@NgModule({
  declarations: [EmployeeGradeStructureComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EmployeeGradeStructureModule {}
