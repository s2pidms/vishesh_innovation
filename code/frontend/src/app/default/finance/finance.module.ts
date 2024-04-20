import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [FinanceComponent],
  imports: [CommonModule, SharedModule, FinanceRoutingModule],
})
export class FinanceModule {}
