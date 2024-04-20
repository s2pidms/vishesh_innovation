import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildItemCategoryFormComponent } from './screens/child-item-category-form/child-item-category-form.component';
import { ChildItemCategoryListComponent } from './screens/child-item-category-list/child-item-category-list.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ChildItemCategoryListComponent },
  {
    path: 'form',
    component: ChildItemCategoryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ChildItemCategoryFormComponent,
    ChildItemCategoryListComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ChildItemCategoryModule {}
