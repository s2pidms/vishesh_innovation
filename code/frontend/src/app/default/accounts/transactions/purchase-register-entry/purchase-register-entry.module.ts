import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseRegisterEntryFormComponent} from "./screens/purchase-register-entry-form/purchase-register-entry-form.component";
import {ViewMRNModalComponent} from "./screens/view-mrn-modal/view-mrn-modal.component";
import {SharedModule} from "@shared/shared.module";
import { PurchaseRegisterEntryListComponent } from './screens/purchase-register-entry-list/purchase-register-entry-list.component';
import { FormScreenResolver } from "@core/guards";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: PurchaseRegisterEntryListComponent},
    {
        path: "form",
        component: PurchaseRegisterEntryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [PurchaseRegisterEntryFormComponent, ViewMRNModalComponent, PurchaseRegisterEntryListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseRegisterEntryModule {}
