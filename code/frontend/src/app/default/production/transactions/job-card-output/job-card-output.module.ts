import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardOutputListComponent} from "./screens/job-card-output-list/job-card-output-list.component";
import {JobCardOutputFormComponent} from "./screens/job-card-output-form/job-card-output-form.component";
import {JobCardOutputDetailsComponent} from "./screens/job-card-output-details/job-card-output-details.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobCardOutputListComponent},
    {
        path: "form",
        component: JobCardOutputFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [JobCardOutputListComponent, JobCardOutputFormComponent, JobCardOutputDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobCardOutputModule {}
