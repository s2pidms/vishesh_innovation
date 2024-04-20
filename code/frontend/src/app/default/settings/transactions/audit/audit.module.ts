import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuditFormComponent } from './screens/audit-form/audit-form.component';
import { AuditListComponent } from './screens/audit-list/audit-list.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'audit-list', pathMatch: 'full' },
  { path: 'audit-list', component: AuditListComponent },
  {
    path: 'audit-form',
    component: AuditFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [AuditFormComponent, AuditListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AuditModule {}
