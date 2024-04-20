import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ItemsListComponent} from "./screens/items-list/items-list.component";
import {ItemsFormComponent} from "./screens/items-form/items-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {ItemDocsUploadComponent} from "./screens/item-docs-upload/item-docs-upload.component";
import {GenSpecsComponent} from "./screens/gen-specs/gen-specs.component";
import {ItemAttributesComponent} from "./screens/item-attributes/item-attributes.component";
import {ItemTechSpecsComponent} from "./screens/item-tech-specs/item-tech-specs.component";
import {ItemRemarksComponent} from "./screens/item-remarks/item-remarks.component";
import {QCLevelComponent} from "./screens/qc-level/qc-level.component";
import {UnsavedChangesGuard} from "@core/guards";

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
