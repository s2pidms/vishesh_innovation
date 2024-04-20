import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkuCategoryListComponent } from './screens/sku-category-list/sku-category-list.component';
import { SkuCategoryFormComponent } from './screens/sku-category-form/sku-category-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SkuCategoryListComponent },
  {
    path: 'form',
    component: SkuCategoryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [SkuCategoryListComponent, SkuCategoryFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SkuCategoryModule {}
