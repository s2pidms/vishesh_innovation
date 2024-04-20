import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DirectCostListComponent} from "./screens/direct-cost-list/direct-cost-list.component";
import {DirectCostFormComponent} from "./screens/direct-cost-form/direct-cost-form.component";
import {AssetCostModalComponent, LabourCostModalComponent, ToolingCostModalComponent} from "./screens/components";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: DirectCostListComponent},
    {
        path: "form",
        component: DirectCostFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        DirectCostListComponent,
        DirectCostFormComponent,
        LabourCostModalComponent,
        AssetCostModalComponent,
        ToolingCostModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DirectCostModule {}
