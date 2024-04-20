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
                path: "ppic_rm_stock",
                loadChildren: () => import("./ppic-rm-stock/ppic-rm-stock.module").then(m => m.PpicRmStockModule)
            },
            {
                path: "ppic_sfg_stock",
                loadChildren: () => import("./ppic-sfg-stock/ppic-sfg-stock.module").then(m => m.PpicSfgStockModule)
            },
            {
                path: "ppic_stock_issue",
                loadChildren: () =>
                    import("./ppic-stock-issue/ppic-stock-issue.module").then(m => m.PpicStockIssueModule)
            },
            {
                path: "stock_transfer_report",
                loadChildren: () =>
                    import("./stock-transfer-report/stock-transfer-report.module").then(
                        m => m.StockTransferReportModule
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
                path: "FGIE_report_locationWise",
                loadChildren: () =>
                    import(
                        "./../../production/reports/fgie-report-location-wise/fgie-report-location-wise.module"
                    ).then(m => m.FGIEReportLocationWiseModule)
            },
            {
                path: "FG_inventory_all_location",
                loadChildren: () =>
                    import(
                        "./../../production/reports/fg-inventory-all-location/fg-inventory-all-location.module"
                    ).then(m => m.FGInventoryAllLocationModule)
            },
            {
                path: "sales_forecast",
                loadChildren: () =>
                    import("./../../sales/reports/sales-forecast/sales-forecast.module").then(
                        m => m.SalesForecastModule
                    )
            },
            {
                path: "cost_sheet",
                loadChildren: () => import("./cost-sheet/cost-sheet.module").then(m => m.CostSheetModule)
            },
            {
                path: "job_card",
                loadChildren: () => import("./job-card/job-card.module").then(m => m.JobCardModule)
            },
            {
                path: "gt_request_fulfillment_status",
                loadChildren: () =>
                    import(
                        "./../../production/reports/gt-request-fulfillment-status/gt-request-fulfillment-status.module"
                    ).then(m => m.GtRequestFulfillmentStatusModule)
            },
            {
                path: "inventory_report",
                loadChildren: () =>
                    import("./../../purchase/reports/inventory-report/inventory-report.module").then(
                        m => m.InventoryReportModule
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
