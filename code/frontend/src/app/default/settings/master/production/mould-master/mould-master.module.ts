import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MouldMasterListComponent} from "./screens/mould-master-list/mould-master-list.component";
import {MouldMasterFormComponent} from "./screens/mould-master-form/mould-master-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: MouldMasterListComponent},
    {
        path: "form",
        component: MouldMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [MouldMasterListComponent, MouldMasterFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MouldMasterModule {}
