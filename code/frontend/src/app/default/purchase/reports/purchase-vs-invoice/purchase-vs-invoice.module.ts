import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseVsInvoiceComponent } from './purchase-vs-invoice.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: PurchaseVsInvoiceComponent }
];

@NgModule({
    declarations: [
        PurchaseVsInvoiceComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class PurchaseVsInvoiceModule { }
