import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PrePressComponent} from "./pre-press.component";

const routes: Routes = [
    {path: "tab_list", component: PrePressComponent},
    {
        path: "stock_preparation",
        loadChildren: () => import("./stock-preparation/stock-preparation.module").then(m => m.StockPreparationModule)
    }
];

@NgModule({
    declarations: [PrePressComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PrePressModule {}
  