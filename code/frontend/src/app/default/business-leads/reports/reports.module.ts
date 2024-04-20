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
                path: "lead_summary",
                loadChildren: () => import("./lead-summary/lead-summary.module").then(m => m.LeadSummaryModule)
            },
            {
                path: "lead_conversion",
                loadChildren: () => import("./lead-conversion/lead-conversion.module").then(m => m.LeadConversionModule)
            },
            {
                path: "opportunity_pipeline",
                loadChildren: () =>
                    import("./opportunity-pipeline/opportunity-pipeline.module").then(m => m.OpportunityPipelineModule)
            },
            {
                path: "salesperson_performance",
                loadChildren: () =>
                    import("./salesperson-performance/salesperson-performance.module").then(
                        m => m.SalespersonPerformanceModule
                    )
            },
            {
                path: "lead_aging",
                loadChildren: () => import("./lead-aging/lead-aging.module").then(m => m.LeadAgingModule)
            },
            {
                path: "opportunity_forecast",
                loadChildren: () =>
                    import("./opportunity-forecast/opportunity-forecast.module").then(m => m.OpportunityForecastModule)
            },
            {
                path: "win-loss_analysis",
                loadChildren: () =>
                    import("./win-loss-analysis/win-loss-analysis.module").then(m => m.WinLossAnalysisModule)
            },
            {
                path: "lead_response_time",
                loadChildren: () =>
                    import("./lead-response-time/lead-response-time.module").then(m => m.LeadResponseTimeModule)
            },
            {
                path: "activity",
                loadChildren: () => import("./activity/activity.module").then(m => m.ActivityModule)
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            },
            {
                path: "npd_status",
                loadChildren: () => import("./npd-status/npd-status.module").then(m => m.NpdStatusModule)
            },
            {
                path: "npd_lost_order_analysis",
                loadChildren: () =>
                    import("./npd-lost-order-analysis/npd-lost-order-analysis.module").then(
                        m => m.NpdLostOrderAnalysisModule
                    )
            },
            {
                path: "pending_D-SKU_conversion",
                loadChildren: () =>
                    import("./pending-d-sku-conversion/pending-d-sku-conversion.module").then(
                        m => m.PendingDSKUConversionModule
                    )
            },
            {
                path: "D-SKU_to_SKU_conversion",
                loadChildren: () =>
                    import("./d-sku-to-sku-conversion/d-sku-to-sku-conversion.module").then(
                        m => m.DSKUToSKUConversionModule
                    )
            },
            {
                path: "dsku_cost_sheet",
                loadChildren: () => import("./dsku-cost-sheet/dsku-cost-sheet.module").then(m => m.DskuCostSheetModule)
            },
            {
                path: "sample_request_report",
                loadChildren: () =>
                    import("./sample-request-report/sample-request-report.module").then(
                        m => m.SampleRequestReportModule
                    )
            },
            {
                path: "sample_jc_creation_report",
                loadChildren: () =>
                    import("./sample-jc-creation-report/sample-jc-creation-report.module").then(
                        m => m.SampleJcCreationReportModule
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
