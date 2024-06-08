import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import { JobWorkerChallanPrintScreenComponent } from "./job-worker-challan-print-screen.component";

const routes: Routes = [{path: "", component: JobWorkerChallanPrintScreenComponent}];

@NgModule({
    declarations: [JobWorkerChallanPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkChallanPrintScreenModule {}
