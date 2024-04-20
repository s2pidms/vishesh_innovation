import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {TravelRequestListComponent} from "./screens/travel-request-list/travel-request-list.component";
import {TravelRequestFormComponent} from "./screens/travel-request-form/travel-request-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: TravelRequestListComponent},
    {
        path: "form",
        component: TravelRequestFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [TravelRequestListComponent, TravelRequestFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TravelRequestModule {}
