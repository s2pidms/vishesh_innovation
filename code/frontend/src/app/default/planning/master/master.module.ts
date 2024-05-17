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
                path: "bill-of-material",
                loadChildren: () =>
                    import("./bill-of-material/bill-of-material.module").then(m => m.BillOfMaterialModule)
            },
            {
                path: "child_item",
                loadChildren: () => import("./child-item/child-item.module").then(m => m.ChildItemModule)
            },
            {
                path: "grand_child_item",
                loadChildren: () =>
                    import("./grand-child-item/grand-child-item.module").then(m => m.GrandChildItemModule)
            },
            {
                path: "product_master",
                loadChildren: () => import("./product-master/product-master.module").then(m => m.ProductMasterModule)
            },
            {
                path: "process_resource_management",
                loadChildren: () =>
                    import("./process-resource-management/process-resource-management.module").then(
                        m => m.ProcessResourceManagementModule
                    )
            },
            {
                path: "process_master",
                loadChildren: () => import("./process-master/process-master.module").then(m => m.ProcessMasterModule)
            },
            {
                path: "direct_cost",
                loadChildren: () => import("./direct-cost/direct-cost.module").then(m => m.DirectCostModule)
            },
            {
                path: "sku_cost_sheet",
                loadChildren: () => import("./sku-cost-sheet/sku-cost-sheet.module").then(m => m.SkuCostSheetModule)
            },
            {
                path: "ink_master",
                loadChildren: () =>
                    import("./../../production/master/ink-master/ink-master.module").then(m => m.InkMasterModule)
            },
            {
                path: "sku_process_flow",
                loadChildren: () =>
                    import("./../../business-leads/master/sku-process-flow/sku-process-flow.module").then(
                        m => m.SkuProcessFlowModule
                    )
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
                path: "map_category_hsn",
                loadChildren: () =>
                    import("./../../sales/master/map-category-hsn/map-category-hsn.module").then(
                        m => m.MapCategoryHsnModule
                    )
            },
            {
                path: "mould_master",
                loadChildren: () =>
                    import("./../../settings/master/production/mould-master/mould-master.module").then(
                        m => m.MouldMasterModule
                    )
            },
            {
                path: "sales_product_master",
                loadChildren: () =>
                    import("./../../sales/master/sales-product-master/sales-product-master.module").then(
                        m => m.SalesProductMasterModule
                    )
            },
            {
                path: "hsn_master",
                loadChildren: () => import("./hsn-master/hsn-master.module").then(m => m.HSNMasterModule)
            },
            {
                path: "sac_master",
                loadChildren: () => import("./sac-master/sac-master.module").then(m => m.SACMasterModule)
            },
            {
                path: "transporter",
                loadChildren: () =>
                    import("./../../sales/master/transporter/transporter.module").then(m => m.TransporterModule)
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
