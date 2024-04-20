import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PpicSfgStockComponent } from './ppic-sfg-stock.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: PpicSfgStockComponent }];

@NgModule({
  declarations: [PpicSfgStockComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PpicSfgStockModule {}
