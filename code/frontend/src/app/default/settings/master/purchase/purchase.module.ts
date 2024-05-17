import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseComponent} from "./purchase.component";

const routes: Routes = [
    {path: "tab_list", component: PurchaseComponent},
    {
        path: "item-category",
        loadChildren: () => import("./item-category/item-category.module").then(m => m.ItemCategoryModule)
    },
    {
        path: "esp_category",
        loadChildren: () => import("./esp-category/esp-category.module").then(m => m.ESPCategoryModule)
    },
    {
        path: "purchase_category",
        loadChildren: () => import("./purchase-category/purchase-category.module").then(m => m.PurchaseCategoryModule)
    },
    {
        path: "service_charges",
        loadChildren: () => import("./service-charges/service-charges.module").then(m => m.ServiceChargesModule)
    }
];

@NgModule({
    declarations: [PurchaseComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PurchaseModule {}
