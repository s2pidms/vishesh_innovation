import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GenerateEWayBillsFormComponent} from "./screens/generate-e-way-bills-form/generate-e-way-bills-form.component";
import {SharedModule} from "@shared/shared.module";
import {EWayBillsItemDetailsComponent} from "./screens/e-way-bills-item-details/e-way-bills-item-details.component";
import {EWayBillsTransportationDetailsComponent} from "./screens/e-way-bills-transportation-details/e-way-bills-transportation-details.component";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {
        path: "form",
        component: GenerateEWayBillsFormComponent
    }
];

@NgModule({
    declarations: [
        GenerateEWayBillsFormComponent,
        EWayBillsItemDetailsComponent,
        EWayBillsTransportationDetailsComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GenerateEWayBillsModule {}
