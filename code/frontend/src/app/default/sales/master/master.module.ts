import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterComponent } from "./master.component";
const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            { path: "", redirectTo: "hsn", pathMatch: "full" },
            {
                path: "sac",
                loadChildren: () => import("./sac/sac.module").then(m => m.SACModule)
            },
            {
                path: "customer",
                loadChildren: () => import("./customer/customer.module").then(m => m.CustomerModule)
            },
            {
                path: "sku",
                loadChildren: () => import("./sku/sku.module").then(m => m.SKUModule)
            },
            {
                path: "service",
                loadChildren: () => import("./service/service.module").then(m => m.ServiceModule)
            },
            {
                path: "hsn",
                loadChildren: () => import("./hsn/hsn.module").then(m => m.HSNModule)
            },

            {
                path: "btc",
                loadChildren: () => import("./btc/btc.module").then(m => m.BTCModule)
            },
            {
                path: "transporter",
                loadChildren: () => import("./transporter/transporter.module").then(m => m.TransporterModule)
            },
            {
                path: "map_category_hsn",
                loadChildren: () =>
                    import("./map-category-hsn/map-category-hsn.module").then(m => m.MapCategoryHsnModule)
            },
            {
                path: "sales_payment_terms",
                loadChildren: () =>
                    import("./sales-payment-terms/sales-payment-terms.module").then(m => m.SalesPaymentTermsModule)
            },
            {
                path: "cost_estimate_calculator",
                loadChildren: () =>
                    import("./cost-estimate-calculator/cost-estimate-calculator.module").then(
                        m => m.CostEstimateCalculatorModule
                    )
            },
            {
                path: "sales_product_master",
                loadChildren: () =>
                    import("./sales-product-master/sales-product-master.module").then(m => m.SalesProductMasterModule)
            },
            { path: 'discount_management', loadChildren: () => import('./discount-management/discount-management.module').then(m => m.DiscountManagementModule) }

        ]
    },
];
@NgModule({
    declarations: [MasterComponent],
    imports: [RouterModule.forChild(routes)]
})
export class MasterModule { }
