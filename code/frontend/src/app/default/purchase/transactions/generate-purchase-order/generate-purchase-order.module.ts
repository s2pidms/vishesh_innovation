import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PoListComponent } from './screens/po-list/po-list.component';
import { PoFormComponent } from './screens/po-form/po-form.component';
import { SharedModule } from '@shared/shared.module';
import { CancelListComponent } from './screens/cancel-list/cancel-list.component';
import { POChangePTComponent } from './screens/po-change-pt/po-change-pt.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { AmendPoComponent } from './screens/amend-po/amend-po.component';
import { POScheduleModalComponent } from './screens/po-schedule-modal/po-schedule-modal.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PoListComponent },
  {
    path: 'form',
    component: PoFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
  { path: 'cancel_list', component: CancelListComponent },
  { path: 'amend_po', component: AmendPoComponent },
];
@NgModule({
  declarations: [
    PoListComponent,
    PoFormComponent,
    CancelListComponent,
    POChangePTComponent,
    AmendPoComponent,
    POScheduleModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GeneratePurchaseOrderModule {}
