import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentCreationListComponent } from './screens/shipment-creation-list/shipment-creation-list.component';
import { ShipmentCreationFormComponent } from './screens/shipment-creation-form/shipment-creation-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import {
  DrnBillFromComponent,
  DrnBillToComponent,
  DrnOtherChargesComponent,
  DrnPackingListComponent,
  DrnShipToComponent,
  DrnShipmentDetailsComponent,
  DrnSoTermsComponent,
  ViewDrnTermsComponent,
} from './screens/components';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ShipmentCreationListComponent },
  {
    path: 'form',
    component: ShipmentCreationFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    ShipmentCreationListComponent,
    ShipmentCreationFormComponent,
    ViewDrnTermsComponent,
    DrnBillFromComponent,
    DrnBillToComponent,
    DrnShipToComponent,
    DrnSoTermsComponent,
    DrnShipmentDetailsComponent,
    DrnOtherChargesComponent,
    DrnPackingListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ShipmentCreationModule {}
