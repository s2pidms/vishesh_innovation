import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import { JobCardPrintComponent } from "./job-card-print.component";

const routes: Routes = [{path: "", component: JobCardPrintComponent}];

@NgModule({
    declarations: [JobCardPrintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobCardPrintModule {}
