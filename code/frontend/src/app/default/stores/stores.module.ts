import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [StoresComponent],
  imports: [CommonModule, StoresRoutingModule, SharedModule],
})
export class StoresModule {}
