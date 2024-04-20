import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardComponent} from "./job-card.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: JobCardComponent}];

@NgModule({
    declarations: [JobCardComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobCardModule {}
