import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PdirMappingListComponent } from './screens/pdir-mapping-list/pdir-mapping-list.component';
import { PdirMappingFormComponent } from './screens/pdir-mapping-form/pdir-mapping-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PdirMappingListComponent },
  {
    path: 'form',
    component: PdirMappingFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [PdirMappingListComponent, PdirMappingFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CustomerPdirMappingModule {}
