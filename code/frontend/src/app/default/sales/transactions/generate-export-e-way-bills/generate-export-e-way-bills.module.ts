import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GenerateExportEWayBillsFormComponent} from "./screens/generate-export-e-way-bills-form/generate-export-e-way-bills-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {
        path: "form",
        component: GenerateExportEWayBillsFormComponent
    }
];

@NgModule({
    declarations: [GenerateExportEWayBillsFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GenerateExportEWayBillsModule {}
