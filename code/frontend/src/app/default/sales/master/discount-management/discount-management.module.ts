import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DiscountManagementFormComponent } from './screens/discount-management-form/discount-management-form.component';
import { DiscountManagementListComponent } from './screens/discount-management-list/discount-management-list.component';
import { ApplyDiscountComponent } from './screens/apply-discount/apply-discount.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DiscountManagementListComponent,
  },
  {
    path: 'form',
    component: DiscountManagementFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    DiscountManagementFormComponent,
    DiscountManagementListComponent,
    ApplyDiscountComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DiscountManagementModule { }
