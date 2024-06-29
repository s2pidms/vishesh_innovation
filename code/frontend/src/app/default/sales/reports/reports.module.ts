import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "back_order_sku",
        loadChildren: () => import("./back-order-sku/back-order-sku.module").then(m => m.BackOrderSKUModule)
    },
    {
        path: "back_order_so",
        loadChildren: () => import("./back-order-so/back-order-so.module").then(m => m.BackOrderSOModule)
    },
    {
        path: "sales_register_wo_tax",
        loadChildren: () =>
            import("./sales-register-wo-tax/sales-register-wo-tax.module").then(m => m.SalesRegisterWOTaxModule)
    },
    {
        path: "pir",
        loadChildren: () =>
            import("./proforma-invoice-report/proforma-invoice-report.module").then(m => m.ProformaInvoiceReportModule)
    },
    {
        path: "sales-register-with-details",
        loadChildren: () =>
            import("./sales-register-with-details/sales-register-with-details.module").then(
                m => m.SalesRegisterWithDetailsModule
            )
    },
    {
        path: "so-confirmation",
        loadChildren: () => import("./so-confirmation/so-confirmation.module").then(m => m.SoConfirmationModule)
    },
    {
        path: "credit-note",
        loadChildren: () => import("./credit-note/credit-note.module").then(m => m.CreditNoteModule)
    },
    {
        path: "Sales_Cost_Analysis",
        loadChildren: () =>
            import("./sales-cost-analysis/sales-cost-analysis.module").then(m => m.SalesCostAnalysisModule)
    },
    {
        path: "Credit_Note_Summary",
        loadChildren: () =>
            import("./credit-note-summary/credit-note-summary.module").then(m => m.CreditNoteSummaryModule)
    },
    {
        path: "Credit_Note_Details",
        loadChildren: () =>
            import("./credit-note-details/credit-note-details.module").then(m => m.CreditNoteDetailsModule)
    },
    {
        path: "purchase_vs_invoice",
        loadChildren: () =>
            import("./../../purchase/reports/purchase-vs-invoice/purchase-vs-invoice.module").then(
                m => m.PurchaseVsInvoiceModule
            )
    },
    {
        path: "service_invoice",
        loadChildren: () => import("./service-invoice/service-invoice.module").then(m => m.ServiceInvoiceModule)
    },
    {
        path: "gr_fulfillment_status_report",
        loadChildren: () =>
            import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                m => m.GrFulfillmentStatusModule
            )
    },
    {
        path: "FGIE_report_locationWise",
        loadChildren: () =>
            import("./../../production/reports/fgie-report-location-wise/fgie-report-location-wise.module").then(
                m => m.FGIEReportLocationWiseModule
            )
    },
    {
        path: "FG_inventory_all_location",
        loadChildren: () =>
            import("./../../production/reports/fg-inventory-all-location/fg-inventory-all-location.module").then(
                m => m.FGInventoryAllLocationModule
            )
    },
    {
        path: "sales_forecast",
        loadChildren: () => import("./sales-forecast/sales-forecast.module").then(m => m.SalesForecastModule)
    },
    {
        path: "sales_order_report",
        loadChildren: () => import("./sales-order-report/sales-order-report.module").then(m => m.SalesOrderReportModule)
    },
    {
        path: "sales_debit_note_report",
        loadChildren: () =>
            import("./sales-debit-note-report/sales-debit-note-report.module").then(m => m.SalesDebitNoteReportModule)
    },
    {
        path: "quotation-sku-report",
        loadChildren: () =>
            import("./quotation-sku-report/quotation-sku-report.module").then(m => m.QuotationSkuReportModule)
    },
    {
        path: "sales_order_status_report",
        loadChildren: () => import("./sales-order-status/sales-order-status.module").then(m => m.SalesOrderStatusModule)
    },
    {
        path: "dispatch_list",
        loadChildren: () => import("./dispatch-list/dispatch-list.module").then(m => m.DispatchListModule)
    },
    {
        path: "fg_inventory_report",
        loadChildren: () =>
            import("./../../production/reports/fg-inventory-report/fg-inventory-report.module").then(
                m => m.FgInventoryReportModule
            )
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
})
export class ReportsModule {}
