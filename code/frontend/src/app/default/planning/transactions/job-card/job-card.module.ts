import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobCardListComponent} from "./screens/job-card-list/job-card-list.component";
import {JobCardFormComponent} from "./screens/job-card-form/job-card-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {
    BatchInfoModalComponent,
    FgInventoryModalComponent,
    JobCardDispModalComponent,
    JobCardMRPModalComponent,
    JobCardNPDTableComponent,
    JobCardSOAndFCTableComponent
} from "./screens/components";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {
        path: "list",
        component: JobCardListComponent
    },
    {
        path: "form",
        component: JobCardFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        JobCardListComponent,
        JobCardFormComponent,
        BatchInfoModalComponent,
        FgInventoryModalComponent,
        JobCardDispModalComponent,
        JobCardNPDTableComponent,
        JobCardSOAndFCTableComponent,
        JobCardMRPModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    providers: [NgbActiveModal]
})
export class JobCardModule {}
