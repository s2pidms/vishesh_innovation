import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalibrationAndVerificationListComponent } from './screens/calibration-and-verification-list/calibration-and-verification-list.component';
import { CalibrationAndVerificationFormComponent } from './screens/calibration-and-verification-form/calibration-and-verification-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CalibrationAndVerificationListComponent },
  {
    path: 'form',
    component: CalibrationAndVerificationFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    CalibrationAndVerificationListComponent,
    CalibrationAndVerificationFormComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class CalibrationAndVerificationModule {}
