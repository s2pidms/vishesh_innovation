import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProductCategorySpecificationsFormComponent} from "./screens/product-category-specifications-form/product-category-specifications-form.component";
import {ProductCategorySpecificationsListComponent} from "./screens/product-category-specifications-list/product-category-specifications-list.component";
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ProductCategorySpecificationsListComponent},
    {path: "form", component: ProductCategorySpecificationsFormComponent}
];

@NgModule({
    declarations: [ProductCategorySpecificationsFormComponent, ProductCategorySpecificationsListComponent],
    imports: [CommonModule,SharedModule, RouterModule.forChild(routes)]
})
export class ProductCategorySpecificationsModule {}
