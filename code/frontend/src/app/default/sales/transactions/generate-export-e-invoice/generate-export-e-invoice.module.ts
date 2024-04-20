import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GenerateExportEInvoiceFormComponent} from "./screens/generate-export-e-invoice-form/generate-export-e-invoice-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "",
        component: GenerateExportEInvoiceFormComponent
    }
];

@NgModule({
    declarations: [GenerateExportEInvoiceFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GenerateExportEInvoiceModule {}
