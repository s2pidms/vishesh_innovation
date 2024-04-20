import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AttendanceReviewComponent} from "./attendance-review.component";
import {SharedModule} from "../../../../shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "attendance-review", pathMatch: "full"},
    {path: "attendance-review", component: AttendanceReviewComponent}
];

@NgModule({
    declarations: [AttendanceReviewComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AttendanceReviewModule {}
