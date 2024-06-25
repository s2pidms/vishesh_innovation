import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {RejectionSummaryFormComponent} from "./screens/rejection-summary-form/rejection-summary-form.component";
import {RejectionSummaryListComponent} from "./screens/rejection-summary-list/rejection-summary-list.component";
import {RemarksModalComponent} from "./screens/components/remarks-modal/remarks-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import { StatusSummaryComponent } from './screens/components/status-summary/status-summary.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: RejectionSummaryListComponent},
    {
        path: "form",
        component: RejectionSummaryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [RejectionSummaryFormComponent, RejectionSummaryListComponent, RemarksModalComponent, StatusSummaryComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class RejectionSummaryModule {}
