import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrnReportItemWiseComponent } from './grn-report-item-wise.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: GrnReportItemWiseComponent }
];

@NgModule({
    declarations: [
        GrnReportItemWiseComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class GrnReportItemWiseModule { }
