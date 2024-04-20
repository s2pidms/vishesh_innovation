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
                path: "shipment-report",
                loadChildren: () => import("./shipment-report/shipment-report.module").then(m => m.ShipmentReportModule)
            },
            {
                path: "shipment-details",
                loadChildren: () =>
                    import("./shipment-details/shipment-details.module").then(m => m.ShipmentDetailsModule)
            },
            {
                path: "shipment-summary",
                loadChildren: () =>
                    import("./shipment-summary/shipment-summary.module").then(m => m.ShipmentSummaryModule)
            },
            {
                path: "tax-invoice-summary",
                loadChildren: () =>
                    import("./tax-invoice-summary/tax-invoice-summary.module").then(m => m.TaxInvoiceSummaryModule)
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            },
            {
                path: "sales_register_wo_tax",
                loadChildren: () =>
                    import("./../../sales/reports/sales-register-wo-tax/sales-register-wo-tax.module").then(
                        m => m.SalesRegisterWOTaxModule
                    )
            },
            {
                path: "fg_inward_entry_summary",
                loadChildren: () =>
                    import("./../../production/reports/fg-inward-entry-summary/fg-inward-entry-summary.module").then(
                        m => m.FgInwardEntrySummaryModule
                    )
            },
            {
                path: "asn_report",
                loadChildren: () => import("./asn-report/asn-report.module").then(m => m.AsnReportModule)
            },
            {
                path: "drn_summary",
                loadChildren: () => import("./drn-summary/drn-summary.module").then(m => m.DRNSummaryModule)
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
