import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProformaInvoiceReportComponent } from './proforma-invoice-report.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: ProformaInvoiceReportComponent }
];

@NgModule({
    declarations: [
        ProformaInvoiceReportComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ProformaInvoiceReportModule { }
