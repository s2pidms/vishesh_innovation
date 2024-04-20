import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceTechnicianListComponent } from './screens/maintenance-technician-list/maintenance-technician-list.component';
import { MaintenanceTechnicianFormComponent } from './screens/maintenance-technician-form/maintenance-technician-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceTechnicianListComponent },
  {
    path: 'form',
    component: MaintenanceTechnicianFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    MaintenanceTechnicianListComponent,
    MaintenanceTechnicianFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MaintenanceTechnicianModule {}
