import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SampleRequestReportComponent} from "./sample-request-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SampleRequestReportComponent}];

@NgModule({
    declarations: [SampleRequestReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleRequestReportModule {}
