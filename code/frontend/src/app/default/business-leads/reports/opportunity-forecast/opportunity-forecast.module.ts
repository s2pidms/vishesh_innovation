import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityForecastComponent } from './opportunity-forecast.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: OpportunityForecastComponent }];

@NgModule({
  declarations: [OpportunityForecastComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class OpportunityForecastModule {}
