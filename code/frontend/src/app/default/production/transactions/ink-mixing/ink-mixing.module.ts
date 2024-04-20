import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InkMixingListComponent} from "./screens/ink-mixing-list/ink-mixing-list.component";
import {InkMixingFormComponent} from "./screens/ink-mixing-form/ink-mixing-form.component";
import {InkMixingRemarksDetailsComponent} from "./screens/ink-mixing-remarks-details/ink-mixing-remarks-details.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import { InkCodeDetailsModalComponent } from './screens/ink-code-details-modal/ink-code-details-modal.component';

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: InkMixingListComponent},
    {
        path: "form",
        component: InkMixingFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [InkMixingListComponent, InkMixingFormComponent, InkMixingRemarksDetailsComponent, InkCodeDetailsModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InkMixingModule {}
