import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardPlanningListComponent} from "./screens/job-card-planning-list/job-card-planning-list.component";
import {JobCardPlanningFormComponent} from "./screens/job-card-planning-form/job-card-planning-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {SoSkuDetailsComponent} from "./screens/components";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {
        path: "list",
        component: JobCardPlanningListComponent
    },
    {
        path: "form",
        component: JobCardPlanningFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [JobCardPlanningListComponent, JobCardPlanningFormComponent, SoSkuDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class JobCardPlanningModule {}
