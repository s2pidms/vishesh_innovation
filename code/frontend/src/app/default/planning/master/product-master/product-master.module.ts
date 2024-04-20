import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductMasterListComponent } from './screens/product-master-list/product-master-list.component';
import { ProductMasterFormComponent } from './screens/product-master-form/product-master-form.component';
import {
  ProductAttributesModalComponent,
  ProductBomDimModalComponent,
  ProductRemarksModalComponent,
  ProductStorageModalComponent,
} from './screens/components';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductMasterListComponent },
  {
    path: 'form',
    component: ProductMasterFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ProductMasterListComponent,
    ProductMasterFormComponent,
    ProductAttributesModalComponent,
    ProductBomDimModalComponent,
    ProductStorageModalComponent,
    ProductRemarksModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProductMasterModule {}
