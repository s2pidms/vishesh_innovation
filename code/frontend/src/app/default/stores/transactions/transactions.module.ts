import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./transactions.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent,
        children: [
            {
                path: "GRN",
                loadChildren: () => import("./grn/grn.module").then(m => m.GRNModule)
            },
            {
                path: "GIN",
                loadChildren: () => import("./gin/gin.module").then(m => m.GINModule)
            },
            {
                path: "inventory_correction",
                loadChildren: () =>
                    import("./inventory-correction/inventory-correction.module").then(m => m.InventoryCorrectionModule)
            },
            {
                path: "gia_gr",
                loadChildren: () => import("./gia-gr/gia-gr.module").then(m => m.GIAGRModule)
            },
            {
                path: "gie_direct",
                loadChildren: () => import("./gie-direct/gie-direct.module").then(m => m.GieDirectModule)
            },
            {
                path: "gt_response",
                loadChildren: () => import("./gt-response/gt-response.module").then(m => m.GTResponseModule)
            },
            {
                path: "goods_transfer_request",
                loadChildren: () =>
                    import("./../../production/transactions/gt-request/gt-request.module").then(m => m.GTRequestModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TransactionsModule {}
