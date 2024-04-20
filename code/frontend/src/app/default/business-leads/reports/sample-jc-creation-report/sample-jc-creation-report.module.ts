import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SampleJcCreationReportComponent} from "./sample-jc-creation-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SampleJcCreationReportComponent}];

@NgModule({
    declarations: [SampleJcCreationReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleJcCreationReportModule {}
