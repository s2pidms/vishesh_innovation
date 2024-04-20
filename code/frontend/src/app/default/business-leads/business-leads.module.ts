import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessLeadsRoutingModule } from './business-leads-routing.module';
import { BusinessLeadsComponent } from './business-leads.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BusinessLeadsComponent],
  imports: [CommonModule, SharedModule, BusinessLeadsRoutingModule],
})
export class BusinessLeadsModule {}
