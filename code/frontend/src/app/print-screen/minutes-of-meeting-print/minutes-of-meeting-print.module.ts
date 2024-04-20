import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {MinutesOfMeetingPrintComponent} from "./minutes-of-meeting-print.component";

const routes: Routes = [{path: "", component: MinutesOfMeetingPrintComponent}];

@NgModule({
    declarations: [MinutesOfMeetingPrintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MinutesOfMeetingPrintModule {}
