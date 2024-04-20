import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {CostSheetForDskuListComponent} from "./screens/cost-sheet-for-dsku-list/cost-sheet-for-dsku-list.component";
import {CostSheetForDskuFormComponent} from "./screens/cost-sheet-for-dsku-form/cost-sheet-for-dsku-form.component";
import {CostSheetForDskuDetailsComponent} from "./screens/cost-sheet-for-dsku-details/cost-sheet-for-dsku-details.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: CostSheetForDskuListComponent},
    {
        path: "form",
        component: CostSheetForDskuFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [CostSheetForDskuListComponent, CostSheetForDskuFormComponent, CostSheetForDskuDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CostSheetForDskuModule {}
