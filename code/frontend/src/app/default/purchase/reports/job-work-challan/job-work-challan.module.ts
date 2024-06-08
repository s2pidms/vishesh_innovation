import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobWorkChallanComponent} from "./job-work-challan.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: JobWorkChallanComponent}];

@NgModule({
    declarations: [JobWorkChallanComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkChallanModule {}
