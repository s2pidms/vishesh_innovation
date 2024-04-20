import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UomMasterFormComponent } from './screens/uom-master-form/uom-master-form.component';
import { UomMasterListComponent } from './screens/uom-master-list/uom-master-list.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UomMasterListComponent },
  {
    path: 'form',
    component: UomMasterFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [UomMasterFormComponent, UomMasterListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UomMasterModule {}
