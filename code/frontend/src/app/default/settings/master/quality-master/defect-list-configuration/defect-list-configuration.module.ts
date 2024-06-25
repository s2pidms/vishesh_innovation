import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DefectListConfigurationFormComponent} from "./screens/defect-list-configuration-form/defect-list-configuration-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    // {path: "", redirectTo: "form", pathMatch: "full"},
    {
        path: "form/:appConfiguration",
        component: DefectListConfigurationFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [DefectListConfigurationFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DefectListConfigurationModule {}
