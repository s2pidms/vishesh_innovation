import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {SKUListComponent} from "./screens/sku-list/sku-list.component";
import {SKUFormComponent} from "./screens/sku-form/sku-form.component";
import {SharedModule} from "../../../../shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {AddInkDetailsComponent} from "./screens/add-ink-details/add-ink-details.component";
import {SkuDimensionsComponent} from "./screens/sku-dimensions/sku-dimensions.component";
import {SkuOtherInfoComponent} from "./screens/sku-other-info/sku-other-info.component";
import {SkuMaterialComponent} from "./screens/sku-material/sku-material.component";
import {SkuAttributesComponent} from "./screens/sku-attributes/sku-attributes.component";
import {SkuSpecificationComponent} from "./screens/sku-specification/sku-specification.component";
import {SkuDrawingComponent} from "./screens/sku-drawing/sku-drawing.component";
import {SkuGenSpecsComponent} from "./screens/sku-gen-specs/sku-gen-specs.component";
import {SkuStorageComponent} from "./screens/sku-storage/sku-storage.component";
import {CostSheetComponent} from "./screens/cost-sheet/cost-sheet.component";
import {BomDimComponent} from "./screens/bom-dim/bom-dim.component";
import {OfftakeComponent} from "./screens/offtake/offtake.component";
import {ProductCategoryModalComponent} from "./screens/product-category-modal/product-category-modal.component";
import {ToolInfoModalComponent} from "./screens/tool-info-modal/tool-info-modal.component";
import {UnsavedChangesGuard} from "../../../../core/guards";
import {ChildPartInfoModalComponent} from "./screens/child-part-info-modal/child-part-info-modal.component";
import {SKUSpecsModalComponent} from "./screens/sku-specs-modal/sku-specs-modal.component";
import {SKUPackingStdModalComponent} from "./screens/sku-packing-std-modal/sku-packing-std-modal.component";
import {SKUMouldsIDModalComponent} from "./screens/sku-moulds-id-modal/sku-moulds-id-modal.component";
import {SKUCustomerInjectionMoldingComponent} from "./screens/sku-customer-injection-molding/sku-customer-injection-molding.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SKUListComponent},
    {
        path: "form",
        component: SKUFormComponent,
        resolve: {accessScreen: FormScreenResolver},
        canDeactivate: [UnsavedChangesGuard]
    }
];

@NgModule({
    declarations: [
        SKUListComponent,
        SKUFormComponent,
        AddInkDetailsComponent,
        SkuDimensionsComponent,
        SkuOtherInfoComponent,
        SkuMaterialComponent,
        SkuAttributesComponent,
        SkuSpecificationComponent,
        SkuDrawingComponent,
        SkuGenSpecsComponent,
        SkuStorageComponent,
        CostSheetComponent,
        BomDimComponent,
        OfftakeComponent,
        ProductCategoryModalComponent,
        ToolInfoModalComponent,
        ChildPartInfoModalComponent,
        SKUSpecsModalComponent,
        SKUPackingStdModalComponent,
        SKUMouldsIDModalComponent,
        SKUCustomerInjectionMoldingComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SKUModule {}
