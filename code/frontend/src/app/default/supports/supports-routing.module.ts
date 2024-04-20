import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportsComponent } from './supports.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  {
    path: '',
    component: SupportsComponent,
    children: [
      { path: '', redirectTo: 'tabs', pathMatch: 'full' },

      {
        path: 'tabs',
        loadChildren: () =>
          import('./tabs/tabs.module').then((m) => m.TabsModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'master',
        loadChildren: () =>
          import('./master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'access_denied',
        component: AccessDeniedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportsRoutingModule {}
