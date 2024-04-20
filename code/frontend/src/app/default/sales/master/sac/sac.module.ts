import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SACListComponent } from './screens/sac-list/sac-list.component';
import { SACFormComponent } from './screens/sac-form/sac-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SACListComponent },
  {
    path: 'form',
    component: SACFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [SACListComponent, SACFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SACModule {}
