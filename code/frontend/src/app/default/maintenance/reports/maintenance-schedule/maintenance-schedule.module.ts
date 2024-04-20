import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceScheduleComponent } from './maintenance-schedule.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: MaintenanceScheduleComponent }
];

@NgModule({
    declarations: [
        MaintenanceScheduleComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class MaintenanceScheduleModule { }
