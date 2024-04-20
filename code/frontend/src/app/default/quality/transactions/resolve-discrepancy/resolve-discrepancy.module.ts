import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DiscrepancyListComponent } from './screens/discrepancy-list/discrepancy-list.component';
import { DiscrepancyFormComponent } from './screens/discrepancy-form/discrepancy-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DiscrepancyListComponent },
  {
    path: 'form',
    component: DiscrepancyFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [DiscrepancyListComponent, DiscrepancyFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ResolveDiscrepancyModule {}
