import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./screens/form/form.component";
import {ListComponent} from "./screens/list/list.component";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {CancelGrnComponent} from "./screens/cancel-grn/cancel-grn.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ListComponent},
    {
        path: "form",
        component: FormComponent,
        resolve: {accessScreen: FormScreenResolver}
    },
    {path: "cancel_grn", component: CancelGrnComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GRNRoutingModule {}
