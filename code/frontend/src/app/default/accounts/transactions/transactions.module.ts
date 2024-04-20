import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./transactions.component";
const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent,
        children: [
            {path: "", redirectTo: "", pathMatch: "full"},
            {
                path: "travel_request",
                loadChildren: () => import("./travel-request/travel-request.module").then(m => m.TravelRequestModule)
            },
            {
                path: "invoice_payment",
                loadChildren: () => import("./invoice-payment/invoice-payment.module").then(m => m.InvoicePaymentModule)
            },
            {
                path: "purchase_register_entry",
                loadChildren: () =>
                    import("./purchase-register-entry/purchase-register-entry.module").then(
                        m => m.PurchaseRegisterEntryModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
