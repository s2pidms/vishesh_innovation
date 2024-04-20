import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseRegisterReportComponent} from "./purchase-register-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: PurchaseRegisterReportComponent}];

@NgModule({
    declarations: [PurchaseRegisterReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseRegisterReportModule {}
