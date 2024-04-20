import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GINRoutingModule } from './gin-routing.module';
import { ListComponent } from './screens/list/list.component';
import { FormComponent } from './screens/form/form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, GINRoutingModule, SharedModule],
})
export class GINModule {}
