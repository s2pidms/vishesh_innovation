import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NPDReviewFeasibilityPrintScreenComponent} from "./npd-review-feasibility-print-screen.component";
import {SharedModule} from "@shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: "", component: NPDReviewFeasibilityPrintScreenComponent}];

@NgModule({
    declarations: [NPDReviewFeasibilityPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class NPDReviewFeasibilityPrintScreenModule {}
