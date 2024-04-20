import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityRoutingModule } from './quality-routing.module';
import { QualityComponent } from './quality.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [QualityComponent],
  imports: [CommonModule, QualityRoutingModule, SharedModule],
})
export class QualityModule {}
