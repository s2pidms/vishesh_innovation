import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './screens/employee-list/employee-list.component';
import { EmployeeFormComponent } from './screens/employee-form/employee-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { EmployeeAdditionalInfoComponent } from './screens/employee-additional-info/employee-additional-info.component';
import { FamilyInfoComponent } from './screens/family-info/family-info.component';
import { AddressInfoComponent } from './screens/address-info/address-info.component';
import { JoiningDetailsComponent } from './screens/joining-details/joining-details.component';
import { CredentialsInfoComponent } from './screens/credentials-info/credentials-info.component';
import { BankDetailsComponent } from './screens/bank-details/bank-details.component';
import { StatusComponent } from './screens/status/status.component';
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
  declarations: [EmployeeListComponent, EmployeeFormComponent, EmployeeAdditionalInfoComponent, FamilyInfoComponent, AddressInfoComponent, JoiningDetailsComponent, CredentialsInfoComponent, BankDetailsComponent, StatusComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EmployeeModule {}
