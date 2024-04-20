import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {SalesRegisterWOTaxComponent} from "./sales-register-wo-tax.component";

const routes: Routes = [{path: "", component: SalesRegisterWOTaxComponent}];

@NgModule({
    declarations: [SalesRegisterWOTaxComponent],
    imports: [SharedModule, RouterModule.forChild(routes)]
})
export class SalesRegisterWOTaxModule {}
