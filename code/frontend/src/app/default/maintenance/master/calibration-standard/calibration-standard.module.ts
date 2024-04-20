import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalibrationStandardListComponent } from './screens/calibration-standard-list/calibration-standard-list.component';
import { CalibrationStandardFormComponent } from './screens/calibration-standard-form/calibration-standard-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CalibrationStandardListComponent },
  {
    path: 'form',
    component: CalibrationStandardFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    CalibrationStandardListComponent,
    CalibrationStandardFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CalibrationStandardModule {}
