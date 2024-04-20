import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JcEntryListComponent} from "./screens/jc-entry-list/jc-entry-list.component";
import {JcEntryFormComponent} from "./screens/jc-entry-form/jc-entry-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {JcIPQAInfoModalComponent, JcProdInfoModalComponent} from "./screens/components";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JcEntryListComponent},
    {
        path: "form",
        component: JcEntryFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [JcEntryListComponent, JcEntryFormComponent, JcProdInfoModalComponent, JcIPQAInfoModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JcEntryModule {}
