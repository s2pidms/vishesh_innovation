import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GIPPICToProductionListComponent} from "./screens/gi-ppic-to-production-list/gi-ppic-to-production-list.component";
import {GIPPICToProductionFormComponent} from "./screens/gi-ppic-to-production-form/gi-ppic-to-production-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {GIPPICToProductionRemarksComponent} from "./screens/gi-ppic-to-production-remarks/gi-ppic-to-production-remarks.component";
import {JobCardDetailsModalComponent} from "./screens/job-card-details-modal/job-card-details-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {
        path: "list",
        component: GIPPICToProductionListComponent
    },
    {
        path: "form",
        component: GIPPICToProductionFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        GIPPICToProductionListComponent,
        GIPPICToProductionFormComponent,
        GIPPICToProductionRemarksComponent,
        JobCardDetailsModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GIPPICToProductionModule {}
