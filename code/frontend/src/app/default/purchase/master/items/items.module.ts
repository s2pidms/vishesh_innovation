import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ItemsListComponent} from "./screens/items-list/items-list.component";
import {ItemsFormComponent} from "./screens/items-form/items-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {UnsavedChangesGuard} from "@core/guards";
import {
    GenSpecsComponent,
    ItemAttributesComponent,
    ItemDocsUploadComponent,
    ItemRemarksComponent,
    ItemTechSpecsComponent,
    QCLevelComponent
} from "./screens/components";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ItemsListComponent},
    {
        path: "form",
        component: ItemsFormComponent,
        resolve: {accessScreen: FormScreenResolver},
        canDeactivate: [UnsavedChangesGuard]
    }
];
@NgModule({
    declarations: [
        ItemsListComponent,
        ItemsFormComponent,
        ItemDocsUploadComponent,
        GenSpecsComponent,
        ItemAttributesComponent,
        ItemTechSpecsComponent,
        ItemRemarksComponent,
        QCLevelComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ItemsModule {}
