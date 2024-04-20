import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FGInventoryValueComponent } from './fg-inventory-value.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: FGInventoryValueComponent }];

@NgModule({
  declarations: [FGInventoryValueComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FGInventoryValueModule {}
