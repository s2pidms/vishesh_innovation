import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./transactions.component";
import {CommonModule} from "@angular/common";
const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent,
        children: [
            {
                path: "book_sales_order",
                loadChildren: () =>
                    import("./book-sales-order/book-sales-order.module").then(m => m.BookSalesOrderModule)
            },
            {
                path: "drn",
                loadChildren: () =>
                    import("./dispatch-request-note/dispatch-request-note.module").then(
                        m => m.DispatchRequestNoteModule
                    )
            },
            {
                path: "proforma_invoice",
                loadChildren: () =>
                    import("./proforma-invoice/proforma-invoice.module").then(m => m.ProformaInvoiceModule)
            },
            {
                path: "credit-note",
                loadChildren: () => import("./credit-note/credit-note.module").then(m => m.CreditNoteModule)
            },
            {
                path: "direct-tax-invoice",
                loadChildren: () =>
                    import("./direct-tax-invoice/direct-tax-invoice.module").then(m => m.DirectTaxInvoiceModule)
            },
            {
                path: "generate_e_way_bills",
                loadChildren: () =>
                    import("./generate-e-way-bills/generate-e-way-bills.module").then(m => m.GenerateEWayBillsModule)
            },
            {
                path: "generate-e-invoice",
                loadChildren: () =>
                    import("./generate-e-invoice/generate-e-invoice.module").then(m => m.GenerateEInvoiceModule)
            },
            {
                path: "service_invoice",
                loadChildren: () => import("./service-invoice/service-invoice.module").then(m => m.ServiceInvoiceModule)
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "short_SO",
                loadChildren: () => import("./short-so/short-so.module").then(m => m.ShortPOModule)
            },
            {
                path: "sales_forecast",
                loadChildren: () => import("./sales-forecast/sales-forecast.module").then(m => m.SalesForecastModule)
            },
            {
                path: "sales_debit_note",
                loadChildren: () =>
                    import("./sales-debit-note/sales-debit-note.module").then(m => m.SalesDebitNoteModule)
            },
            {
                path: "asn",
                loadChildren: () => import("./../../dispatch/transactions/asn/asn.module").then(m => m.AsnModule)
            },
            {
                path: "shipment_creation",
                loadChildren: () =>
                    import("./../../dispatch/transactions/shipment-creation/shipment-creation.module").then(
                        m => m.ShipmentCreationModule
                    )
            },
            {
                path: "generate_export_e_invoice",
                loadChildren: () =>
                    import("./generate-export-e-invoice/generate-export-e-invoice.module").then(
                        m => m.GenerateExportEInvoiceModule
                    )
            },
            {
                path: "generate_export_e_way_bills",
                loadChildren: () =>
                    import("./generate-export-e-way-bills/generate-export-e-way-bills.module").then(
                        m => m.GenerateExportEWayBillsModule
                    )
            },
            {
                path: "quotation",
                loadChildren: () => import("./quotation/quotation.module").then(m => m.QuotationModule)
            },
            {
                path: "job_card",
                loadChildren: () =>
                    import("./../../planning/transactions/job-card/job-card.module").then(m => m.JobCardModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
