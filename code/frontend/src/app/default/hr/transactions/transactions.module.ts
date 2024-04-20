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
                path: "leave_application",
                loadChildren: () =>
                    import("./leave-application/leave-application.module").then(m => m.LeaveApplicationModule)
            },
            {
                path: "salary_adv_summary",
                loadChildren: () =>
                    import("./salary-adv-summary/salary-adv-summary.module").then(m => m.SalaryAdvSummaryModule)
            },
            {
                path: "attendance_review",
                loadChildren: () =>
                    import("./attendance-review/attendance-review.module").then(m => m.AttendanceReviewModule)
            },
            {
                path: "payroll",
                loadChildren: () => import("./payroll/payroll.module").then(m => m.PayrollModule)
            },
            {
                path: "OD_application",
                loadChildren: () => import("./od-application/od-application.module").then(m => m.ODApplicationModule)
            },
            {
                path: "iBAS_upload_attendance",
                loadChildren: () =>
                    import("./iBAS-upload-attendance/iBAS-upload-attendance.module").then(
                        m => m.IBASUploadAttendanceModule
                    )
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "leave_adjustment",
                loadChildren: () =>
                    import("./leave-adjustment/leave-adjustment.module").then(m => m.LeaveAdjustmentModule)
            }
        ]
    }
];
@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
