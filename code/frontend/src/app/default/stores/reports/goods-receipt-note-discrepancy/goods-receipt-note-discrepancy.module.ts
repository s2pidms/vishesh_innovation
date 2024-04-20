import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoodsReceiptNoteDiscrepancyComponent } from './goods-receipt-note-discrepancy.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: GoodsReceiptNoteDiscrepancyComponent }
];

@NgModule({
    declarations: [
        GoodsReceiptNoteDiscrepancyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class GoodsReceiptNoteDiscrepancyModule { }
