import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {RmSpecificationsFormComponent} from "./screens/rm-specifications-form/rm-specifications-form.component";
import {RmSpecificationsListComponent} from "./screens/rm-specifications-list/rm-specifications-list.component";
import {SharedModule} from "@shared/shared.module";
import {SpecificationsStatusSummaryComponent} from "./screens/specifications-status-summary/specifications-status-summary.component";
import { ViewSupplierModalComponent } from './screens/components/view-supplier-modal/view-supplier-modal.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: RmSpecificationsListComponent},
    {path: "form", component: RmSpecificationsFormComponent}
];

@NgModule({
    declarations: [RmSpecificationsFormComponent, RmSpecificationsListComponent, SpecificationsStatusSummaryComponent, ViewSupplierModalComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class RmSpecificationsModule {}
