import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AsnListComponent } from './screens/asn-list/asn-list.component';
import { AsnFormComponent } from './screens/asn-form/asn-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { AsnDisaptchDetailsComponent } from './screens/asn-disaptch-details/asn-disaptch-details.component';
import { AsnBoxDetailsComponent } from './screens/asn-box-details/asn-box-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AsnListComponent },
  {
    path: 'form',
    component: AsnFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    AsnListComponent,
    AsnFormComponent,
    AsnDisaptchDetailsComponent,
    AsnBoxDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AsnModule {}
