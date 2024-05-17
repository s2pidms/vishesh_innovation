import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuMaterialMasterListComponent} from "./screens/sku-material-master-list/sku-material-master-list.component";
import {SkuMaterialMasterFormComponent} from "./screens/sku-material-master-form/sku-material-master-form.component";
import {CopyMaterialMasterModalComponent} from "./screens/components/copy-material-master-modal/copy-material-master-modal.component";
import {StatusSummaryModalComponent} from "./screens/components/status-summary-modal/status-summary-modal.component";
import {SharedModule} from "@shared/shared.module";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuMaterialMasterListComponent},
    {
        path: "form",
        component: SkuMaterialMasterFormComponent 
    }
];

@NgModule({
    declarations: [
        SkuMaterialMasterListComponent,
        SkuMaterialMasterFormComponent,
        CopyMaterialMasterModalComponent,
        StatusSummaryModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class SkuMaterialMasterModule {}
