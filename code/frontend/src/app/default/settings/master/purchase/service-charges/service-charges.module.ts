import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ServiceChargesListComponent} from "./screens/service-charges-list/service-charges-list.component";
import {ServiceChargesFormComponent} from "./screens/service-charges-form/service-charges-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ServiceChargesListComponent},
    {
        path: "form",
        component: ServiceChargesFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ServiceChargesListComponent, ServiceChargesFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ServiceChargesModule {}
