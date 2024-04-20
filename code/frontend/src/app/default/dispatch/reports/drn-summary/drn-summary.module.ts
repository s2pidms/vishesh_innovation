import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DRNSummaryComponent } from './drn-summary.component';
import { SharedModule } from '@shared/shared.module';


const routes: Routes = [
  { path: '', component: DRNSummaryComponent }
];

@NgModule({
  declarations: [
    DRNSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DRNSummaryModule { }
