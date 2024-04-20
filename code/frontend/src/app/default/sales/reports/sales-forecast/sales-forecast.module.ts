import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesForecastComponent } from './sales-forecast.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: SalesForecastComponent }];

@NgModule({
  declarations: [SalesForecastComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SalesForecastModule {}
