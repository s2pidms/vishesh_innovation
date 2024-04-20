import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProcessNameFormComponent} from "./screens/process-name-form/process-name-form.component";
import {ProcessNameListComponent} from "./screens/process-name-list/process-name-list.component";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {SharedModule} from "@shared/shared.module";
import {DefineSubProcessesModalComponent} from "./screens/define-sub-processes-modal/define-sub-processes-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ProcessNameListComponent},
    {
        path: "form",
        component: ProcessNameFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ProcessNameFormComponent, ProcessNameListComponent, DefineSubProcessesModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProcessNameMasterModule {}
