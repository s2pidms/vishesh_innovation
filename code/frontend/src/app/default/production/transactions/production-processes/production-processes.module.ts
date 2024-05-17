import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProductionProcessesComponent} from "./production-processes.component";
import {ScreenMakingLogFormComponent} from "./screens/screen-making-log/screen-making-log-form/screen-making-log-form.component";
import {ScreenPrintingLogFormComponent} from "./screens/screen-printing-log/screen-printing-log-form/screen-printing-log-form.component";
import {PpInkMixingFormComponent} from "./screens/pp-ink-mixing/pp-ink-mixing-form/pp-ink-mixing-form.component";
import {SharedModule} from "@shared/shared.module";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {StockCuttingEntryComponent} from "./screens/pp-stock-cutting/stock-cutting-entry/stock-cutting-entry.component";
import {StockPreparationFormComponent} from "./screens/stock-preparation/stock-preparation-form/stock-preparation-form.component";
import {AddOnGTQtyModalComponent} from "./screens/components/add-on-gtqty-modal/add-on-gtqty-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "tab_list", pathMatch: "full"},
    {path: "tab_list", component: ProductionProcessesComponent},
    {path: "screen_making_form", component: ScreenMakingLogFormComponent},
    {path: "screen_printing_form", component: ScreenPrintingLogFormComponent},
    {path: "pp_ink_mixing_form", component: PpInkMixingFormComponent},
    {path: "pp_stock_cutting_form", component: StockCuttingEntryComponent},
    {path: "stock_preparation_form", component: StockPreparationFormComponent}
];

@NgModule({
    declarations: [
        ProductionProcessesComponent,
        ScreenMakingLogFormComponent,
        ScreenPrintingLogFormComponent,
        PpInkMixingFormComponent,
        StockCuttingEntryComponent,
        StockPreparationFormComponent,
        AddOnGTQtyModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class ProductionProcessesModule {}
