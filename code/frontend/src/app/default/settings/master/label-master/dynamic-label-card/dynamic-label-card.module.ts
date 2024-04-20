import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLabelCardComponent } from './dynamic-label-card.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: 'form', component: DynamicLabelCardComponent }];

@NgModule({
  declarations: [DynamicLabelCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DynamicLabelCardModule {}
