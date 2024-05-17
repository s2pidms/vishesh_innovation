import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuAttributeTrackingListComponent} from "./screens/sku-attribute-tracking-list/sku-attribute-tracking-list.component";
import {StatusSummaryModalComponent} from "./screens/components/status-summary-modal/status-summary-modal.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SkuAttributeTrackingListComponent}
];

@NgModule({
    declarations: [SkuAttributeTrackingListComponent, StatusSummaryModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SkuAttributeTrackingModule {}
