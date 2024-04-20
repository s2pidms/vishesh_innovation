import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WinLossAnalysisComponent } from './win-loss-analysis.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: WinLossAnalysisComponent }];

@NgModule({
  declarations: [WinLossAnalysisComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class WinLossAnalysisModule {}
