import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SampleRequestListComponent} from "./screens/sample-request-list/sample-request-list.component";
import {SampleRequestFormComponent} from "./screens/sample-request-form/sample-request-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SampleRequestListComponent},
    {
        path: "form",
        component: SampleRequestFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SampleRequestListComponent, SampleRequestFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleRequestModule {}
