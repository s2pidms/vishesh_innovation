import { NgModule } from '@angular/core';
import { MRNListComponent } from './screens/mrn-list/mrn-list.component';
import { MRNFormComponent } from './screens/mrn-form/mrn-form.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import {
  GrnRemarksModalComponent,
  MrnGrnRemarksComponent,
  MrnQclModalComponent,
  MrnRemarksModalComponent,
} from './screens/components';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MRNListComponent },
  {
    path: 'form',
    component: MRNFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    MRNListComponent,
    MRNFormComponent,
    MrnRemarksModalComponent,
    GrnRemarksModalComponent,
    MrnQclModalComponent,
    MrnGrnRemarksComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class MRNModule {}
