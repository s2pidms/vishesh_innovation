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
                path: "mrn",
                loadChildren: () => import("./mrn/mrn.module").then(m => m.MRNModule)
            },
            {
                path: "pdir_entry",
                loadChildren: () => import("./pdir-entry/pdir-entry.module").then(m => m.PdirEntryModule)
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "resolve_discrepancy",
                loadChildren: () =>
                    import("./resolve-discrepancy/resolve-discrepancy.module").then(m => m.ResolveDiscrepancyModule)
            },
            {
                path: "job_card_output",
                loadChildren: () =>
                    import("./../../production/transactions/job-card-output/job-card-output.module").then(
                        m => m.JobCardOutputModule
                    )
            },
            {
                path: "job_card_entry",
                loadChildren: () =>
                    import("./../../production/transactions/job-card-entry/job-card-entry.module").then(
                        m => m.JobCardEntryModule
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
