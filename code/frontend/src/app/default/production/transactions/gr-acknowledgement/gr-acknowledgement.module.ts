import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrAcknowledgementListComponent } from './screens/gr-acknowledgement-list/gr-acknowledgement-list.component';
import { GrAcknowledgementFormComponent } from './screens/gr-acknowledgement-form/gr-acknowledgement-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: GrAcknowledgementListComponent },
  {
    path: 'form',
    component: GrAcknowledgementFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    GrAcknowledgementListComponent,
    GrAcknowledgementFormComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class GrAcknowledgementModule {}
