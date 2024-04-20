import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryAdvSummaryListComponent } from './screens/salary-adv-summary-list/salary-adv-summary-list.component';
import { SalaryAdvSummaryFormComponent } from './screens/salary-adv-summary-form/salary-adv-summary-form.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'sas-list', pathMatch: 'full' },
  { path: 'sas-list', component: SalaryAdvSummaryListComponent },
  {
    path: 'sas-form',
    component: SalaryAdvSummaryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryAdvSummaryRoutingModule {}
