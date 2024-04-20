import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ChildPartListComponent} from "./child-part-list/child-part-list.component";
import {ChildPartFormComponent} from "./child-part-form/child-part-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";

const routes: Routes = [
    {path: "list", component: ChildPartListComponent},
    {
        path: "form",
        component: ChildPartFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [ChildPartListComponent, ChildPartFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ChildPartModule {}
