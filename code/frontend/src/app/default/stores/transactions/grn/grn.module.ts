import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GRNRoutingModule } from './grn-routing.module';
import { ListComponent } from './screens/list/list.component';
import { FormComponent } from './screens/form/form.component';
import { SharedModule } from '@shared/shared.module';
import { AddtionalInfoModalComponent } from './screens/addtional-info-modal/addtional-info-modal.component';
import { GrnLocationMappingComponent } from './screens/grn-location-mapping/grn-location-mapping.component';
import { CancelGrnComponent } from './screens/cancel-grn/cancel-grn.component';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    AddtionalInfoModalComponent,
    GrnLocationMappingComponent,
    CancelGrnComponent,
  ],
  imports: [CommonModule, GRNRoutingModule, SharedModule],
})
export class GRNModule {}
