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
                path: "prospect",
                loadChildren: () => import("./prospect/prospect.module").then(m => m.ProspectModule)
            },
            {
                path: "bill-of-material",
                loadChildren: () =>
                    import("./bill-of-material/bill-of-material.module").then(m => m.BillOfMaterialModule)
            },
            {
                path: "suppliers",
                loadChildren: () =>
                    import("./../../purchase/master/suppliers/suppliers.module").then(m => m.SuppliersModule)
            },
            {
                path: "items",
                loadChildren: () => import("./../../purchase/master/items/items.module").then(m => m.ItemsModule)
            },
            {
                path: "customer",
                loadChildren: () => import("./../../sales/master/customer/customer.module").then(m => m.CustomerModule)
            },
            {
                path: "sku",
                loadChildren: () => import("./../../sales/master/sku/sku.module").then(m => m.SKUModule)
            },
            {
                path: "process_master",
                loadChildren: () =>
                    import("./../../planning/master/process-master/process-master.module").then(
                        m => m.ProcessMasterModule
                    )
            },
            {
                path: "sku_process_flow",
                loadChildren: () =>
                    import("./sku-process-flow/sku-process-flow.module").then(m => m.SkuProcessFlowModule)
            },
            {
                path: "map_category_hsn",
                loadChildren: () =>
                    import("./../../sales/master/map-category-hsn/map-category-hsn.module").then(
                        m => m.MapCategoryHsnModule
                    )
            },
            {
                path: "sku_attributes",
                loadChildren: () => import("./sku-attributes/sku-attributes.module").then(m => m.SKUAttributesModule)
            }
        ]
    }
];

@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
