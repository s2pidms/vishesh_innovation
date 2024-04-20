import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterTabsComponent } from './screens/master-tabs/master-tabs.component';
import { TransactionsTabsComponent } from './screens/transactions-tabs/transactions-tabs.component';
import { ReportsTabsComponent } from './screens/reports-tabs/reports-tabs.component';


const routes: Routes = [
  { path: '', redirectTo: 'master-tabs', pathMatch: 'full' },
  { path: 'master-tabs', component: MasterTabsComponent },
  { path: 'txn-tabs', component: TransactionsTabsComponent },
  { path: 'reports-tabs', component: ReportsTabsComponent },
];
@NgModule({
  declarations: [
    MasterTabsComponent,
    TransactionsTabsComponent,
    ReportsTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TabsModule { }
