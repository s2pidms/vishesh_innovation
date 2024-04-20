import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCategoryListComponent } from './screens/purchase-category-list/purchase-category-list.component';
import { PurchaseCategoryFormComponent } from './screens/purchase-category-form/purchase-category-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PurchaseCategoryListComponent },
  {
    path: 'form',
    component: PurchaseCategoryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [PurchaseCategoryListComponent, PurchaseCategoryFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PurchaseCategoryModule {}
