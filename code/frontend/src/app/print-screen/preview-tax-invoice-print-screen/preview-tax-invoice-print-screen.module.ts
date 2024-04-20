import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {PreviewTaxInvoicePrintScreenComponent} from "./preview-tax-invoice-print-screen.component";
import {TemplatesTIModule} from "../templates-TI/templates-ti.module";

const routes: Routes = [{path: "", component: PreviewTaxInvoicePrintScreenComponent}];

@NgModule({
    declarations: [PreviewTaxInvoicePrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, TemplatesTIModule]
})
export class PreviewTaxInvoicePrintScreenModule {}
