import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QmsMappingListComponent } from './screens/qms-mapping-list/qms-mapping-list.component';
import { QmsMappingFormComponent } from './screens/qms-mapping-form/qms-mapping-form.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: QmsMappingListComponent },
  {
    path: 'form',
    component: QmsMappingFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [QmsMappingListComponent, QmsMappingFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class QmsMappingModule {}
