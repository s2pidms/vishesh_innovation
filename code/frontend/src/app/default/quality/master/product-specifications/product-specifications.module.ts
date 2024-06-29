import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProductSpecificationsFormComponent} from "./screens/product-specifications-form/product-specifications-form.component";
import {ProductSpecificationsListComponent} from "./screens/product-specifications-list/product-specifications-list.component";
import {SharedModule} from "@shared/shared.module";
import {ViewItemModalComponent} from "./screens/components/view-item-modal/view-item-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ProductSpecificationsListComponent},
    {path: "form", component: ProductSpecificationsFormComponent}
];

@NgModule({
    declarations: [ProductSpecificationsFormComponent, ProductSpecificationsListComponent, ViewItemModalComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ProductSpecificationsModule {}
