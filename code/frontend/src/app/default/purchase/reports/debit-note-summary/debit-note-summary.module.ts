import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DebitNoteSummaryComponent } from './debit-note-summary.component';
import { SharedModule } from "../../../../shared/shared.module";


const routes: Routes = [
  { path: '', component: DebitNoteSummaryComponent }
];

@NgModule({
    declarations: [
        DebitNoteSummaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class DebitNoteSummaryModule { }
