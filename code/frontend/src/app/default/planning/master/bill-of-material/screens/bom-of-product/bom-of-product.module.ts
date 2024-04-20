import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BomOfProductListComponent } from './bom-of-product-list/bom-of-product-list.component';
import { BomOfProductFormComponent } from './bom-of-product-form/bom-of-product-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BomOfProductListComponent },
  {
    path: 'form',
    component: BomOfProductFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [BomOfProductListComponent, BomOfProductFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BomOfProductModule {}
