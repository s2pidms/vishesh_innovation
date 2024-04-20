import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CostEstimateCalculatorComponent } from './cost-estimate-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'cal', pathMatch: 'full' },
  {
    path: 'cal',
    component: CostEstimateCalculatorComponent,
  },
];

@NgModule({
  declarations: [CostEstimateCalculatorComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CostEstimateCalculatorModule {}
