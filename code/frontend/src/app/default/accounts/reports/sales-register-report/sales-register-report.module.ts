import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesRegisterReportComponent} from "./sales-register-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SalesRegisterReportComponent}];

@NgModule({
    declarations: [SalesRegisterReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesRegisterReportModule {}
