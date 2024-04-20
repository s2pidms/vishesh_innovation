import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CapitalGoodsFormComponent } from './screens/capital-goods-form/capital-goods-form.component';
import { CapitalGoodsListComponent } from './screens/capital-goods-list/capital-goods-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CapitalGoodsListComponent },
  {
    path: 'form',
    component: CapitalGoodsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [CapitalGoodsFormComponent, CapitalGoodsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CapitalGoodsModule {}
