import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InvoicePaymentListComponent} from "./screens/invoice-payment-list/invoice-payment-list.component";
import {InvoicePaymentFormComponent} from "./screens/invoice-payment-form/invoice-payment-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import { InvoicePaymentModalComponent } from './screens/components/invoice-payment-modal/invoice-payment-modal.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: InvoicePaymentListComponent},
    {
        path: "form",
        component: InvoicePaymentFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [InvoicePaymentListComponent, InvoicePaymentFormComponent, InvoicePaymentModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InvoicePaymentModule {}
