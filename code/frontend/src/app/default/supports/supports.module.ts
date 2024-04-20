import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportsRoutingModule } from './supports-routing.module';
import { SupportsComponent } from './supports.component';
import { SharedModule } from '@shared/shared.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [SupportsComponent, AccessDeniedComponent],
  imports: [CommonModule, SupportsRoutingModule, SharedModule],
})
export class SupportsModule {}
