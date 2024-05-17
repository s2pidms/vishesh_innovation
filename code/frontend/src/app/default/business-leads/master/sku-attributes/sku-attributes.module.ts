import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SKUAttributesComponent} from "./sku-attributes.component";

const routes: Routes = [
    {path: "tab_list", component: SKUAttributesComponent},
    {
        path: "sku_attribute_tracking",
        loadChildren: () =>
            import("./../../../planning/master/sku-attribute-tracking/sku-attribute-tracking.module").then(
                m => m.SkuAttributeTrackingModule
            )
    },
    {
        path: "sku_dimension_master",
        loadChildren: () =>
            import("./../../../planning/master/sku-dimension-master/sku-dimension-master.module").then(
                m => m.SkuDimensionMasterModule
            )
    },
    {
        path: "sku_material_master",
        loadChildren: () =>
            import("./../../../planning/master/sku-material-master/sku-material-master.module").then(
                m => m.SkuMaterialMasterModule
            )
    },
    {
        path: "sku_ink_master",
        loadChildren: () =>
            import("./../../../planning/master/sku-ink-master/sku-ink-master.module").then(m => m.SkuInkMasterModule)
    }
];

@NgModule({
    declarations: [SKUAttributesComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SKUAttributesModule {}
