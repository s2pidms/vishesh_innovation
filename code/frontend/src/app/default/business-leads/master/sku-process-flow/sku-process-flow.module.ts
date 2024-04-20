import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuProcessFlowListComponent} from "./screens/sku-process-flow-list/sku-process-flow-list.component";
import {SkuProcessFlowFormComponent} from "./screens/sku-process-flow-form/sku-process-flow-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {CopyProcessFlowModalComponent, StatusSummaryModalComponent} from "./screens/components";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuProcessFlowListComponent},
    {
        path: "form",
        component: SkuProcessFlowFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        SkuProcessFlowListComponent,
        SkuProcessFlowFormComponent,
        StatusSummaryModalComponent,
        CopyProcessFlowModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SkuProcessFlowModule {}
