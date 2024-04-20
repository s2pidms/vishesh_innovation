import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardEntryListComponent} from "./screens/job-card-entry-list/job-card-entry-list.component";
import {JobCardEntryFormComponent} from "./screens/job-card-entry-form/job-card-entry-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {IPQAModalComponent, ProdInfoModalComponent} from "./screens/components";
import { JCBatchInfoModalComponent } from './screens/components/jc-batch-info-modal/jc-batch-info-modal.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobCardEntryListComponent},
    {
        path: "form",
        component: JobCardEntryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [JobCardEntryListComponent, JobCardEntryFormComponent, ProdInfoModalComponent, IPQAModalComponent, JCBatchInfoModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobCardEntryModule {}
