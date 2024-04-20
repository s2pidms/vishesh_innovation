import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuCostSheetListComponent} from "./screens/sku-cost-sheet-list/sku-cost-sheet-list.component";
import {SkuCostSheetFormComponent} from "./screens/sku-cost-sheet-form/sku-cost-sheet-form.component";
import {CostSheetDetailsModalComponent} from "./screens/cost-sheet-details-modal/cost-sheet-details-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuCostSheetListComponent},
    {
        path: "form",
        component: SkuCostSheetFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SkuCostSheetListComponent, SkuCostSheetFormComponent, CostSheetDetailsModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SkuCostSheetModule {}
