import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderSummaryReportComponent } from './purchase-order-summary-report.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: PurchaseOrderSummaryReportComponent }
];

@NgModule({
    declarations: [
        PurchaseOrderSummaryReportComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class PurchaseOrderSummaryReportModule { }
