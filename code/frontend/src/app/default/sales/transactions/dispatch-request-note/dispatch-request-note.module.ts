import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DispatchRequestNoteListComponent} from "./screens/dispatch-request-note-list/dispatch-request-note-list.component";
import {DispatchRequestNoteFormComponent} from "./screens/dispatch-request-note-form/dispatch-request-note-form.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards/FormScreenResolver";
import {FGStockDetailsModalComponent} from "./screens/fg-stock-details-modal/fg-stock-details-modal.component";
import {DrnShipToAddressComponent} from "./screens/drn-ship-to-address/drn-ship-to-address.component";
import {DrnReviewTermsComponent} from "./screens/drn-review-terms/drn-review-terms.component";
import {DrnExportDetailsComponent} from "./screens/drn-export-details/drn-export-details.component";
import {CancelDrnComponent} from "./screens/cancel-drn/cancel-drn.component";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: DispatchRequestNoteListComponent},
    {path: "cancel_drn", component: CancelDrnComponent},
    {
        path: "form",
        component: DispatchRequestNoteFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [
        DispatchRequestNoteListComponent,
        DispatchRequestNoteFormComponent,
        FGStockDetailsModalComponent,
        DrnShipToAddressComponent,
        DrnReviewTermsComponent,
        DrnExportDetailsComponent,
        CancelDrnComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DispatchRequestNoteModule {}
