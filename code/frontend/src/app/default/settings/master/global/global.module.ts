import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GlobalComponent} from "./global.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: GlobalComponent},
    {
        path: "company",
        loadChildren: () => import("./company/company.module").then(m => m.CompanyModule)
    },
    {
        path: "department_master",
        loadChildren: () => import("./department-master/department-master.module").then(m => m.DepartmentMasterModule)
    },
    {
        path: "uom_master",
        loadChildren: () => import("./uom-master/uom-master.module").then(m => m.UomMasterModule)
    },
    {
        path: "qms_mapping",
        loadChildren: () => import("./qms-mapping/qms-mapping.module").then(m => m.QmsMappingModule)
    },
    {
        path: "currency_master",
        loadChildren: () => import("./currency-master/currency-master.module").then(m => m.CurrencyMasterModule)
    }
];

@NgModule({
    declarations: [GlobalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GlobalModule {}
