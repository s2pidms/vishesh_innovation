import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MapProcessListComponent} from "./screens/map-process-list/map-process-list.component";
import {MapProcessFormComponent} from "./screens/map-process-form/map-process-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: MapProcessListComponent},
    {
        path: "form",
        component: MapProcessFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [MapProcessListComponent, MapProcessFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MapProcessAndMachineModule {}
