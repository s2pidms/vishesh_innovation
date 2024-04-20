import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {AsnReportComponent} from "./asn-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: AsnReportComponent}];

@NgModule({
    declarations: [AsnReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AsnReportModule {}
