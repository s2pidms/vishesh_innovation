import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {ChannelPartnerListComponent} from "./channel-partner-list/channel-partner-list.component";
import {ChannelPartnerFormComponent} from "./channel-partner-form/channel-partner-form.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ChannelPartnerListComponent},
    {
        path: "form",
        component: ChannelPartnerFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ChannelPartnerListComponent, ChannelPartnerFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class channelPartnerModule {}
