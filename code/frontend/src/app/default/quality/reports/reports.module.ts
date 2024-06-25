import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReportsComponent} from "./reports.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "",
        component: ReportsComponent,
        children: [
            {
                path: "mrn_report_item_wise",
                loadChildren: () =>
                    import("./mrn-report-item-wise/mrn-report-item-wise.module").then(m => m.MrnReportItemWiseModule)
            },
            {
                path: "gr_fulfillment_status_report",
                loadChildren: () =>
                    import("./../../production/reports/gr-fulfillment-status/gr-fulfillment-status.module").then(
                        m => m.GrFulfillmentStatusModule
                    )
            },
            {
                path: "pdi_report",
                loadChildren: () => import("./pdi-report/pdi-report.module").then(m => m.PDIReportReportModule)
            },
            {
                path: "raw_material_inspection",
                loadChildren: () =>
                    import("./raw-material-inspection/raw-material-inspection.module").then(
                        m => m.RawMaterialInspectionModule
                    )
            },
            {
                path: "supplier-evaluationR",
                loadChildren: () =>
                    import("./../../purchase/reports/supplier-evaluation-r/supplier-evaluation-r.module").then(
                        m => m.SupplierEvaluationRModule
                    )
            },
            {path: "MRN_report", loadChildren: () => import("./mrn/mrn.module").then(m => m.MRNModule)},
            {
                path: "sales_register_wo_tax",
                loadChildren: () =>
                    import("./../../sales/reports/sales-register-wo-tax/sales-register-wo-tax.module").then(
                        m => m.SalesRegisterWOTaxModule
                    )
            },
            {
                path: "MRN_details_report",
                loadChildren: () => import("./mrn-details/mrn-details.module").then(m => m.MRNDetailsModule)
            }
        ]
    }
];
@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ReportsModule {}
