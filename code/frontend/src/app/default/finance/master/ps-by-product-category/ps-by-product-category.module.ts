import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PSByProductCategoryListComponent} from "./screens/ps-by-product-category-list/ps-by-product-category-list.component";
import {PSByProductCategoryFormComponent} from "./screens/ps-by-product-category-form/ps-by-product-category-form.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: PSByProductCategoryListComponent},
    {path: "form", component: PSByProductCategoryFormComponent}
];

@NgModule({
    declarations: [PSByProductCategoryListComponent, PSByProductCategoryFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PSByProductCategoryModule {}
