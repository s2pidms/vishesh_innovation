import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {JobWorkOrderPrintScreenComponent} from "./job-work-order-print-screen.component";

const routes: Routes = [{path: "", component: JobWorkOrderPrintScreenComponent}];

@NgModule({
    declarations: [JobWorkOrderPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkOrderPrintScreenModule {}
