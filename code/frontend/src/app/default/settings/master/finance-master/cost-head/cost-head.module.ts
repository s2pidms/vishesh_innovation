import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {CostHeadListComponent} from "./screens/cost-head-list/cost-head-list.component";
import {CostHeadFormComponent} from "./screens/cost-head-form/cost-head-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: CostHeadListComponent},
    {
        path: "form",
        component: CostHeadFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [CostHeadListComponent, CostHeadFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CostHeadModule {}
