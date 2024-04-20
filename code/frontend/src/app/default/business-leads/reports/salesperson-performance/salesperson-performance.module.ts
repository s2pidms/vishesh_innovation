import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalespersonPerformanceComponent } from './salesperson-performance.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: SalespersonPerformanceComponent },
];

@NgModule({
  declarations: [SalespersonPerformanceComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class SalespersonPerformanceModule {}
