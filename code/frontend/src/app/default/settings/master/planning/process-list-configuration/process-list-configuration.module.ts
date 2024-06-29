import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProcessListConfigurationFormComponent} from "./screens/process-list-configuration-form/process-list-configuration-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "form",
        component: ProcessListConfigurationFormComponent
        // resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ProcessListConfigurationFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProcessListConfigurationModule {}
