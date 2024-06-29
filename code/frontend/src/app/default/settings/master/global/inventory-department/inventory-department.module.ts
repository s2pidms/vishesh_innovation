import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InventoryDepartmentListComponent} from "./screens/inventory-department-list/inventory-department-list.component";
import {InventoryDepartmentFormComponent} from "./screens/inventory-department-form/inventory-department-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: InventoryDepartmentListComponent},
    {
        path: "form",
        component: InventoryDepartmentFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [InventoryDepartmentListComponent, InventoryDepartmentFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InventoryDepartmentModule {}
