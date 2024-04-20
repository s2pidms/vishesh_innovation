import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceScheduleListComponent } from './screens/maintenance-schedule-list/maintenance-schedule-list.component';
import { MaintenanceScheduleFormComponent } from './screens/maintenance-schedule-form/maintenance-schedule-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceScheduleListComponent },
  {
    path: 'form',
    component: MaintenanceScheduleFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    MaintenanceScheduleListComponent,
    MaintenanceScheduleFormComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class MaintenanceScheduleModule {}
