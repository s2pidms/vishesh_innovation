import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesComponent} from "./sales.component";

const routes: Routes = [
    {path: "tab_list", component: SalesComponent},
    {
        path: "sku_category",
        loadChildren: () => import("./sku-category/sku-category.module").then(m => m.SkuCategoryModule)
    },
    {
        path: "sku_attributes",
        loadChildren: () => import("./sku-attributes/sku-attributes.module").then(m => m.SkuAttributesModule)
    },
    {
        path: "product_category",
        loadChildren: () => import("./product-category/product-category.module").then(m => m.ProductCategoryModule)
    },
    {
        path: "invoice_QR_Code",
        loadChildren: () => import("./invoice-qr-code/invoice-qr-code.module").then(m => m.InvoiceQRCodeModule)
    }
];

@NgModule({
    declarations: [SalesComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SalesModule {}
