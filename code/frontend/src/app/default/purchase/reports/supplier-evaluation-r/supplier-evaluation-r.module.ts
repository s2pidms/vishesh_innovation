import { NgModule } from '@angular/core';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierEvaluationRComponent } from './supplier-evaluation-r.component';
import { SharedModule } from "../../../../shared/shared.module";
import { SupplierEvaluationMonthComponent } from './supplier-evaluation-month/supplier-evaluation-month.component';


const routes: Routes = [
  { path: '', component: SupplierEvaluationRComponent },
  { path: 'supplier_evaluation_month', component: SupplierEvaluationMonthComponent }
];

@NgModule({
    declarations: [
        SupplierEvaluationRComponent,
        SupplierEvaluationMonthComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        NgbModule
    ],
    providers: [
        NgbActiveModal,
    ]
})
export class SupplierEvaluationRModule { }
