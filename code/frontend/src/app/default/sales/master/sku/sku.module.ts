import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {UnsavedChangesGuard} from "@core/guards";
import {SKUListComponent} from "./screens/sku-list/sku-list.component";
import {SKUFormComponent} from "./screens/sku-form/sku-form.component";
import {
    AddInkDetailsComponent,
    BomDimComponent,
    ChildPartInfoModalComponent,
    CostSheetComponent,
    OfftakeComponent,
    ProductCategoryModalComponent,
    SKUCustomerInjectionMoldingComponent,
    SKUMouldsIDModalComponent,
    SKUPackingStdModalComponent,
    SKUSpecsModalComponent,
    SkuAttributesComponent,
    SkuDimensionsComponent,
    SkuDrawingComponent,
    SkuGenSpecsComponent,
    SkuMaterialComponent,
    SkuOtherInfoComponent,
    SkuSpecificationComponent,
    SkuStorageComponent,
    ToolInfoModalComponent
} from "./screens/components";

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
