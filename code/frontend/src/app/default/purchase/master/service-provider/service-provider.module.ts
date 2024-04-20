import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ServiceProviderComponent} from "./service-provider.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ServiceProviderComponent},
    {
        path: "external_service_provider",
        loadChildren: () =>
            import("./screens/external-service-provider/external-service-provider.module").then(
                m => m.ExternalServiceProviderModule
            )
    },
    {
        path: "channel_partner",
        loadChildren: () => import("./screens/channel-partner/channel-partner.module").then(m => m.channelPartnerModule)
    }
];

@NgModule({
    declarations: [ServiceProviderComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ServiceProviderModule {}
