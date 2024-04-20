import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DirectCostDskuListComponent} from "./screens/direct-cost-dsku-list/direct-cost-dsku-list.component";
import {DirectCostDskuFormComponent} from "./screens/direct-cost-dsku-form/direct-cost-dsku-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: DirectCostDskuListComponent},
    {
        path: "form",
        component: DirectCostDskuFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [DirectCostDskuListComponent, DirectCostDskuFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DirectCostDskuModule {}
