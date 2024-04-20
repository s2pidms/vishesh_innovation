import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./transactions.component";
const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent,
        children: [
            {
                path: "bill-of-material",
                loadChildren: () =>
                    import("../../planning/master/bill-of-material/bill-of-material.module").then(
                        m => m.BillOfMaterialModule
                    )
            },
            {
                path: "direct_cost",
                loadChildren: () =>
                    import("../../planning/master/direct-cost/direct-cost.module").then(m => m.DirectCostModule)
            },
            {
                path: "sku_cost_sheet",
                loadChildren: () =>
                    import("../../planning/master/sku-cost-sheet/sku-cost-sheet.module").then(m => m.SkuCostSheetModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
