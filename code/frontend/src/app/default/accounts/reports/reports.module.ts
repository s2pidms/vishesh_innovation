import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReportsComponent} from "./reports.component";

const routes: Routes = [
    {
        path: "",
        component: ReportsComponent,
        children: [
            {
                path: "travel_request",
                loadChildren: () => import("./travel-request/travel-request.module").then(m => m.TravelRequestModule)
            },
            {
                path: "invoice_payment",
                loadChildren: () => import("./invoice-payment/invoice-payment.module").then(m => m.InvoicePaymentModule)
            },
            {
                path: "invoice_aging",
                loadChildren: () => import("./invoice-aging/invoice-aging.module").then(m => m.InvoiceAgingModule)
            },
            {
                path: "purchase_register_entry",
                loadChildren: () =>
                    import("./purchase-register-entry/purchase-register-entry.module").then(
                        m => m.PurchaseRegisterEntryModule
                    )
            },
            {
                path: "purchase_register_report",
                loadChildren: () =>
                    import("./purchase-register-report/purchase-register-report.module").then(
                        m => m.PurchaseRegisterReportModule
                    )
            },
            {
                path: "sales_register_report",
                loadChildren: () =>
                    import("./sales-register-report/sales-register-report.module").then(
                        m => m.SalesRegisterReportModule
                    )
            },
            {
                path: "MRN_report",
                loadChildren: () => import("./../../quality/reports/mrn/mrn.module").then(m => m.MRNModule)
            },
            {
                path: "sales-register-with-details",
                loadChildren: () =>
                    import("./../../sales/reports/sales-register-with-details/sales-register-with-details.module").then(
                        m => m.SalesRegisterWithDetailsModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
