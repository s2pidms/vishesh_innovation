import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./master.component";

const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {path: "", redirectTo: "user", pathMatch: "full"},

            {
                path: "global",
                loadChildren: () => import("./global/global.module").then(m => m.GlobalModule)
            },
            {
                path: "security_master",
                loadChildren: () => import("./security-master/security-master.module").then(m => m.SecurityMasterModule)
            },
            {
                path: "sales",
                loadChildren: () => import("./sales/sales.module").then(m => m.SalesModule)
            },
            {
                path: "purchase",
                loadChildren: () => import("./purchase/purchase.module").then(m => m.PurchaseModule)
            },
            {
                path: "hr",
                loadChildren: () => import("./hr/hr.module").then(m => m.HrModule)
            }, 
            {
                path: "production",
                loadChildren: () => import("./production/production.module").then(m => m.ProductionModule)
            },
            {
                path: "quality_master",
                loadChildren: () => import("./quality-master/quality-master.module").then(m => m.QualityMasterModule)
            },
            {
                path: "label_master",
                loadChildren: () => import("./label-master/label-master.module").then(m => m.LabelMasterModule)
            },
            {
                path: "maintenance_master",
                loadChildren: () =>
                    import("./maintenance-master/maintenance-master.module").then(m => m.MaintenanceMasterModule)
            },
            {
                path: "module_master",
                loadChildren: () => import("./module-master/module-master.module").then(m => m.ModuleMasterModule)
            },
            {
                path: "setting_master",
                loadChildren: () => import("./setting-master/setting-master.module").then(m => m.SettingMasterModule)
            },
            {
                path: "finance_master",
                loadChildren: () => import("./finance-master/finance-master.module").then(m => m.FinanceMasterModule)
            },
            {
                path: "accounts_master",
                loadChildren: () => import("./accounts-master/accounts-master.module").then(m => m.AccountsMasterModule)
            },
            {
                path: "planning",
                loadChildren: () => import("./planning/planning.module").then(m => m.PlanningModule)
            },
            {
                path: "business_lead_master",
                loadChildren: () =>
                    import("./business-lead-master/business-lead-master.module").then(m => m.BusinessLeadMasterModule)
            },
            {
                path: "support",
                loadChildren: () => import("./support/support.module").then(m => m.SupportModule)
            },
            {
                path: "upload_data",
                loadChildren: () => import("./upload-data/upload-data.module").then(m => m.UploadDataModule)
            }, 
            {
                path: "uom_units_master",
                loadChildren: () =>
                    import("./uom-units-master/uom-units-master.module").then(m => m.UOMUnitsMasterModule)
            }
        ]
    }
];
@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
