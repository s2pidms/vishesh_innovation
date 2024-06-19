import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {StockLevelListComponent} from "./screens/stock-level-list/stock-level-list.component";
import {StockLevelFormComponent} from "./screens/stock-level-form/stock-level-form.component";
import {StatusSummaryModalComponent} from "./screens/components/status-summary-modal/status-summary-modal.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: StockLevelListComponent},
    {
        path: "form",
        component: StockLevelFormComponent
    }
];

@NgModule({
    declarations: [StockLevelListComponent, StockLevelFormComponent, StatusSummaryModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class StockLevelModule {}
