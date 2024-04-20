import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BomOfDSkuListComponent } from './bom-of-d-sku-list/bom-of-d-sku-list.component';
import { BomOfDSkuFormComponent } from './bom-of-d-sku-form/bom-of-d-sku-form.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BomOfDSkuListComponent },
  {
    path: 'form',
    component: BomOfDSkuFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [BomOfDSkuListComponent, BomOfDSkuFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BomOfDSkuModule {}
