import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersListComponent } from './screens/suppliers-list/suppliers-list.component';
import { SuppliersFormComponent } from './screens/suppliers-form/suppliers-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';
import { AddSuppliersContactsDetailsComponent } from './screens/add-suppliers-contacts-details/add-suppliers-contacts-details.component';
import { AddPurchaseDetailsComponent } from './screens/add-purchase-details/add-purchase-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SuppliersListComponent },
  {
    path: 'form',
    component: SuppliersFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    SuppliersListComponent,
    SuppliersFormComponent,
    AddSuppliersContactsDetailsComponent,
    AddPurchaseDetailsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SuppliersModule {}
