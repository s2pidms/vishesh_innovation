import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import {
  AccountsGuard,
  BusinessLeadsGuard,
  DispatchGuard,
  FinanceGuard,
  HRAdminGuard,
  MaintenanceGuard,
  PlanningGuard,
  ProductionGuard,
  PurchaseGuard,
  QualityGuard,
  SalesGuard,
  SettingsGuard,
  StoresGuard,
  SupportGuard
} from '../core/guards';
import { CompanyComponent } from './settings/master/global/company/company.component';
 

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then((m) => m.SalesModule),
        canActivate: [SalesGuard],
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./purchase/purchase.module').then((m) => m.PurchaseModule),
        canActivate: [PurchaseGuard],
      },
      {
        path: 'stores',
        loadChildren: () =>
          import('./stores/stores.module').then((m) => m.StoresModule),
        canActivate: [StoresGuard],
      },
      {
        path: 'production',
        loadChildren: () =>
          import('./production/production.module').then(
            (m) => m.ProductionModule
          ),
        canActivate: [ProductionGuard],
      },
      {
        path: 'quality',
        loadChildren: () =>
          import('./quality/quality.module').then((m) => m.QualityModule),
        canActivate: [QualityGuard],
      },
      {
        path: 'HR',
        loadChildren: () => import('./hr/hr.module').then((m) => m.HRModule),
        canActivate: [HRAdminGuard],
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./accounts/accounts.module').then((m) => m.AccountsModule),
        canActivate: [AccountsGuard],
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        canActivate: [SettingsGuard],
      },
      {
        path: 'supports',
        loadChildren: () =>
          import('./supports/supports.module').then((m) => m.SupportsModule),
          canActivate: [SupportGuard],
      },
      {
        path: 'dispatch',
        loadChildren: () =>
          import('./dispatch/dispatch.module').then((m) => m.DispatchModule),
        canActivate: [DispatchGuard],
      },
      {
        path: 'business-leads',
        loadChildren: () =>
          import('./business-leads/business-leads.module').then(
            (m) => m.BusinessLeadsModule
          ),
        canActivate: [BusinessLeadsGuard],
      },
      {
        path: 'planning',
        loadChildren: () =>
          import('./planning/planning.module').then((m) => m.PlanningModule),
        canActivate: [PlanningGuard],
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
        canActivate: [MaintenanceGuard],
      },
      {
        path: 'finance',
        loadChildren: () =>
          import('./finance/finance.module').then((m) => m.FinanceModule),
        canActivate: [FinanceGuard],
      },
      { path: 'company-profile', component: CompanyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
