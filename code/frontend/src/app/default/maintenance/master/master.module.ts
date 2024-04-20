import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {MasterComponent} from "./master.component";
const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {
                path: "maintenance_task",
                loadChildren: () =>
                    import("./maintenance-task/maintenance-task.module").then(m => m.MaintenanceTaskModule)
            },
            {
                path: "maintenance_technician",
                loadChildren: () =>
                    import("./maintenance-technician/maintenance-technician.module").then(
                        m => m.MaintenanceTechnicianModule
                    )
            },
            {
                path: "maintenance_checklist",
                loadChildren: () =>
                    import("./maintenance-checklist/maintenance-checklist.module").then(
                        m => m.MaintenanceChecklistModule
                    )
            },
            {
                path: "maintenance_warranty",
                loadChildren: () =>
                    import("./maintenance-warranty/maintenance-warranty.module").then(m => m.MaintenanceWarrantyModule)
            },
            {
                path: "maintenance_metrics",
                loadChildren: () =>
                    import("./maintenance-metrics/maintenance-metrics.module").then(m => m.MaintenanceMetricsModule)
            },
            {
                path: "quality_equipment",
                loadChildren: () =>
                    import("./quality-equipment/quality-equipment.module").then(m => m.QualityEquipmentModule)
            },
            {
                path: "calibration_standard",
                loadChildren: () =>
                    import("./calibration-standard/calibration-standard.module").then(m => m.CalibrationStandardModule)
            },
            {
                path: "asset_master",
                loadChildren: () =>
                    import("../../finance/master/asset-master/asset-master.module").then(m => m.AssetMasterModule)
            }
        ]
    }
];

@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
