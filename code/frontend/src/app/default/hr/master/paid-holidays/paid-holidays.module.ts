import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaidHolidaysListComponent } from './screens/paid-holidays-list/paid-holidays-list.component';
import { PaidHolidaysFormComponent } from './screens/paid-holidays-form/paid-holidays-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'ph-list', pathMatch: 'full' },
  { path: 'ph-list', component: PaidHolidaysListComponent },
  {
    path: 'ph-form',
    component: PaidHolidaysFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [PaidHolidaysListComponent, PaidHolidaysFormComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PaidHolidaysModule {}
