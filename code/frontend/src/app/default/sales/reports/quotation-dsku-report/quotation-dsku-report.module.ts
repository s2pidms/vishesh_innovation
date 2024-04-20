import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {QuotationDskuReportComponent} from "./quotation-dsku-report.component";
const routes: Routes = [{path: "", component: QuotationDskuReportComponent}];

@NgModule({
    declarations: [QuotationDskuReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class QuotationDskuReportModule {}
