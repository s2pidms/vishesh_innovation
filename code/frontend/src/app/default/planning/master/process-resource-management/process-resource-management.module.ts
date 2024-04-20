import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProcessResourceManagementListComponent } from './screens/process-resource-management-list/process-resource-management-list.component';
import { ProcessResourceManagementFormComponent } from './screens/process-resource-management-form/process-resource-management-form.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProcessResourceManagementListComponent },
  {
    path: 'form',
    component: ProcessResourceManagementFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ProcessResourceManagementListComponent,
    ProcessResourceManagementFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProcessResourceManagementModule {}
