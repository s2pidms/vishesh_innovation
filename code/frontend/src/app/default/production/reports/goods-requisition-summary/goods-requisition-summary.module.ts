import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoodsRequisitionSummaryComponent } from './goods-requisition-summary.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: GoodsRequisitionSummaryComponent },
];

@NgModule({
  declarations: [GoodsRequisitionSummaryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GoodsRequisitionSummaryModule {}
