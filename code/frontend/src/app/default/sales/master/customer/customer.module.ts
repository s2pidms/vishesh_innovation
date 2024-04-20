import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './screens/customer-list/customer-list.component';
import { CustomerFormComponent } from './screens/customer-form/customer-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CustomerListComponent },
  {
    path: 'form',
    component: CustomerFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent],

  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CustomerModule {}
