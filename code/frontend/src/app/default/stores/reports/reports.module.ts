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
                path: "inventory_report",
                loadChildren: () =>
                    import("./../../purchase/reports/inventory-report/inventory-report.module").then(
                        m => m.InventoryReportModule
                    )
            },
            {
                path: "FGINR",
                loadChildren: () => import("./fginr/fginr.module").then(m => m.FGINRModule)
            },
            {
                path: "Goods_Receipt_Note_Discrepancy",
                loadChildren: () =>
                    import("./goods-receipt-note-discrepancy/goods-receipt-note-discrepancy.module").then(
                        m => m.GoodsReceiptNoteDiscrepancyModule
                    )
            },
            {
                path: "Inwarded_Value_Analysis",
                loadChildren: () =>
                    import("./inwarded-value-analysis/inwarded-value-analysis.module").then(
                        m => m.InwardedValueAnalysisModule
                    )
            },
            {
                path: "goods_inward_entry",
                loadChildren: () =>
                    import("./goods-inward-entry/goods-inward-entry.module").then(m => m.GoodsInwardEntryModule)
            },
            {
                path: "reorder_levelR",
                loadChildren: () => import("./reorder-level/reorder-level.module").then(m => m.ReorderLevelModule)
            },
            {
                path: "stock_agingR",
                loadChildren: () => import("./stock-aging/stock-aging.module").then(m => m.StockAgingModule)
            },
            {
                path: "grn_report_item_wise",
                loadChildren: () =>
                    import("./grn-report-item-wise/grn-report-item-wise.module").then(m => m.GrnReportItemWiseModule)
            },
            {
                path: "gi_report",
                loadChildren: () => import("./gi-report/gi-report.module").then(m => m.GiReportModule)
            },
            {
                path: "grn_location_wise",
                loadChildren: () =>
                    import("./grn-location-wise/grn-location-wise.module").then(m => m.GrnLocationWiseModule)
            },
            {
                path: "inventory_location_wise",
                loadChildren: () =>
                    import("./inventory-location-wise/inventory-location-wise.module").then(
                        m => m.InventoryLocationWiseModule
                    )
            },
            {
                path: "raw_material_inspection",
                loadChildren: () =>
                    import("./../../quality/reports/raw-material-inspection/raw-material-inspection.module").then(
                        m => m.RawMaterialInspectionModule
                    )
            },
            {path: "GRN_report", loadChildren: () => import("./grn/grn.module").then(m => m.GRNModule)},
            {
                path: "gt_request_fulfillment_status",
                loadChildren: () =>
                    import(
                        "./../../production/reports/gt-request-fulfillment-status/gt-request-fulfillment-status.module"
                    ).then(m => m.GtRequestFulfillmentStatusModule)
            },
            {
                path: "fg_inward_entry_summary",
                loadChildren: () =>
                    import("./../../production/reports/fg-inward-entry-summary/fg-inward-entry-summary.module").then(
                        m => m.FgInwardEntrySummaryModule
                    )
            },
            {
                path: "FG_inventory_all_location",
                loadChildren: () =>
                    import(
                        "./../../production/reports/fg-inventory-all-location/fg-inventory-all-location.module"
                    ).then(m => m.FGInventoryAllLocationModule)
            },
            {
                path: "purchase_order",
                loadChildren: () =>
                    import("./../../purchase/reports/purchase-order/purchase-order.module").then(
                        m => m.PurchaseOrderModule
                    )
            },
            {
                path: "MRN_report",
                loadChildren: () => import("./../../quality/reports/mrn/mrn.module").then(m => m.MRNModule)
            }
        ]
    }
];
@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
