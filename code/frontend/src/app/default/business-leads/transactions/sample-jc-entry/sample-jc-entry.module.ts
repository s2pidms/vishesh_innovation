import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SampleJcEntryListComponent} from "./screens/sample-jc-entry-list/sample-jc-entry-list.component";
import {SampleJcEntryFormComponent} from "./screens/sample-jc-entry-form/sample-jc-entry-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SampleJcEntryListComponent},
    {
        path: "form",
        component: SampleJcEntryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SampleJcEntryListComponent, SampleJcEntryFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleJcEntryModule {}
