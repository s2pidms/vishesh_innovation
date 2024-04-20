import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseRegisterEntryComponent} from "./purchase-register-entry.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: PurchaseRegisterEntryComponent}];

@NgModule({
    declarations: [PurchaseRegisterEntryComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseRegisterEntryModule {}
