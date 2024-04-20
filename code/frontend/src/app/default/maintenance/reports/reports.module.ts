import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReportsComponent} from "./reports.component";

const routes: Routes = [
    {
        path: "",
        component: ReportsComponent,
        children: [
            {
                path: "maintenance_schedule",
                loadChildren: () =>
                    import("./maintenance-schedule/maintenance-schedule.module").then(m => m.MaintenanceScheduleModule)
            },
            {
                path: "work_order_status",
                loadChildren: () =>
                    import("./work-order-status/work-order-status.module").then(m => m.WorkOrderStatusModule)
            },
            {
                path: "calibration_and_verification",
                loadChildren: () =>
                    import("./calibration-and-verification/calibration-and-verification.module").then(
                        m => m.CalibrationAndVerificationModule
                    )
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
