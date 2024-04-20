import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GTResponseListComponent} from "./screens/gt-response-list/gt-response-list.component";
import {GTResponseFormComponent} from "./screens/gt-response-form/gt-response-form.component";
import {GTResponseInventoryComponent} from "./screens/gt-response-inventory/gt-response-inventory.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {GTResponseRemarksModalComponent} from "./screens/gt-response-remarks-modal/gt-response-remarks-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: GTResponseListComponent},
    {
        path: "form",
        component: GTResponseFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        GTResponseListComponent,
        GTResponseFormComponent,
        GTResponseInventoryComponent,
        GTResponseRemarksModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GTResponseModule {}
