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
                path: "generate_purchase_order",
                loadChildren: () =>
                    import("./generate-purchase-order/generate-purchase-order.module").then(
                        m => m.GeneratePurchaseOrderModule
                    )
            },
            {
                path: "service_purchase_order",
                loadChildren: () =>
                    import("./service-purchase-order/service-purchase-order.module").then(
                        m => m.ServicePurchaseOrderModule
                    )
            },
            {
                path: "debit-note",
                loadChildren: () => import("./debit-note/debit-note.module").then(m => m.DebitNoteModule)
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "short_po_closing",
                loadChildren: () =>
                    import("./short-po-closing/short-po-closing.module").then(m => m.ShortPoClosingModule)
            },
            {
                path: "generate_supplementary_PO",
                loadChildren: () =>
                    import("./generate-supplementary-po/generate-supplementary-po.module").then(
                        m => m.GenerateSupplementaryPOModule
                    )
            },
            {
                path: "purchase_indent",
                loadChildren: () => import("./purchase-indent/purchase-indent.module").then(m => m.PurchaseIndentModule)
            },
            {
                path: "job_work_challan",
                loadChildren: () =>
                    import("./job-work-challan/job-work-challan.module").then(m => m.JobWorkChallanModule)
            },
            {
                path: "job_work_order",
                loadChildren: () => import("./job-work-order/job-work-order.module").then(m => m.JobWorkOrderModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
