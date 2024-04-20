import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SubModuleFormComponent} from "./screens/sub-module-form/sub-module-form.component";
import {SharedModule} from "@shared/shared.module";
import {AddSubModuleRollComponent} from "./screens/add-sub-module-roll/add-sub-module-roll.component";

const routes: Routes = [{path: "form", component: SubModuleFormComponent}];

@NgModule({
    declarations: [SubModuleFormComponent, AddSubModuleRollComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SubModuleManagementModule {}
