import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProspectListComponent } from './screens/prospect-list/prospect-list.component';
import { ProspectFormComponent } from './screens/prospect-form/prospect-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { ConvertToCustomerComponent } from './screens/convert-to-customer/convert-to-customer.component';
import { ProspectContactDetailsComponent } from './screens/prospect-contact-details/prospect-contact-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'convert_to_customer', component: ConvertToCustomerComponent },
  { path: 'list', component: ProspectListComponent },
  {
    path: 'form',
    component: ProspectFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ProspectListComponent,
    ProspectFormComponent,
    ConvertToCustomerComponent,
    ProspectContactDetailsComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProspectModule {}
