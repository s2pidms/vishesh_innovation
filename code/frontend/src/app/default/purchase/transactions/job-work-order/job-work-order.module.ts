import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JobWorkOrderFormComponent} from "./screens/job-work-order-form/job-work-order-form.component";
import {JobWorkOrderListComponent} from "./screens/job-work-order-list/job-work-order-list.component";
import {JobWorkOrderAddressModalComponent} from "./screens/components/job-work-order-address-modal/job-work-order-address-modal.component";
import {ReviewWoTermsModalComponent} from "./screens/components/review-wo-terms-modal/review-wo-terms-modal.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";
import {
    JwBillFromComponent,
    JwBillToComponent,
    JwDeliveryScheduleComponent,
    JwShipFromComponent,
    JwShipToComponent
} from "./screens/components";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: JobWorkOrderListComponent},
    {
        path: "form",
        component: JobWorkOrderFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        JobWorkOrderFormComponent,
        JobWorkOrderListComponent,
        JobWorkOrderAddressModalComponent,
        ReviewWoTermsModalComponent,
        JwBillFromComponent,
        JwBillToComponent,
        JwShipFromComponent,
        JwShipToComponent,
        JwDeliveryScheduleComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JobWorkOrderModule {}
