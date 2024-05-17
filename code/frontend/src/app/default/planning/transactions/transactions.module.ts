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
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "stock_issue_to_production",
                loadChildren: () =>
                    import("./stock-issue-to-production/stock-issue-to-production.module").then(
                        m => m.StockIssueToProductionModule
                    )
            },
            {
                path: "stock_transfer",
                loadChildren: () => import("./stock-transfer/stock-transfer.module").then(m => m.StockTransferModule)
            },
            {path: "job_card", loadChildren: () => import("./job-card/job-card.module").then(m => m.JobCardModule)},

            {path: "pre_press", loadChildren: () => import("./pre-press/pre-press.module").then(m => m.PrePressModule)},
            {
                path: "gi_ppic_to_production",
                loadChildren: () =>
                    import("./gi-ppic-to-production/gi-ppic-to-production.module").then(m => m.GIPPICToProductionModule)
            },
            {
                path: "job_card_tracking_list",
                loadChildren: () =>
                    import("./job-card-tracking/job-card-tracking.module").then(m => m.JobCardTrackingModule)
            },
            {
                path: "gr_acknowledgement",
                loadChildren: () =>
                    import("./../../production/transactions/gr-acknowledgement/gr-acknowledgement.module").then(
                        m => m.GrAcknowledgementModule
                    )
            },
            {
                path: "goods_transfer_request",
                loadChildren: () =>
                    import("./../../production/transactions/gt-request/gt-request.module").then(m => m.GTRequestModule)
            },
            {
                path: "gt_response",
                loadChildren: () =>
                    import("./../../stores/transactions/gt-response/gt-response.module").then(m => m.GTResponseModule)
            },
            {
                path: "material_requirement_planning",
                loadChildren: () =>
                    import("./material-requirement-planning/material-requirement-planning.module").then(
                        m => m.MaterialRequirementPlanningModule
                    )
            },
            {
                path: "sps_inventory_reconciliation",
                loadChildren: () =>
                    import("./sps-inventory-reconciliation/sps-inventory-reconciliation.module").then(
                        m => m.SpsInventoryReconciliationModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
