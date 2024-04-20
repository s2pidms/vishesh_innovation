import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCodeListComponent } from './screens/product-code-list/product-code-list.component';
import { ProductCodeFormComponent } from './screens/product-code-form/product-code-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'PC-list', pathMatch: 'full' },
  { path: 'PC-list', component: ProductCodeListComponent },
  { path: 'PC-form', component: ProductCodeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCodeRoutingModule {}
