import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  ShortSOComponent } from './short-so.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: ShortSOComponent }
];

@NgModule({
    declarations: [
        ShortSOComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ShortPOModule { }
