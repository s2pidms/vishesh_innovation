import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MasterTabsComponent} from "./master-tabs.component";
import {TransactionsTabsComponent} from "./transactions-tabs.component";
import {ReportsTabsComponent} from "./reports-tabs.component";
import {SharedModule} from "@shared/shared.module";
const routes: Routes = [
    {path: "", redirectTo: "master-tabs", pathMatch: "full"},
    {path: "master-tabs", component: MasterTabsComponent},
    {path: "txn-tabs", component: TransactionsTabsComponent},
    {path: "reports-tabs", component: ReportsTabsComponent}
];

@NgModule({
    declarations: [MasterTabsComponent, TransactionsTabsComponent, ReportsTabsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TabsModule {}
