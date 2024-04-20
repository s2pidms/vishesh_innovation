import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {DskuCostSheetPrintScreenComponent} from "./dsku-cost-sheet-print-screen.component";

const routes: Routes = [{path: "", component: DskuCostSheetPrintScreenComponent}];

@NgModule({
    declarations: [DskuCostSheetPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DskuCostSheetPrintScreenModule {}
