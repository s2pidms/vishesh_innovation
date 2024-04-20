import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProcessMasterListComponent} from "./screens/process-master-list/process-master-list.component";
import {ProcessMasterFormComponent} from "./screens/process-master-form/process-master-form.component";
import {AssetAllocationModalComponent} from "./screens/components/asset-allocation-modal/asset-allocation-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ProcessMasterListComponent},
    {
        path: "form",
        component: ProcessMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ProcessMasterListComponent, ProcessMasterFormComponent, AssetAllocationModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProcessMasterModule {}
