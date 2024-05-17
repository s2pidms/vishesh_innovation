import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuInkMasterListComponent} from "./screens/sku-ink-master-list/sku-ink-master-list.component";
import {SkuInkMasterFormComponent} from "./screens/sku-ink-master-form/sku-ink-master-form.component";
import {CopyInkInkInfoModalComponent} from "./screens/components/copy-ink-ink-info-modal/copy-ink-ink-info-modal.component";
import {StatusSummaryModalComponent} from "./screens/components/status-summary-modal/status-summary-modal.component";
import {SharedModule} from "@shared/shared.module";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuInkMasterListComponent},
    {
        path: "form",
        component: SkuInkMasterFormComponent
    }
];

@NgModule({
    declarations: [
        SkuInkMasterListComponent,
        SkuInkMasterFormComponent,
        CopyInkInkInfoModalComponent,
        StatusSummaryModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class SkuInkMasterModule {}
