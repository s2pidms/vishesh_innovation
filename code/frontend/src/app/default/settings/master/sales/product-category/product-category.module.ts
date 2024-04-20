import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ProductCategoryListComponent} from "./screens/product-category-list/product-category-list.component";
import {ProductCategoryFormComponent} from "./screens/product-category-form/product-category-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ProductCategoryListComponent},
    {
        path: "form",
        component: ProductCategoryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ProductCategoryListComponent, ProductCategoryFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProductCategoryModule {}
