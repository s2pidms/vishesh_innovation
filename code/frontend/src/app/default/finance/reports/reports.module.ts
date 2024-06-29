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
                path: "FG_inventory_value",
                loadChildren: () =>
                    import("./fg-inventory-value/fg-inventory-value.module").then(m => m.FGInventoryValueModule)
            },
            {
                path: "cost_sheet",
                loadChildren: () =>
                    import("../../planning/reports/cost-sheet/cost-sheet.module").then(m => m.CostSheetModule)
            },
            {
                path: "fg_inventory_report",
                loadChildren: () =>
                    import("./../../production/reports/fg-inventory-report/fg-inventory-report.module").then(
                        m => m.FgInventoryReportModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [ReportsComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ReportsModule {}
