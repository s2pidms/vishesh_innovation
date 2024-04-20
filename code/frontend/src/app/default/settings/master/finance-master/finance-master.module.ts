import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {FinanceMasterComponent} from "./finance-master.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: FinanceMasterComponent},
    {
        path: "asset_class",
        loadChildren: () => import("./asset-class/asset-class.module").then(m => m.AssetClassModule)
    },
    {path: "cost_head", loadChildren: () => import("./cost-head/cost-head.module").then(m => m.CostHeadModule)}
];

@NgModule({
    declarations: [FinanceMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FinanceMasterModule {}
