import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProductionComponent} from "./production.component";

const routes: Routes = [
    {path: "tab_list", component: ProductionComponent},
    {
        path: "process_name_master",
        loadChildren: () =>
            import("./process-name-master/process-name-master.module").then(m => m.ProcessNameMasterModule)
    },
    {
        path: "mould_master",
        loadChildren: () => import("./mould-master/mould-master.module").then(m => m.MouldMasterModule)
    }
];

@NgModule({
    declarations: [ProductionComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductionModule {}
