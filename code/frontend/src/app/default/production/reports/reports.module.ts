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
                path: "goods_requisition_summary",
                loadChildren: () =>
                    import("./goods-requisition-summary/goods-requisition-summary.module").then(
                        m => m.GoodsRequisitionSummaryModule
                    )
            },
            {
                path: "fg_inward_entry_summary",
                loadChildren: () =>
                    import("./fg-inward-entry-summary/fg-inward-entry-summary.module").then(
                        m => m.FgInwardEntrySummaryModule
                    )
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            },
            {
                path: "back_order_sku",
                loadChildren: () =>
                    import("./../../sales/reports/back-order-sku/back-order-sku.module").then(m => m.BackOrderSKUModule)
            },
            {
                path: "back_order_so",
                loadChildren: () =>
                    import("./../../sales/reports/back-order-so/back-order-so.module").then(m => m.BackOrderSOModule)
            },
            {
                path: "fg_correction_history",
                loadChildren: () =>
                    import("./fg-correction-history/fg-correction-history.module").then(
                        m => m.FGCorrectionHistoryReportModule
                    )
            },
            {
                path: "FGIE_report_locationWise",
                loadChildren: () =>
                    import("./fgie-report-location-wise/fgie-report-location-wise.module").then(
                        m => m.FGIEReportLocationWiseModule
                    )
            },
            {
                path: "FG_inventory_all_location",
                loadChildren: () =>
                    import("./fg-inventory-all-location/fg-inventory-all-location.module").then(
                        m => m.FGInventoryAllLocationModule
                    )
            },
            {
                path: "sales_forecast",
                loadChildren: () =>
                    import("./../../sales/reports/sales-forecast/sales-forecast.module").then(
                        m => m.SalesForecastModule
                    )
            },
            {
                path: "sales_order_status_report",
                loadChildren: () =>
                    import("./../../sales/reports/sales-order-status/sales-order-status.module").then(
                        m => m.SalesOrderStatusModule
                    )
            },
            {
                path: "sales_order_report",
                loadChildren: () =>
                    import("./../../sales/reports/sales-order-report/sales-order-report.module").then(
                        m => m.SalesOrderReportModule
                    )
            },
            {
                path: "gt_request_fulfillment_status",
                loadChildren: () =>
                    import("./gt-request-fulfillment-status/gt-request-fulfillment-status.module").then(
                        m => m.GtRequestFulfillmentStatusModule
                    )
            },
            {
                path: "drn_summary",
                loadChildren: () =>
                    import("./../../dispatch/reports/drn-summary/drn-summary.module").then(m => m.DRNSummaryModule)
            },
            {
                path: "inventory_report",
                loadChildren: () =>
                    import("./../../purchase/reports/inventory-report/inventory-report.module").then(
                        m => m.InventoryReportModule
                    )
            },
            {
                path: "fg_inventory_report",
                loadChildren: () =>
                    import("./fg-inventory-report/fg-inventory-report.module").then(m => m.FgInventoryReportModule)
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
