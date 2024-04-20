import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceChecklistListComponent } from './screens/maintenance-checklist-list/maintenance-checklist-list.component';
import { MaintenanceChecklistFormComponent } from './screens/maintenance-checklist-form/maintenance-checklist-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { AddChecklistInstructionComponent } from './screens/add-checklist-instruction/add-checklist-instruction.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MaintenanceChecklistListComponent },
  {
    path: 'form',
    component: MaintenanceChecklistFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    MaintenanceChecklistListComponent,
    MaintenanceChecklistFormComponent,
    AddChecklistInstructionComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MaintenanceChecklistModule {}
