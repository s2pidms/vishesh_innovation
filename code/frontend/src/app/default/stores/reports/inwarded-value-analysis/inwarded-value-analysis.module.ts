import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InwardedValueAnalysisComponent } from './inwarded-value-analysis.component';


const routes: Routes = [
  { path: '', component: InwardedValueAnalysisComponent }
];

@NgModule({
  declarations: [
    InwardedValueAnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InwardedValueAnalysisModule { }
