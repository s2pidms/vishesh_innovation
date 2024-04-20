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
                path: "grl",
                loadChildren: () => import("./grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "fgie",
                loadChildren: () => import("./fgie/fgie.module").then(m => m.FGIEModule)
            },
            {
                path: "fg_correction",
                loadChildren: () => import("./fg-correction/fg-correction.module").then(m => m.FgCorrectionModule)
            },
            {
                path: "multiple_fgin",
                loadChildren: () => import("./multiple-fgin/multiple-fgin.module").then(m => m.MultipleFGINModule)
            },
            {
                path: "gr_acknowledgement",
                loadChildren: () =>
                    import("./gr-acknowledgement/gr-acknowledgement.module").then(m => m.GrAcknowledgementModule)
            },
            {
                path: "child_part_production",
                loadChildren: () =>
                    import("./child-part-production/child-part-production.module").then(
                        m => m.ChildPartProductionModule
                    )
            },
            {
                path: "stock_transfer",
                loadChildren: () => import("./stock-transfer/stock-transfer.module").then(m => m.StockTransferModule)
            },
            {
                path: "job_card_output",
                loadChildren: () => import("./job-card-output/job-card-output.module").then(m => m.JobCardOutputModule)
            },
            {
                path: "ink_mixing",
                loadChildren: () => import("./ink-mixing/ink-mixing.module").then(m => m.InkMixingModule)
            },
            {
                path: "job_card_entry",
                loadChildren: () => import("./job-card-entry/job-card-entry.module").then(m => m.JobCardEntryModule)
            },
            {
                path: "jc_entry",
                loadChildren: () => import("./jc-entry/jc-entry.module").then(m => m.JcEntryModule)
            },
            {
                path: "goods_transfer_request",
                loadChildren: () => import("./gt-request/gt-request.module").then(m => m.GTRequestModule)
            },
            {
                path: "gt_response",
                loadChildren: () =>
                    import("./../../stores/transactions/gt-response/gt-response.module").then(m => m.GTResponseModule)
            },
            {
                path: "jc_production_entry",
                loadChildren: () =>
                    import("./jc-production-entry/jc-production-entry.module").then(m => m.JcProductionEntryModule)
            }
        ]
    }
];
@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
