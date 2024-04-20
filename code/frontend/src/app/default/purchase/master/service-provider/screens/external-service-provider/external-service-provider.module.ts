import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ExternalProviderFormComponent} from "./external-provider-form/external-provider-form.component";
import {SharedModule} from "@shared/shared.module";
import {ExternalProviderListComponent} from "./external-provider-list/external-provider-list.component";
import {ProviderContactDetailsComponent} from "./provider-contact-details/provider-contact-details.component";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ExternalProviderListComponent},
    {
        path: "form",
        component: ExternalProviderFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ExternalProviderListComponent, ExternalProviderFormComponent, ProviderContactDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ExternalServiceProviderModule {}
