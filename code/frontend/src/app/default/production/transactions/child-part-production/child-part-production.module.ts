import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {ChildPartProductionComponent} from "./child-part-production.component";

const routes: Routes = [
    {path: "tab_list", component: ChildPartProductionComponent},
    {
        path: "child_part",
        loadChildren: () => import("./screens/child-part/child-part.module").then(m => m.ChildPartModule)
    },
    {
        path: "sku_production",
        loadChildren: () => import("./screens/sku-production/sku-production.module").then(m => m.SkuProductionModule)
    },
    {
        path: "gr_child_part",
        loadChildren: () => import("./screens/gr-child-part/gr-child-part.module").then(m => m.GrChildPartModule)
    }
];

@NgModule({
    declarations: [ChildPartProductionComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ChildPartProductionModule {}
