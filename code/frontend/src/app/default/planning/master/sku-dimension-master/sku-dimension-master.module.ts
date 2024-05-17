import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuDimensionMasterListComponent} from "./screens/sku-dimension-master-list/sku-dimension-master-list.component";
import {SkuDimensionMasterFormComponent} from "./screens/sku-dimension-master-form/sku-dimension-master-form.component";
import {CopyDimensionMasterModalComponent} from "./screens/components/copy-dimension-master-modal/copy-dimension-master-modal.component";
import {StatusSummaryModalComponent} from "./screens/components/status-summary-modal/status-summary-modal.component";
import {SharedModule} from "@shared/shared.module";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuDimensionMasterListComponent},
    {
        path: "form",
        component: SkuDimensionMasterFormComponent
    }
];

@NgModule({
    declarations: [
        SkuDimensionMasterListComponent,
        SkuDimensionMasterFormComponent,
        CopyDimensionMasterModalComponent,
        StatusSummaryModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class SkuDimensionMasterModule {}
