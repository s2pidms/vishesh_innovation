import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {BillOfMaterialComponent} from "./bill-of-material.component";
import {BomDocumentRevisionHistoryComponent} from "./screens/bom-document-revision-history/bom-document-revision-history.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: BillOfMaterialComponent},
    {
        path: "bom_of_sku",
        loadChildren: () => import("./screens/bom-of-sku/bom-of-sku.module").then(m => m.BomOfSkuModule)
    },
    {
        path: "bom_of_child_item",
        loadChildren: () =>
            import("./screens/bom-of-child-item/bom-of-child-item.module").then(m => m.BomOfChildItemModule)
    },
    {
        path: "bom_of_gr_child_item",
        loadChildren: () =>
            import("./screens/bom-of-gr-child-item/bom-of-gr-child-item.module").then(m => m.BomOfGrChildItemModule)
    },
    {
        path: "bom_of_product",
        loadChildren: () => import("./screens/bom-of-product/bom-of-product.module").then(m => m.BomOfProductModule)
    },
    {
        path: "bom_of_job_work_item",
        loadChildren: () =>
            import("./screens/bom-of-job-work-item/bom-of-job-work-item.module").then(m => m.BomOfJobWorkItemModule)
    }
];

@NgModule({
    declarations: [BillOfMaterialComponent, BomDocumentRevisionHistoryComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class BillOfMaterialModule {}
