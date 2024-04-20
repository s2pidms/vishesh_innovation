import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BTCListComponent } from './screens/btc-list/btc-list.component';
import { BTCFormComponent } from './screens/btc-form/btc-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BTCListComponent },
  {
    path: 'form',
    component: BTCFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [BTCListComponent, BTCFormComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class BTCModule {}
