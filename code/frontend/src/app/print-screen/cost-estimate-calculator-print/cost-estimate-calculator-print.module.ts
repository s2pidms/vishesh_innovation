import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {CostEstimateCalculatorPrintComponent} from "./cost-estimate-calculator-print.component";

const routes: Routes = [{path: "", component: CostEstimateCalculatorPrintComponent}];

@NgModule({
    declarations: [CostEstimateCalculatorPrintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CostEstimateCalculatorPrintModule {}
