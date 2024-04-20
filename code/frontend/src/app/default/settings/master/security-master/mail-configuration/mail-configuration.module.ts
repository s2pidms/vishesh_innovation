import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MailConfigurationListComponent} from "./screens/mail-configuration-list/mail-configuration-list.component";
import {MailConfigurationFormComponent} from "./screens/mail-configuration-form/mail-configuration-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: MailConfigurationListComponent},
    {
        path: "form",
        component: MailConfigurationFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [MailConfigurationListComponent, MailConfigurationFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MailConfigurationModule {}
