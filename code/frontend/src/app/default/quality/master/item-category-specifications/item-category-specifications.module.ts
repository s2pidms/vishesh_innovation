import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ItemCategorySpecificationsFormComponent} from "./screens/item-category-specifications-form/item-category-specifications-form.component";
import {ItemCategorySpecificationsListComponent} from "./screens/item-category-specifications-list/item-category-specifications-list.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ItemCategorySpecificationsListComponent},
    {path: "form", component: ItemCategorySpecificationsFormComponent}
];

@NgModule({
    declarations: [ItemCategorySpecificationsFormComponent, ItemCategorySpecificationsListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ItemCategorySpecificationsModule {}
