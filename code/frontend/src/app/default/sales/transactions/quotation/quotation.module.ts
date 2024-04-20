import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {QuotationComponent} from "./quotation.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: QuotationComponent},
    {
        path: "quotation_of_sku",
        loadChildren: () =>
            import("./screens/quotation-of-sku/quotation-of-sku.module").then(m => m.QuotationOfSkuModule)
    },
    {
        path: "quotation_of_dsku",
        loadChildren: () =>
            import("./screens/quotation-of-dsku/quotation-of-dsku.module").then(m => m.QuotationOfDskuModule)
    }
];

@NgModule({
    declarations: [QuotationComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class QuotationModule {}
