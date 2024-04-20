import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {QuotationOfSkuListComponent} from "./quotation-of-sku-list/quotation-of-sku-list.component";
import {QuotationOfSkuFormComponent} from "./quotation-of-sku-form/quotation-of-sku-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {QuotationTermsAndCondComponent} from "./quotation-terms-and-cond/quotation-terms-and-cond.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: QuotationOfSkuListComponent},
    {
        path: "form",
        component: QuotationOfSkuFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [QuotationOfSkuListComponent, QuotationOfSkuFormComponent, QuotationTermsAndCondComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class QuotationOfSkuModule {}
