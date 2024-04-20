import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {TOLessThan5CRComponent} from "./toless-than5-cr/toless-than5-cr.component";
import {TOLessThan5CRWithDispatchComponent} from "./toless-than5-crwith-dispatch/toless-than5-crwith-dispatch.component";
import {EInvoiceComponent} from "./e-invoice/e-invoice.component";
import {AasAidsTaxInvoiceComponent} from "./aas-aids-tax-invoice/aas-aids-tax-invoice.component";
import {SharedModule} from "@shared/shared.module";
import {TaxInvoiceExportsComponent} from "./tax-invoice-exports/tax-invoice-exports.component";

const routes: Routes = [];

@NgModule({
    declarations: [
        TOLessThan5CRComponent,
        TOLessThan5CRWithDispatchComponent,
        EInvoiceComponent,
        AasAidsTaxInvoiceComponent,
        TaxInvoiceExportsComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    exports: [
        TOLessThan5CRComponent,
        TOLessThan5CRWithDispatchComponent,
        EInvoiceComponent,
        AasAidsTaxInvoiceComponent,
        TaxInvoiceExportsComponent
    ]
})
export class TemplatesTIModule {}
