import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {QuotationOfSKUPrintScreenComponent} from "./quotation-of-skuprint-screen.component";
import {TermsOfCondOfSupplyComponent} from "../terms-of-cond-of-supply/terms-of-cond-of-supply.component";

const routes: Routes = [{path: "", component: QuotationOfSKUPrintScreenComponent}];

@NgModule({
    declarations: [QuotationOfSKUPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule,TermsOfCondOfSupplyComponent],
})
export class QuotationOfSKUPrintScreenModule {}
