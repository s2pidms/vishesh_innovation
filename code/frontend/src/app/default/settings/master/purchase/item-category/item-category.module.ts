import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryListComponent } from './screens/item-category-list/item-category-list.component';
import { ItemCategoryFormComponent } from './screens/item-category-form/item-category-form.component';
import { SubCategoryComponent } from './screens/sub-category/sub-category.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ItemCategoryListComponent },
  {
    path: 'form',
    component: ItemCategoryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    ItemCategoryListComponent,
    ItemCategoryFormComponent,
    SubCategoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ItemCategoryModule {}
