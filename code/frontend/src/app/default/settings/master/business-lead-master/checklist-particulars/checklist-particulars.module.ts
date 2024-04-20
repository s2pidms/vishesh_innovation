import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistParticularsListComponent } from './screens/checklist-particulars-list/checklist-particulars-list.component';
import { ChecklistParticularsFormComponent } from './screens/checklist-particulars-form/checklist-particulars-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ChecklistParticularsListComponent },
  {
    path: 'form',
    component: ChecklistParticularsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ChecklistParticularsListComponent,
    ChecklistParticularsFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChecklistParticularsModule {}
