import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {HSNMasterComponent} from "./hsn-master.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: HSNMasterComponent},
    {
        path: "purchase_hsn_master",
        loadChildren: () => import("./../../../purchase/master/hsn/hsn.module").then(m => m.HSNModule)
    },
    {
        path: "sales_hsn_master",
        loadChildren: () => import("./../../../sales/master/hsn/hsn.module").then(m => m.HSNModule)
    }
];

@NgModule({
    declarations: [HSNMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HSNMasterModule {}
