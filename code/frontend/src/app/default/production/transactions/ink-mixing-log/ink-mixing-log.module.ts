import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InkMixingLogListComponent} from "./screens/ink-mixing-log-list/ink-mixing-log-list.component";
import {InkMixingLogFormComponent} from "./screens/ink-mixing-log-form/ink-mixing-log-form.component";
import {InkMixingLogBatchComponent} from "../jc-production-entry/screens/ink-mixing-log/ink-mixing-log-batch/ink-mixing-log-batch.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {path: "form", component: InkMixingLogFormComponent},
    {
        path: "batch_entry",
        component: InkMixingLogBatchComponent
    }
];

@NgModule({
    declarations: [InkMixingLogListComponent, InkMixingLogFormComponent, ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InkMixingLogModule {}
