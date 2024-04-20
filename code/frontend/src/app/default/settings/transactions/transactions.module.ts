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
                path: "auto_increment",
                loadChildren: () => import("./auto-increment/auto-increment.module").then(m => m.AutoIncrementModule)
            },
            {
                path: "app_parameters",
                loadChildren: () => import("./app-parameters/app-parameters.module").then(m => m.AppParametersModule)
            },
            {
                path: "product_code",
                loadChildren: () => import("./product-code/product-code.module").then(m => m.ProductCodeModule)
            },
            {
                path: "audit",
                loadChildren: () => import("./audit/audit.module").then(m => m.AuditModule)
            },
            {
                path: "api_stack",
                loadChildren: () => import("./api-stack/api-stack.module").then(m => m.ApiStackModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
