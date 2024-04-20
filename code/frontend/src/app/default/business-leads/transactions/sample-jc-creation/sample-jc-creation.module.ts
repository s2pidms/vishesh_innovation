import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SampleJcCreationListComponent} from "./screens/sample-jc-creation-list/sample-jc-creation-list.component";
import {SampleJcCreationFormComponent} from "./screens/sample-jc-creation-form/sample-jc-creation-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SampleJcCreationListComponent},
    {
        path: "form",
        component: SampleJcCreationFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SampleJcCreationListComponent, SampleJcCreationFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleJcCreationModule {}
