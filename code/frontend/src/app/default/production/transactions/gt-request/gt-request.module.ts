import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GTRequestListComponent} from "./screens/gt-request-list/gt-request-list.component";
import {GTRequestFormComponent} from "./screens/gt-request-form/gt-request-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import { GTRequestRemarksModalComponent } from './screens/gt-request-remarks-modal/gt-request-remarks-modal.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: GTRequestListComponent},
    {
        path: "form",
        component: GTRequestFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [GTRequestListComponent, GTRequestFormComponent, GTRequestRemarksModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GTRequestModule {}
