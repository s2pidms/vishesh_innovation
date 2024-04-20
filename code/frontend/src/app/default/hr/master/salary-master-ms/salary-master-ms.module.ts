import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalaryMasterMSListComponent } from './screens/salary-master-ms-list/salary-master-ms-list.component';
import { SalaryMasterMSFormComponent } from './screens/salary-master-ms-form/salary-master-ms-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'SMMS-list', pathMatch: 'full' },
  { path: 'SMMS-list', component: SalaryMasterMSListComponent },
  {
    path: 'SMMS-form',
    component: SalaryMasterMSFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [SalaryMasterMSListComponent, SalaryMasterMSFormComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class SalaryMasterMSModule {}
