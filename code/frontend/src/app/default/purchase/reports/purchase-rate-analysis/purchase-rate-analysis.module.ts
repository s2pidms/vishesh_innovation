import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseRateAnalysisComponent} from "./purchase-rate-analysis.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: PurchaseRateAnalysisComponent}];

@NgModule({
    declarations: [PurchaseRateAnalysisComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseRateAnalysisModule {}
