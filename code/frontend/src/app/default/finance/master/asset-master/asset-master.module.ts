import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {AssetMasterListComponent} from "./screens/asset-master-list/asset-master-list.component";
import {AssetMasterFormComponent} from "./screens/asset-master-form/asset-master-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {AssetMasterInfoComponent} from "./screens/components/asset-master-info/asset-master-info.component";
import {AssetCostingModalComponent} from "./screens/components/asset-costing-modal/asset-costing-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: AssetMasterListComponent},
    {
        path: "form",
        component: AssetMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        AssetMasterListComponent,
        AssetMasterFormComponent,
        AssetMasterInfoComponent,
        AssetCostingModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AssetMasterModule {}
