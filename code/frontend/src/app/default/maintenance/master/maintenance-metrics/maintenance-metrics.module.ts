import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceMetricsListComponent } from './screens/maintenance-metrics-list/maintenance-metrics-list.component';
import { MaintenanceMetricsFormComponent } from './screens/maintenance-metrics-form/maintenance-metrics-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceMetricsListComponent },
  {
    path: 'form',
    component: MaintenanceMetricsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    MaintenanceMetricsListComponent,
    MaintenanceMetricsFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MaintenanceMetricsModule {}
