import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PPVBySupplierComponent } from './ppv-by-supplier.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: PPVBySupplierComponent }
];

@NgModule({
    declarations: [
        PPVBySupplierComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class PPVBySupplierModule { }
