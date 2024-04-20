import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSalesOrderRoutingModule } from './book-sales-order-routing.module';
import { BSOListComponent } from './screens/bso-list/bso-list.component';
import { BSOFormComponent } from './screens/bso-form/bso-form.component';
import { SharedModule } from '@shared/shared.module';
import { CSOListComponent } from './screens/cso-list/cso-list.component';
import { OpenPoNoComponent } from './screens/open-po-no/open-po-no.component';
import { SoTermsDetailsComponent } from './screens/so-terms-details/so-terms-details.component';
import { SoTermsComponent } from './screens/so-terms/so-terms.component';
import { SoBillFormComponent } from './screens/so-bill-form/so-bill-form.component';
import { SoShipToComponent } from './screens/so-ship-to/so-ship-to.component';
import { SoTypeComponent } from './screens/so-type/so-type.component';
import { SoBillToComponent } from './screens/so-bill-to/so-bill-to.component';

@NgModule({
  declarations: [
    BSOListComponent,
    BSOFormComponent,
    CSOListComponent,
    OpenPoNoComponent,
    SoTermsDetailsComponent,
    SoTermsComponent,
    SoBillFormComponent,
    SoShipToComponent,
    SoTypeComponent,
    SoBillToComponent,
  ],
  imports: [CommonModule, BookSalesOrderRoutingModule, SharedModule],
})
export class BookSalesOrderModule {}
