import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GrChildPartListComponent} from "./gr-child-part-list/gr-child-part-list.component";
import {GrChildPartFormComponent} from "./gr-child-part-form/gr-child-part-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";

const routes: Routes = [
    {path: "list", component: GrChildPartListComponent},
    {
        path: "form",
        component: GrChildPartFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [GrChildPartListComponent, GrChildPartFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GrChildPartModule {}
