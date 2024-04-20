import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NpdListComponent } from './screens/npd-list/npd-list.component';
import { NpdFormComponent } from './screens/npd-form/npd-form.component';
import { NpdCustomerComponent } from './screens/npd-customer/npd-customer.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: NpdListComponent },
  {
    path: 'form',
    component: NpdFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
  { path: 'npd-customer', component: NpdCustomerComponent },
];

@NgModule({
  declarations: [NpdListComponent, NpdFormComponent, NpdCustomerComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class NpdMasterModule {}
