import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityPipelineComponent } from './opportunity-pipeline.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: OpportunityPipelineComponent }];

@NgModule({
  declarations: [OpportunityPipelineComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class OpportunityPipelineModule {}
