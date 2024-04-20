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
                path: "maintenance-schedule",
                loadChildren: () =>
                    import("./maintenance-schedule/maintenance-schedule.module").then(m => m.MaintenanceScheduleModule)
            },
            {
                path: "work-order-generation",
                loadChildren: () =>
                    import("./work-order-generation/work-order-generation.module").then(
                        m => m.WorkOrderGenerationModule
                    )
            },
            {
                path: "calibration-and-verification",
                loadChildren: () =>
                    import("./calibration-and-verification/calibration-and-verification.module").then(
                        m => m.CalibrationAndVerificationModule
                    )
            },
            {
                path: "task-scheduling",
                loadChildren: () => import("./task-scheduling/task-scheduling.module").then(m => m.TaskSchedulingModule)
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
