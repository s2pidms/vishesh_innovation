import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MailTriggerListComponent} from "./screens/mail-trigger-list/mail-trigger-list.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: MailTriggerListComponent}
];

@NgModule({
    declarations: [MailTriggerListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MailTriggerModule {}
