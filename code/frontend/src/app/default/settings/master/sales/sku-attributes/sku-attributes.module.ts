import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SkuAttributesFormComponent} from "./screens/sku-attributes-form/sku-attributes-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "form",
        component: SkuAttributesFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SkuAttributesFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SkuAttributesModule {}
