import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskSchedulingListComponent } from './screens/task-scheduling-list/task-scheduling-list.component';
import { TaskSchedulingFormComponent } from './screens/task-scheduling-form/task-scheduling-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TaskSchedulingListComponent },
  {
    path: 'form',
    component: TaskSchedulingFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [TaskSchedulingListComponent, TaskSchedulingFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TaskSchedulingModule {}
