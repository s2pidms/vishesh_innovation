import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderStatusComponent } from './work-order-status.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: WorkOrderStatusComponent }
];

@NgModule({
    declarations: [
        WorkOrderStatusComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class WorkOrderStatusModule { }
