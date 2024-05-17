import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MaterialRequirementPlanningFormComponent} from "./screens/material-requirement-planning-form/material-requirement-planning-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},

    {
        path: "form",
        component: MaterialRequirementPlanningFormComponent
    }
];

@NgModule({
    declarations: [MaterialRequirementPlanningFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MaterialRequirementPlanningModule {}
