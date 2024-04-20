import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NpdLostOrderAnalysisComponent } from './npd-lost-order-analysis.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: NpdLostOrderAnalysisComponent }];

@NgModule({
  declarations: [NpdLostOrderAnalysisComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class NpdLostOrderAnalysisModule {}
