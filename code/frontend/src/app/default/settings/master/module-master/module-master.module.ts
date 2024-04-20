import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ModuleMasterListComponent} from "./screens/module-master-list/module-master-list.component";
import {ModuleMasterFormComponent} from "./screens/module-master-form/module-master-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "list/:appParameter", component: ModuleMasterListComponent},
    {
        path: "form",
        component: ModuleMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ModuleMasterListComponent, ModuleMasterFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ModuleMasterModule {}
