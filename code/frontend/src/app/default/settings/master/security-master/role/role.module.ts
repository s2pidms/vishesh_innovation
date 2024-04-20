import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RoleListComponent } from './screens/role-list/role-list.component';
import { RoleFormComponent } from './screens/role-form/role-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'role-list', pathMatch: 'full' },
  { path: 'role-list', component: RoleListComponent },
  {
    path: 'role-form',
    component: RoleFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [RoleFormComponent, RoleListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RoleModule {}
