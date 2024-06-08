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
                path: "npd-request",
                loadChildren: () => import("./npd-request/npd-request.module").then(m => m.NpdRequestModule)
            },
            {
                path: "npd_review_feasibility",
                loadChildren: () =>
                    import("./npd-review-feasibility/npd-review-feasibility.module").then(
                        m => m.NpdReviewFeasibilityModule
                    )
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "sample_request",
                loadChildren: () => import("./sample-request/sample-request.module").then(m => m.SampleRequestModule)
            },
            {
                path: "sample_jc_creation",
                loadChildren: () =>
                    import("./sample-jc-creation/sample-jc-creation.module").then(m => m.SampleJcCreationModule)
            },
            {
                path: "sample_jc_entry",
                loadChildren: () => import("./sample-jc-entry/sample-jc-entry.module").then(m => m.SampleJcEntryModule)
            },
            {
                path: "job_card",
                loadChildren: () =>
                    import("./../../planning/transactions/job-card/job-card.module").then(m => m.JobCardModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
