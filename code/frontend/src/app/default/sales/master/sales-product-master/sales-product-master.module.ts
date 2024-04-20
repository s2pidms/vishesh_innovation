import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesProductMasterFormComponent} from "./screens/sales-product-master-form/sales-product-master-form.component";
import {SalesProductMasterListComponent} from "./screens/sales-product-master-list/sales-product-master-list.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {MouldInfoModalComponent} from "./screens/mould-info-modal/mould-info-modal.component";
import {ProductPackingStdModalComponent} from "./screens/product-packing-std-modal/product-packing-std-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SalesProductMasterListComponent},
    {
        path: "form",
        component: SalesProductMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        SalesProductMasterListComponent,
        SalesProductMasterFormComponent,
        MouldInfoModalComponent,
        ProductPackingStdModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesProductMasterModule {}
