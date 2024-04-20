import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {FgFormComponent} from "./screens/fg-form/fg-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {
        path: "form",
        component: FgFormComponent
    }
];

@NgModule({
    declarations: [FgFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FgCorrectionModule {}
