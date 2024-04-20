import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseIndentListComponent} from "./screens/purchase-indent-list/purchase-indent-list.component";
import {PurchaseIndentFormComponent} from "./screens/purchase-indent-form/purchase-indent-form.component";
import {PIDeliveryScheduleModalComponent} from "./screens/pi-delivery-schedule-modal/pi-delivery-schedule-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: PurchaseIndentListComponent},
    {
        path: "form",
        component: PurchaseIndentFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [PurchaseIndentListComponent, PurchaseIndentFormComponent, PIDeliveryScheduleModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseIndentModule {}
