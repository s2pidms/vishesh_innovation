import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NPDReviewPrintScreenComponent} from "../npd-review-print-screen/npd-review-print-screen.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {NpdReviewFeasibilityModule} from "src/app/default/business-leads/transactions/npd-review-feasibility/npd-review-feasibility.module";

const routes: Routes = [{path: "print_form", component: NPDReviewPrintScreenComponent}];
@NgModule({
    declarations: [NPDReviewPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, NpdReviewFeasibilityModule]
})
export class NPDReviewPrintScreenModule {}
