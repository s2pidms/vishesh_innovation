import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LeaveApplicationListComponent} from "./screens/leave-application-list/leave-application-list.component";
import {LeaveApplicationFormComponent} from "./screens/leave-application-form/leave-application-form.component";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {CancelLeaveListComponent} from "./screens/cancel-leave-list/cancel-leave-list.component";

const routes: Routes = [
    {path: "", redirectTo: "la-list", pathMatch: "full"},
    {path: "la-list", component: LeaveApplicationListComponent},
    {path: "cancel_leave_list", component: CancelLeaveListComponent},
    {
        path: "la-form",
        component: LeaveApplicationFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeaveApplicationRoutingModule {}
