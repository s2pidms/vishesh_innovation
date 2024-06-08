import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobWorkerItemMasterFormComponent} from "./screens/job-worker-item-master-form/job-worker-item-master-form.component";
import {JobWorkerItemMasterListComponent} from "./screens/job-worker-item-master-list/job-worker-item-master-list.component";
import {FormScreenResolver, UnsavedChangesGuard} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {DualUnitModalComponent, JobWorkerModalComponent} from "./screens/components";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobWorkerItemMasterListComponent},
    {
        path: "form",
        component: JobWorkerItemMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver},
        canDeactivate: [UnsavedChangesGuard]
    }
];

@NgModule({
    declarations: [
        JobWorkerItemMasterFormComponent,
        JobWorkerItemMasterListComponent,
        JobWorkerModalComponent,
        DualUnitModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkerItemMasterModule {}
