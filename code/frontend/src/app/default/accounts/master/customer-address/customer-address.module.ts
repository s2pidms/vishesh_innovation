import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddressFormComponent } from './screens/customer-address-form/customer-address-form.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: CustomerAddressFormComponent },
];

@NgModule({
  declarations: [CustomerAddressFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CustomerAddressModule {}
