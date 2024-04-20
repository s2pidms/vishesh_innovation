import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QualityEquipmentListComponent } from './screens/quality-equipment-list/quality-equipment-list.component';
import { QualityEquipmentFormComponent } from './screens/quality-equipment-form/quality-equipment-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: QualityEquipmentListComponent },
  {
    path: 'form',
    component: QualityEquipmentFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [QualityEquipmentListComponent, QualityEquipmentFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class QualityEquipmentModule {}
