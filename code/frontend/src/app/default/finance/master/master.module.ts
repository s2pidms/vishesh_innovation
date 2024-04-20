import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {MasterComponent} from "./master.component";
const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {
                path: "cost_sheet",
                loadChildren: () => import("./cost-sheet/cost-sheet.module").then(m => m.CostSheetModule)
            },
            {
                path: "ps_by_product_category",
                loadChildren: () =>
                    import("./ps-by-product-category/ps-by-product-category.module").then(
                        m => m.PSByProductCategoryModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
