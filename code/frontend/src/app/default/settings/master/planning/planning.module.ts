import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PlanningComponent} from "./planning.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: PlanningComponent},
    {
        path: "child_item_category",
        loadChildren: () =>
            import("./child-item-category/child-item-category.module").then(m => m.ChildItemCategoryModule)
    },
    {
        path: "map_process_name",
        loadChildren: () => import("./map-process-name/map-process-name.module").then(m => m.MapProcessNameModule)
    }
];

@NgModule({
    declarations: [PlanningComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PlanningModule {}
