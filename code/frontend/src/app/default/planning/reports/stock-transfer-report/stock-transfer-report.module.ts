import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StockTransferReportComponent } from './stock-transfer-report.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: StockTransferReportComponent }
];

@NgModule({
    declarations: [
        StockTransferReportComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class StockTransferReportModule { }
