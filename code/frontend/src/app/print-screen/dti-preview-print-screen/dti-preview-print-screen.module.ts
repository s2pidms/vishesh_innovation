import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {TemplatesTIModule} from "../templates-TI/templates-ti.module";
import {DTIPreviewPrintScreenComponent} from "./dti-preview-print-screen.component";

const routes: Routes = [{path: "", component: DTIPreviewPrintScreenComponent}];

@NgModule({
    declarations: [DTIPreviewPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, TemplatesTIModule]
})
export class DTIPreviewPrintScreenModule {}
