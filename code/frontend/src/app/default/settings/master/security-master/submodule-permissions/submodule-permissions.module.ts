import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SubmodulePermissionsFormComponent} from "./screens/submodule-permissions-form/submodule-permissions-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "form", component: SubmodulePermissionsFormComponent}];
@NgModule({
    declarations: [SubmodulePermissionsFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SubmodulePermissionsModule {}
