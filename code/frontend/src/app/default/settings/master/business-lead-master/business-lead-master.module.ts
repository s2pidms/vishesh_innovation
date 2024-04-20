import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {BusinessLeadMasterComponent} from "./business-lead-master.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: BusinessLeadMasterComponent},
    {
        path: "questioniers",
        loadChildren: () => import("./questioniers/questioniers.module").then(m => m.QuestioniersModule)
    },
    {
        path: "checklist_particulars",
        loadChildren: () =>
            import("./checklist-particulars/checklist-particulars.module").then(m => m.ChecklistParticularsModule)
    },
    {
        path: "cost_sheet_components",
        loadChildren: () =>
            import("./cost-sheet-components/cost-sheet-components.module").then(m => m.CostSheetComponentsModule)
    },
    {
        path: "d_sku_attributes",
        loadChildren: () => import("./d-sku-attributes/d-sku-attributes.module").then(m => m.DSkuAttributesModule)
    }
];

@NgModule({
    declarations: [BusinessLeadMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class BusinessLeadMasterModule {}
