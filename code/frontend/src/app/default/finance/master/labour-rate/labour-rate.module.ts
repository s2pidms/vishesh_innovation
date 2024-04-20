import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {LabourRateFormComponent} from "./screens/labour-rate-form/labour-rate-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {path: "form", component: LabourRateFormComponent}
];

@NgModule({
    declarations: [LabourRateFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class LabourRateModule {}
