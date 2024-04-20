import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QualityMasterComponent } from './quality-master.component';

const routes: Routes = [
  { path: 'tab_list', component: QualityMasterComponent },
  {
    path: 'customer_pdir_mapping',
    loadChildren: () =>
      import('./customer-pdir-mapping/customer-pdir-mapping.module').then(
        (m) => m.CustomerPdirMappingModule
      ),
  },
];

@NgModule({
  declarations: [QualityMasterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QualityMasterModule {}
