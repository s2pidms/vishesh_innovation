import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./master.component";

const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {path: "", redirectTo: "hsn", pathMatch: "full"},
            {
                path: "suppliers",
                loadChildren: () => import("./suppliers/suppliers.module").then(m => m.SuppliersModule)
            },
            {
                path: "items",
                loadChildren: () => import("./items/items.module").then(m => m.ItemsModule)
            },
            {
                path: "services",
                loadChildren: () => import("./services/services.module").then(m => m.ServicesModule)
            },
            {
                path: "hsn",
                loadChildren: () => import("./hsn/hsn.module").then(m => m.HSNModule)
            },
            {
                path: "sac",
                loadChildren: () => import("./sac/sac.module").then(m => m.SACModule)
            },
            {
                path: "capital-goods",
                loadChildren: () => import("./capital-goods/capital-goods.module").then(m => m.CapitalGoodsModule)
            },
            {
                path: "transporter",
                loadChildren: () =>
                    import("./../../sales/master/transporter/transporter.module").then(m => m.TransporterModule)
            },
            {
                path: "supplier-evaluation",
                loadChildren: () =>
                    import("./supplier-evaluation/supplier-evaluation.module").then(m => m.SupplierEvaluationModule)
            },
            {
                path: "sales_payment_terms",
                loadChildren: () =>
                    import("./../../sales/master/sales-payment-terms/sales-payment-terms.module").then(
                        m => m.SalesPaymentTermsModule
                    )
            },
            {
                path: "service_provider",
                loadChildren: () =>
                    import("./service-provider/service-provider.module").then(m => m.ServiceProviderModule)
            }
        ]
    }
];
@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
