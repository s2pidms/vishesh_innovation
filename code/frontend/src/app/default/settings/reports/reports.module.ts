import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: '', redirectTo: 'logedIn', pathMatch: 'full' },
      {
        path: 'logedIn',
        loadChildren: () =>
          import('./user-logedIn/logedIn.module').then((m) => m.UserReportModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportsModule {}
