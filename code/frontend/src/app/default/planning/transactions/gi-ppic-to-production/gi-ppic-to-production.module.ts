import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {JobCardDetailsModalComponent} from "./screens/job-card-details-modal/job-card-details-modal.component";

const routes: Routes = [{path: "", component: JobCardDetailsModalComponent}];

@NgModule({
    declarations: [JobCardDetailsModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GIPPICToProductionModule {}
