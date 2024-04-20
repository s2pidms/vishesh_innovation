import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceWarrantyListComponent } from './screens/maintenance-warranty-list/maintenance-warranty-list.component';
import { MaintenanceWarrantyFormComponent } from './screens/maintenance-warranty-form/maintenance-warranty-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceWarrantyListComponent },
  {
    path: 'form',
    component: MaintenanceWarrantyFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    MaintenanceWarrantyListComponent,
    MaintenanceWarrantyFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MaintenanceWarrantyModule {}
