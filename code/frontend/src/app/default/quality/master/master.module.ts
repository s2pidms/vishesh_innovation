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
                path: "specification_master",
                loadChildren: () =>
                    import("./specification-master/specification-master.module").then(m => m.SpecificationMasterModule)
            },
            {
                path: "sku",
                loadChildren: () => import("./../../sales/master/sku/sku.module").then(m => m.SKUModule)
            },
            {
                path: "items",
                loadChildren: () => import("./../../purchase/master/items/items.module").then(m => m.ItemsModule)
            },
            {
                path: "rm_specifications",
                loadChildren: () =>
                    import("./rm-specifications/rm-specifications.module").then(m => m.RmSpecificationsModule)
            },
            {
                path: "product_specifications",
                loadChildren: () =>
                    import("./product-specifications/product-specifications.module").then(
                        m => m.ProductSpecificationsModule
                    )
            },
            {
                path: "supplier-evaluation",
                loadChildren: () =>
                    import("./../../purchase/master/supplier-evaluation/supplier-evaluation.module").then(
                        m => m.SupplierEvaluationModule
                    )
            },
            {
                path: "product_category_specifications",
                loadChildren: () =>
                    import("./product-category-specifications/product-category-specifications.module").then(
                        m => m.ProductCategorySpecificationsModule
                    )
            },
            {
                path: "item_category_specifications",
                loadChildren: () =>
                    import("./item-category-specifications/item-category-specifications.module").then(
                        m => m.ItemCategorySpecificationsModule
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
