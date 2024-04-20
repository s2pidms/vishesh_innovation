import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {CostSheetComponent} from "./cost-sheet.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: CostSheetComponent},
    {
        path: "asset_master",
        loadChildren: () => import("./../asset-master/asset-master.module").then(m => m.AssetMasterModule)
    },
    {
        path: "labour_rate",
        loadChildren: () => import("./../labour-rate/labour-rate.module").then(m => m.LabourRateModule)
    },
    {
        path: "operating_expenses",
        loadChildren: () =>
            import("./../operating-expenses/operating-expenses.module").then(m => m.OperatingExpensesModule)
    },
    {
        path: "product_master",
        loadChildren: () =>
            import("../../../planning/master/product-master/product-master.module").then(m => m.ProductMasterModule)
    },
    {
        path: "sku",
        loadChildren: () => import("../../../sales/master/sku/sku.module").then(m => m.SKUModule)
    },
    {
        path: "process_master",
        loadChildren: () =>
            import("../../../planning/master/process-master/process-master.module").then(m => m.ProcessMasterModule)
    }
];

@NgModule({
    declarations: [CostSheetComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CostSheetModule {}
