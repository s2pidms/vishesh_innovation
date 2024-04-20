import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InvoicePaymentComponent} from "./invoice-payment.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: InvoicePaymentComponent}];

@NgModule({
    declarations: [InvoicePaymentComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InvoicePaymentModule {}
