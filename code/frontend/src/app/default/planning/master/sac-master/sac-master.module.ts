import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SACMasterComponent} from "./sac-master.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SACMasterComponent},
    {
        path: "purchase_sac_master",
        loadChildren: () => import("./../../../purchase/master/sac/sac.module").then(m => m.SACModule)
    },
    {
        path: "sales_sac_master",
        loadChildren: () => import("./../../../sales/master/sac/sac.module").then(m => m.SACModule)
    }
];
@NgModule({
    declarations: [SACMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SACMasterModule {}
