import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SpoListComponent } from './screens/spo-list/spo-list.component';
import { SpoFormComponent } from './screens/spo-form/spo-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SpoListComponent },
  {
    path: 'form',
    component: SpoFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [SpoListComponent, SpoFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServicePurchaseOrderModule {}
