import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {CurrencyMasterListComponent} from "./screens/currency-master-list/currency-master-list.component";
import {CurrencyMasterFormComponent} from "./screens/currency-master-form/currency-master-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: CurrencyMasterListComponent},
    {
        path: "form",
        component: CurrencyMasterFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [CurrencyMasterListComponent, CurrencyMasterFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CurrencyMasterModule {}
