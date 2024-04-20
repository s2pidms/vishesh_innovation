import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesForecastFormComponent } from './screens/sales-forecast-form/sales-forecast-form.component';
import { SalesForecastListComponent } from './screens/sales-forecast-list/sales-forecast-list.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { SharedModule } from '@shared/shared.module';
import { ForecastScheduleModalComponent } from './screens/forecast-schedule-modal/forecast-schedule-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SalesForecastListComponent },

  {
    path: 'form',
    component: SalesForecastFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    SalesForecastFormComponent,
    SalesForecastListComponent,
    ForecastScheduleModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SalesForecastModule {}
