import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {TaxInvoicePrintScreenComponent} from "./tax-invoice-print-screen.component";
import {TemplatesTIModule} from "../templates-TI/templates-ti.module";

const routes: Routes = [{path: "", component: TaxInvoicePrintScreenComponent}];

@NgModule({
    declarations: [TaxInvoicePrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, TemplatesTIModule]
})
export class TaxInvoicePrintScreenModule {}
