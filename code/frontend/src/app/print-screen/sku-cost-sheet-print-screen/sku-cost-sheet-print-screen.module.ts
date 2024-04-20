import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SkuCostSheetPrintScreenComponent} from "./sku-cost-sheet-print-screen.component";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
const routes: Routes = [{path: "", component: SkuCostSheetPrintScreenComponent}];
@NgModule({
    declarations: [SkuCostSheetPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SKUCostSheetPrintScreenModule {}
