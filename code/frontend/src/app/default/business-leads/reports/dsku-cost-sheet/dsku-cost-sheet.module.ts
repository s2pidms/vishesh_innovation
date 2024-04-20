import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DskuCostSheetComponent} from "./dsku-cost-sheet.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: DskuCostSheetComponent}];

@NgModule({
    declarations: [DskuCostSheetComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DskuCostSheetModule {}
