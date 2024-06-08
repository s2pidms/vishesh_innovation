import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobWorkChallanFormComponent} from "./screens/job-work-challan-form/job-work-challan-form.component";
import {JobWorkChallanListComponent} from "./screens/job-work-challan-list/job-work-challan-list.component";
import {JobWorkAddressModalComponent} from "./screens/components/job-work-address-modal/job-work-address-modal.component";
import {FreightTermsModalComponent} from "./screens/components/freight-terms-modal/freight-terms-modal.component";
import {JobWorkModalComponent} from "./screens/components/job-work-modal/job-work-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobWorkChallanListComponent},
    {
        path: "form",
        component: JobWorkChallanFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        JobWorkChallanFormComponent,
        JobWorkChallanListComponent,
        JobWorkAddressModalComponent,
        FreightTermsModalComponent,
        JobWorkModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkChallanModule {}
