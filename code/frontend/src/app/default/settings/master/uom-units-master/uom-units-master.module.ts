import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {UOMUnitsMasterListComponent} from "./screens/uom-units-master-list/uom-units-master-list.component";
import {UOMUnitsMasterFormComponent} from "./screens/uom-units-master-form/uom-units-master-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "list/:appParameter", component: UOMUnitsMasterListComponent},
    {
        path: "form",
        component: UOMUnitsMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [UOMUnitsMasterListComponent, UOMUnitsMasterFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class UOMUnitsMasterModule {}
