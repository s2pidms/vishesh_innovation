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
                path: "purchase_order",
                loadChildren: () => import("./purchase-order/purchase-order.module").then(m => m.PurchaseOrderModule)
            },
            {
                path: "service_purchase_order",
                loadChildren: () =>
                    import("./service-purchase-order/service-purchase-order.module").then(
                        m => m.ServicePurchaseOrderModule
                    )
            },
            {
                path: "PPV",
                loadChildren: () => import("./ppv/ppv.module").then(m => m.PPVModule)
            },
            {
                path: "debit-note",
                loadChildren: () => import("./debit-note/debit-note.module").then(m => m.DebitNoteModule)
            },
            {
                path: "purchase_order_summary_report",
                loadChildren: () =>
                    import("./purchase-order-summary-report/purchase-order-summary-report.module").then(
                        m => m.PurchaseOrderSummaryReportModule
                    )
            },
            {
                path: "purchase_cost_analysis",
                loadChildren: () =>
                    import("./purchase-cost-analysis/purchase-cost-analysis.module").then(
                        m => m.PurchaseCostAnalysisModule
                    )
            },
            {
                path: "debit_note_summary",
                loadChildren: () =>
                    import("./debit-note-summary/debit-note-summary.module").then(m => m.DebitNoteSummaryModule)
            },
            {
                path: "PPV_details",
                loadChildren: () => import("./ppv-details/ppv-details.module").then(m => m.PPVDetailsModule)
            },
            {
                path: "inventory_report",
                loadChildren: () =>
                    import("./inventory-report/inventory-report.module").then(m => m.InventoryReportModule)
            },
            {
                path: "purchase_vs_invoice",
                loadChildren: () =>
                    import("./purchase-vs-invoice/purchase-vs-invoice.module").then(m => m.PurchaseVsInvoiceModule)
            },
            {
                path: "supplier-evaluationR",
                loadChildren: () =>
                    import("./supplier-evaluation-r/supplier-evaluation-r.module").then(
                        m => m.SupplierEvaluationRModule
                    )
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            },
            {
                path: "outstanding_po",
                loadChildren: () => import("./outstanding-po/outstanding-po.module").then(m => m.OutstandingPoModule)
            },
            {
                path: "sales_forecast",
                loadChildren: () =>
                    import("./../../sales/reports/sales-forecast/sales-forecast.module").then(
                        m => m.SalesForecastModule
                    )
            },
            {
                path: "purchase_rate_analysis",
                loadChildren: () =>
                    import("./purchase-rate-analysis/purchase-rate-analysis.module").then(
                        m => m.PurchaseRateAnalysisModule
                    )
            },
            {
                path: "item_consumption",
                loadChildren: () =>
                    import("./item-consumption/item-consumption.module").then(m => m.ItemConsumptionModule)
            },
            {
                path: "purchase_indent",
                loadChildren: () => import("./purchase-indent/purchase-indent.module").then(m => m.PurchaseIndentModule)
            },
            {
                path: "reorder_levelR",
                loadChildren: () =>
                    import("./../../stores/reports/reorder-level/reorder-level.module").then(m => m.ReorderLevelModule)
            },
            {
                path: "job_work_challan",
                loadChildren: () =>
                    import("./job-work-challan/job-work-challan.module").then(m => m.JobWorkChallanModule)
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
