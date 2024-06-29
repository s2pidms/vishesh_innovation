import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {FgInventoryReportComponent} from "./fg-inventory-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: FgInventoryReportComponent}];

@NgModule({
    declarations: [FgInventoryReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FgInventoryReportModule {}
