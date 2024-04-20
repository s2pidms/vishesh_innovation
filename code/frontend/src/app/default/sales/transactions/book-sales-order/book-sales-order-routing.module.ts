import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BSOListComponent } from './screens/bso-list/bso-list.component';
import { BSOFormComponent } from './screens/bso-form/bso-form.component';
import { CSOListComponent } from './screens/cso-list/cso-list.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BSOListComponent },
  {
    path: 'cso-list',
    component: CSOListComponent,
  },
  {
    path: 'form',
    component: BSOFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookSalesOrderRoutingModule {}
