import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesCostAnalysisComponent } from './sales-cost-analysis.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: SalesCostAnalysisComponent }
];

@NgModule({
    declarations: [
        SalesCostAnalysisComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class SalesCostAnalysisModule { }
