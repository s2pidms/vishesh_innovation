import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SpsInventoryReconciliationListComponent} from "./screens/sps-inventory-reconciliation-list/sps-inventory-reconciliation-list.component";
import {SpsDucModalComponent} from "./screens/sps-duc-modal/sps-duc-modal.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: SpsInventoryReconciliationListComponent
    }
];

@NgModule({
    declarations: [SpsInventoryReconciliationListComponent, SpsDucModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SpsInventoryReconciliationModule {}
