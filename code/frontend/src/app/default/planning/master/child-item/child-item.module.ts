import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildItemListComponent } from './screens/child-item-list/child-item-list.component';
import { ChildItemFormComponent } from './screens/child-item-form/child-item-form.component';
import { SharedModule } from '@shared/shared.module';
import { ServiceProviderDetailsComponent } from './screens/service-provider-details/service-provider-details.component';
import { StockLevelsComponent } from './screens/stock-levels/stock-levels.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { ChildItemSupplierModalComponent } from './screens/child-item-supplier-modal/child-item-supplier-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ChildItemListComponent },
  {
    path: 'form',
    component: ChildItemFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ChildItemListComponent,
    ChildItemFormComponent,
    ServiceProviderDetailsComponent,
    StockLevelsComponent,
    ChildItemSupplierModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChildItemModule {}
