import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesUomUnitMasterFormComponent} from "./screens/sales-uom-unit-master-form/sales-uom-unit-master-form.component";
import {SalesUomUnitMasterListComponent} from "./screens/sales-uom-unit-master-list/sales-uom-unit-master-list.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SalesUomUnitMasterListComponent},
    {
        path: "form",
        component: SalesUomUnitMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SalesUomUnitMasterFormComponent, SalesUomUnitMasterListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesUomUnitMasterModule {}
