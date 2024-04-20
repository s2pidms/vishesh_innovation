import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderGenerationListComponent } from './screens/work-order-generation-list/work-order-generation-list.component';
import { WorkOrderGenerationFormComponent } from './screens/work-order-generation-form/work-order-generation-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { ViewChecklistInstructionComponent } from './screens/view-checklist-instruction/view-checklist-instruction.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: WorkOrderGenerationListComponent },
  {
    path: 'form',
    component: WorkOrderGenerationFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    WorkOrderGenerationListComponent,
    WorkOrderGenerationFormComponent,
    ViewChecklistInstructionComponent
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class WorkOrderGenerationModule {}
