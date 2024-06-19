import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ItemWiseInventoryComponent} from "./item-wise-inventory.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: ItemWiseInventoryComponent}];

@NgModule({
    declarations: [ItemWiseInventoryComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ItemWiseInventoryModule {}
