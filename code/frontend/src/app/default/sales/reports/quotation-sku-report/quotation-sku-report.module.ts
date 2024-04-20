import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {QuotationSkuReportComponent} from "./quotation-sku-report.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: QuotationSkuReportComponent}];
@NgModule({
    declarations: [QuotationSkuReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class QuotationSkuReportModule {}
