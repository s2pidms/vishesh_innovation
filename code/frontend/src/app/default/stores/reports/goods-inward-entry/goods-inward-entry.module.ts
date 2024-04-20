import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoodsInwardEntryComponent } from './goods-inward-entry.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: GoodsInwardEntryComponent }];

@NgModule({
  declarations: [GoodsInwardEntryComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class GoodsInwardEntryModule {}
