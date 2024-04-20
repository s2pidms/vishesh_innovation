import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {TicketDetailsPrintScreenComponent} from "./ticket-details-print-screen.component";

const routes: Routes = [{path: "", component: TicketDetailsPrintScreenComponent}];

@NgModule({
    declarations: [TicketDetailsPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TicketDetailsPrintScreenModule {}
