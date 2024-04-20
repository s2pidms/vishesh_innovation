import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GtRequestFulfillmentStatusComponent} from "./gt-request-fulfillment-status.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: GtRequestFulfillmentStatusComponent}];

@NgModule({
    declarations: [GtRequestFulfillmentStatusComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GtRequestFulfillmentStatusModule {}
