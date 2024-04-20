import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HSNListComponent } from './screens/hsn-list/hsn-list.component';
import { HSNFormComponent } from './screens/hsn-form/hsn-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: HSNListComponent },
  {
    path: 'form',
    component: HSNFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [HSNListComponent, HSNFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HSNModule {}
