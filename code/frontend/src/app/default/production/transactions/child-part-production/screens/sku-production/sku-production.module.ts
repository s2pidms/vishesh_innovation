import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuProductionListComponent} from "./sku-production-list/sku-production-list.component";
import {SkuProductionFormComponent} from "./sku-production-form/sku-production-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";

const routes: Routes = [
    {path: "list", component: SkuProductionListComponent},
    {
        path: "form",
        component: SkuProductionFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SkuProductionListComponent, SkuProductionFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SkuProductionModule {}
