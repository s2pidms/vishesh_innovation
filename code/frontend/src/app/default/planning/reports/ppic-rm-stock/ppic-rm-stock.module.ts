import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PpicRmStockComponent } from './ppic-rm-stock.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: PpicRmStockComponent }];

@NgModule({
  declarations: [PpicRmStockComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PpicRmStockModule {}
