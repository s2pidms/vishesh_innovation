import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BomOfSkuListComponent } from './bom-of-sku-list/bom-of-sku-list.component';
import { BomOfSkuFormComponent } from './bom-of-sku-form/bom-of-sku-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BomOfSkuListComponent },
  {
    path: 'form',
    component: BomOfSkuFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [BomOfSkuListComponent, BomOfSkuFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BomOfSkuModule {}
