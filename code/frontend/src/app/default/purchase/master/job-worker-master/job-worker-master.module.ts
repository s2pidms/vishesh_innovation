import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobWorkerMasterFormComponent} from "./screens/job-worker-master-form/job-worker-master-form.component";
import {JobWorkerMasterListComponent} from "./screens/job-worker-master-list/job-worker-master-list.component";
import {FormScreenResolver} from "@core/guards";
import {
    JwBankDetailsModalComponent,
    JwContactDetailsModalComponent,
    JwMSMECategoryModalComponent,
    JwNickNameModalComponent
} from "./screens/components";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobWorkerMasterListComponent},
    {
        path: "form",
        component: JobWorkerMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        JobWorkerMasterListComponent,
        JobWorkerMasterFormComponent,
        JwContactDetailsModalComponent,
        JwBankDetailsModalComponent,
        JwNickNameModalComponent,
        JwMSMECategoryModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkerMasterModule {}
