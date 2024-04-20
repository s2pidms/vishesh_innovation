import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseRegisterEntryFormComponent} from "./screens/purchase-register-entry-form/purchase-register-entry-form.component";
import {ViewMRNModalComponent} from "./screens/view-mrn-modal/view-mrn-modal.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {
        path: "form",
        component: PurchaseRegisterEntryFormComponent
    }
];

@NgModule({
    declarations: [PurchaseRegisterEntryFormComponent, ViewMRNModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseRegisterEntryModule {}
