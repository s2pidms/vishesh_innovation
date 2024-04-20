import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceTaskListComponent } from './screens/maintenance-task-list/maintenance-task-list.component';
import { MaintenanceTaskFormComponent } from './screens/maintenance-task-form/maintenance-task-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceTaskListComponent },
  {
    path: 'form',
    component: MaintenanceTaskFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [MaintenanceTaskListComponent, MaintenanceTaskFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MaintenanceTaskModule {}
