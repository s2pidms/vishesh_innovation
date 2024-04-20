import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GIAGRRoutingModule } from './gia-gr-routing.module';
import { ListComponent } from './screens/list/list.component';
import { FormComponent } from './screens/form/form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, GIAGRRoutingModule, SharedModule],
})
export class GIAGRModule {}
