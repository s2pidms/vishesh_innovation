import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MrnReportItemWiseComponent } from './mrn-report-item-wise.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: MrnReportItemWiseComponent }
];

@NgModule({
    declarations: [
        MrnReportItemWiseComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class MrnReportItemWiseModule { }
