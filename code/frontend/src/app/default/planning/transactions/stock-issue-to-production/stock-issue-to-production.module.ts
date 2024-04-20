import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IssueToProductionFormComponent } from './screens/issue-to-production-form/issue-to-production-form.component';
import { IssueToProductionListComponent } from './screens/issue-to-production-list/issue-to-production-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: IssueToProductionListComponent,
  },
  {
    path: 'form',
    component: IssueToProductionFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    IssueToProductionFormComponent,
    IssueToProductionListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class StockIssueToProductionModule {}
