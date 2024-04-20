import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {StockPreparationFormComponent} from "./screens/stock-preparation-form/stock-preparation-form.component";
import {RollToRollFormComponent} from "./screens/roll-to-roll-form/roll-to-roll-form.component";
import {RollToRollRemarksComponent} from "./screens/roll-to-roll-remarks/roll-to-roll-remarks.component";
import {SharedModule} from "@shared/shared.module";
import {RollToSheetFormComponent} from "./screens/roll-to-sheet-form/roll-to-sheet-form.component";
import {ItemRollToSheetComponent} from "./screens/item-roll-to-sheet/item-roll-to-sheet.component";
import {SheetToSheetFormComponent} from "./screens/sheet-to-sheet-form/sheet-to-sheet-form.component";

const routes: Routes = [
    {path: "", redirectTo: "stock_preparation_form", pathMatch: "full"},
    {path: "stock_preparation_form", component: StockPreparationFormComponent},
    {path: "roll_to_roll", component: RollToRollFormComponent},
    {path: "roll_to_sheet", component: RollToSheetFormComponent},
    {path: "item_roll_to_sheet", component: ItemRollToSheetComponent},
    {path: "sheet_to_sheet", component: SheetToSheetFormComponent}
];

@NgModule({
    declarations: [
        StockPreparationFormComponent,
        RollToRollFormComponent,
        RollToRollRemarksComponent,
        RollToSheetFormComponent,
        ItemRollToSheetComponent,
        SheetToSheetFormComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class StockPreparationModule {}
