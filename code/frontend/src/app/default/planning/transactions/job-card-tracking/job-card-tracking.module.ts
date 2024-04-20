import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardTrackingListComponent} from "./screens/job-card-tracking-list/job-card-tracking-list.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobCardTrackingListComponent}
];

@NgModule({
    declarations: [JobCardTrackingListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobCardTrackingModule {}
