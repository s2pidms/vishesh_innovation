import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCostAnalysisComponent } from './purchase-cost-analysis.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: PurchaseCostAnalysisComponent }
];

@NgModule({
    declarations: [
        PurchaseCostAnalysisComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class PurchaseCostAnalysisModule { }
