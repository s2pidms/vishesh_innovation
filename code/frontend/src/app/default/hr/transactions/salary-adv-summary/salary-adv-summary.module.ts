import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';

import { SalaryAdvSummaryRoutingModule } from './salary-adv-summary-routing.module';
import { SalaryAdvSummaryListComponent } from './screens/salary-adv-summary-list/salary-adv-summary-list.component';
import { SalaryAdvSummaryFormComponent } from './screens/salary-adv-summary-form/salary-adv-summary-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'SalaryAdvSummaryList', pathMatch: 'full' },
  { path: 'SalaryAdvSummaryList', component: SalaryAdvSummaryListComponent },
  {
    path: 'SalaryAdvSummaryForm',
    component: SalaryAdvSummaryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [SalaryAdvSummaryListComponent, SalaryAdvSummaryFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SalaryAdvSummaryRoutingModule,
    SharedModule,
  ],
})
export class SalaryAdvSummaryModule {}
