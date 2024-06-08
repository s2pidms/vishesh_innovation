import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {BomOfJobWorkItemListComponent} from "./bom-of-job-work-item-list/bom-of-job-work-item-list.component";
import {BomOfJobWorkItemFormComponent} from "./bom-of-job-work-item-form/bom-of-job-work-item-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: BomOfJobWorkItemListComponent},
    {
        path: "form",
        component: BomOfJobWorkItemFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [BomOfJobWorkItemListComponent, BomOfJobWorkItemFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class BomOfJobWorkItemModule {}
