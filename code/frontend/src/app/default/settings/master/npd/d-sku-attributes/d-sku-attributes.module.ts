import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DSkuFormComponent} from "./screens/d-sku-form/d-sku-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "form",
        component: DSkuFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [DSkuFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DSkuAttributesModule {}
