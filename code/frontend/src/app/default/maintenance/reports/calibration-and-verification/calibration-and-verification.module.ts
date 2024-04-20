import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalibrationAndVerificationComponent } from './calibration-and-verification.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: CalibrationAndVerificationComponent }
];

@NgModule({
    declarations: [
        CalibrationAndVerificationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CalibrationAndVerificationModule { }
