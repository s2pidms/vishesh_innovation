import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LeaveApplicationRoutingModule} from "./leave-application-routing.module";
import {LeaveApplicationListComponent} from "./screens/leave-application-list/leave-application-list.component";
import {LeaveApplicationFormComponent} from "./screens/leave-application-form/leave-application-form.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {CancelLeaveListComponent} from "./screens/cancel-leave-list/cancel-leave-list.component";

const routes: Routes = [
    {path: "", redirectTo: "leave-application-list", pathMatch: "full"},
    {path: "leave-application-list", component: LeaveApplicationListComponent},
    {path: "cancel_leave_list", component: CancelLeaveListComponent},
    {
        path: "leave-application-form",
        component: LeaveApplicationFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [LeaveApplicationListComponent, LeaveApplicationFormComponent, CancelLeaveListComponent],
    imports: [CommonModule, LeaveApplicationRoutingModule, RouterModule.forChild(routes), SharedModule]
})
export class LeaveApplicationModule {}
