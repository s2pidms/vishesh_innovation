import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MapProcessNameListComponent} from "./screens/map-process-name-list/map-process-name-list.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: MapProcessNameListComponent}
];

@NgModule({
    declarations: [MapProcessNameListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MapProcessNameModule {}
