import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ReviewFeasibilityListComponent} from "./screens/review-feasibility-list/review-feasibility-list.component";
import {ReviewFeasibilityFormComponent} from "./screens/review-feasibility-form/review-feasibility-form.component";
import {CustomerInputsComponent} from "./screens/components/customer-inputs/customer-inputs.component";
import {TechnicalComponent} from "./screens/components/technical/technical.component";
import {EconomicComponent} from "./screens/components/economic/economic.component";
import {LegalComponent} from "./screens/components/legal/legal.component";
import {OperationalComponent} from "./screens/components/operational/operational.component";
import {SchedulingComponent} from "./screens/components/scheduling/scheduling.component";
import {SharedModule} from "../../../../shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {NpdReviewHistoryComponent} from "./screens/components/npd-review-history/npd-review-history.component";
import {NPDDetailsModalComponent} from "./screens/components/npd-details-modal/npd-details-modal.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: ReviewFeasibilityListComponent},
    {
        path: "form",
        component: ReviewFeasibilityFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        ReviewFeasibilityListComponent,
        ReviewFeasibilityFormComponent,
        CustomerInputsComponent,
        TechnicalComponent,
        EconomicComponent,
        LegalComponent,
        OperationalComponent,
        SchedulingComponent,
        NpdReviewHistoryComponent,
        NPDDetailsModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    exports: [
        CustomerInputsComponent,
        TechnicalComponent,
        EconomicComponent,
        LegalComponent,
        OperationalComponent,
        SchedulingComponent,
        NpdReviewHistoryComponent,
        NPDDetailsModalComponent
    ]
})
export class NpdReviewFeasibilityModule {}
